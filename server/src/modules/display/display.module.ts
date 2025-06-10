import { Subject, timer, Observable } from "rxjs"
import { filter } from "rxjs/operators"
import { readFile, readFileSync, writeFileSync } from "fs";
// import * as path from "path";
import { resolve as resolve_path } from "path";
import { Server, Socket } from "socket.io"

import * as express from "express";

import { zip } from 'zip-a-folder';


import { SocketRequest, SocketResponse, SocketResponseResultTypes } from "../../../../misc/socket"
import { SiteConfig } from "../../../../misc/config";
import { LismorePacket } from "../../../../misc/lismore";




import { IDisplaySiteConfig, IDisplayAnimations } from "./defines";

import { Module, IModuleEvent, ModuleEventType } from "../../module";
import { Config, EHTTPReturn } from "../../defines"


class DisplayModule extends Module {
    protected site_config: IDisplaySiteConfig;
    private ongoing_events: Array<LismorePacket>;
    public constructor() {
        super();
        this.ongoing_events = [];
    }

    protected setConfig(config: Config): void {
        super.setConfig(config);
        this.loadSiteConfig();
    }

    public onSocketConnection(socket: Socket): void {
        socket.on("display", (request: SocketRequest, callback) => {
            this.handleSocketRequest(request)
                .then((response) => {
                    callback(response);
                })
                .catch((error: any) => {
                    this.error("Error handleSocketRequest", error, request);
                })
        });
    }
    public handleIncomingEvent(event: IModuleEvent): void {
        switch (event.event_type) {
            default:
                // this.error("handleIncomingEvent", "unknown event", event.event_type);
                break;
            case ModuleEventType.save_display_data:
                this.handleSaveDataEvent(event);
                break;
            case ModuleEventType.rx_udp_packet:
                this.handleRxUdpPacket(event);
                break
            case ModuleEventType.site_config_update:
                this.handleSiteConfigUpdate(event);
                break;

        }
    }


    public handleSocketRequest(request: SocketRequest): Promise<SocketResponse> {
        return new Promise<SocketResponse>((resolve, reject) => {
            let response: SocketResponse = undefined;
            switch (request.type) {
                default:
                    this.error("unknown socket request", request);
                    reject(response);
                    break;
                case "display.request.config":
                    resolve(this.handleRequestConfig(request));
                    break;
                case "display.request.events":
                    resolve(this.handleRequestEvents(request));
                    break;

            }
        });
    }


    protected handleRequestEvents(request: SocketRequest): Promise<SocketResponse> {
        return new Promise<SocketResponse>((resolve, reject) => {
            if (!request) {
                reject(new SocketResponse(request, SocketResponseResultTypes.bad_parameters));
            } else {
                this.log("handleRequestEvents", this.ongoing_events);
                resolve(new SocketResponse(request, SocketResponseResultTypes.success, this.ongoing_events));
            }
        });
    }




    protected handleRequestConfig(request: SocketRequest): Promise<SocketResponse> {
        return new Promise<SocketResponse>((resolve, reject) => {
            if (!request) {
                this.error("handleRequestConfig", "no request");
                reject(new SocketResponse(request, SocketResponseResultTypes.bad_parameters));
            } else {
                if (!this.site_config) {
                    this.error("handleRequestConfig", "no site config");
                    reject(new SocketResponse(request, SocketResponseResultTypes.bad_parameters));
                } else {
                    resolve(new SocketResponse(request, SocketResponseResultTypes.success, this.site_config));
                }
            }
        });
    }


    protected loadSiteConfig(): void {
        const site_config_path = resolve_path(this.Config.static_root, "site", "display.site.json");
        const site_json = readFileSync(site_config_path);
        this.site_config = JSON.parse(site_json.toString());
        this.site_config.zones.forEach(zone => {
            const zone_map_path = resolve_path(this.Config.static_root, "site", zone.map_file);
            try {
                zone.map_data = readFileSync(zone_map_path).toString();
            } catch (error) {
                this.error("loadSiteConfig", error);
            }
        });
        this.loadSiteAnimations();
    }

    protected loadSiteAnimations(): void {
        try {
            const filepath = resolve_path(this.Config.static_root, "site", "animations.json");
            this.log("loadSiteAnimations", "reading", filepath);
            const animation_data_buffer = readFileSync(filepath);
            this.log("loadSiteAnimations", "read", animation_data_buffer.length, "bytes");
            const animations: IDisplayAnimations = JSON.parse(animation_data_buffer.toString());
            this.site_config.animations = { end_events: animations.end_events, sequences: animations.sequences }
        } catch (error) {
            this.error("Exception thrown during animation read", error);
        }
    }
    protected saveSiteMaps(): void {
        this.site_config.zones.forEach(zone => {
            const zone_map_path = resolve_path(this.Config.static_root, "site", zone.map_file);
            try {
                writeFileSync(zone_map_path, zone.map_data);
                this.log("zone ", zone.display_name, "wrote", zone.map_data.length, "bytes to", zone_map_path);
            } catch (error) {
                this.error("loadSiteConfig", error);
            }
        });

    }
    protected handleSaveDataEvent(event: IModuleEvent): void {
        const data: IDisplaySiteConfig = event.payload as IDisplaySiteConfig;
        if (!data) {
            this.error("handleSaveDataEvent", "no event payload");
        } else {
            if (!data.zones) {
                this.error("handleSaveDataEvent", "no event payload zones");
            } else {
                data.zones.forEach(zone => {
                    const zone_array = this.site_config.zones.filter(existing_zone => zone.display_name === existing_zone.display_name);
                    if (zone_array.length < 1) {
                        this.error("handleSaveDataEvent", "no existing zone for", zone.display_name);
                    } else {
                        const existing_zone = zone_array[0];
                        existing_zone.map_data = zone.map_data;
                    }
                });
                this.saveSiteMaps();
                const site_path = resolve_path(this.Config.static_root, "site");
                const backup_path = resolve_path(this.Config.static_root, "backups");
                const timestamp = Math.round((new Date()).getTime() / 1000);
                const site_backup_path = resolve_path(backup_path, timestamp.toString()+"_site.zip");
                zip(site_path, site_backup_path)
                    .then(()=>{
                        const zones_path = resolve_path(this.Config.static_root, "zones");
                        const zones_backup_path = resolve_path(backup_path, timestamp.toString()+"_zones.zip");
                        zip(zones_path, zones_backup_path)
                            .then(()=>{
                            this.IO.sockets.in("display").emit('display.config.change', this.site_config);
                        })
                            .catch((error)=>{
                                this.error("Error backing up data : ",error);
                            });
                        
                    })
                    .catch((error)=>{
                        this.error("Error backing up data : ",error);
                    });

            }
        }
    }

    protected handleSiteConfigUpdate(event: IModuleEvent): void {
        if (!event) {
            this.error("handleSiteConfigUpdate", "no event");
        } else {
            if (!event.payload) {
                this.error("handleSiteConfigUpdate", "no event payload");
            } else {
                // currently we do nothing.
            }
        }
    }


    protected handleRxUdpPacket(event: IModuleEvent): void {
        const packet = event.payload as LismorePacket;
        if (!packet) {
            this.error("handleRxUdpPacket", "no packet");
        } else {
            if (packet.event_id < 0 || packet.event_id > 255) {
                this.error("handleRxUdpPacket", "no packet id", packet);
            } else {
                if (!this.site_config.animations) {
                    this.error("handleRxUdpPacket", "no animations");
                } else {
                    if (!this.site_config.animations.end_events) {
                        this.error("handleRxUdpPacket", "no end events");
                    } else {
                        if (this.site_config.animations.end_events.includes(packet.event_id)) {
                            // this.log("handleRxUdpPacket", "this is an end event", packet, this.ongoing_events);
                            this.ongoing_events = this.ongoing_events.filter(ongoing_event => {
                                return !ongoing_event.isTheSameDevice(packet);
                            });
                            // this.log("handleRxUdpPacket", "new ongoing events", this.ongoing_events);
                        } else {
                            this.site_config.animations.sequences.forEach(sequence => {
                                if (sequence.events.includes(packet.event_id)) {
                                    // this.log("handleRxUdpPacket", "this is an start event", packet, sequence, this.ongoing_events);

                                    this.ongoing_events = this.ongoing_events.filter(ongoing_event => {
                                        return !ongoing_event.isTheSameDevice(packet);
                                    });
                                    this.ongoing_events.push(packet);
                                    // this.log("handleRxUdpPacket", "new ongoing events", this.ongoing_events);
                                }
                            });
                        }
                    }
                }
            }
        }
    }

    // school's out
}


const display_module = new DisplayModule();
export { display_module as Display }
