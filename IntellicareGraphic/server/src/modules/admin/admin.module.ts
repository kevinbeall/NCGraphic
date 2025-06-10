import { Subject, timer, Observable } from "rxjs"
import { filter } from "rxjs/operators"
import { readFile, readFileSync, watchFile, writeFile } from "fs";
// import * as path from "path";
import { resolve as resolve_path } from "path";
import { Socket } from "socket.io" //

import * as express from "express";

var klawSync = require('klaw-sync');



import { SiteConfig, ZoneConfig, ZonesForMapFile, IDisplaySiteConfig, IDisplayZoneConfig } from "../../../../misc/config";
import { SocketRequest, SocketResponse, SocketResponseResultTypes } from "../../../../misc/socket";

import { Module, ModuleEventType } from "../../module";
import { Config } from "../../defines"


class AdminModule extends Module {
    protected site_config: SiteConfig;
    public constructor() {
        super();
        this.module_name = "AdminModule";
    }

    protected get SiteConfigPath(): string {
        return resolve_path(this.Config.static_root, "site", "site.json");
    }

    protected get AnimationConfigPath(): string {
        return resolve_path(this.Config.static_root, "site", "animations.json");
    }

    protected setConfig(config: Config): void {
        super.setConfig(config);
        this.loadSiteConfig();
        this.loadSiteAnimations();
        this.loadDeviceIcons();
        this.outputEvent(ModuleEventType.site_config_update, this.site_config);

    }

    public onSocketConnection(socket: Socket): void {
        socket.on("admin", (request: SocketRequest, callback) => {
            this.handleSocketRequest(request)
                .then((response) => {
                    callback(response);
                })
                .catch((error: any) => {
                    this.error("Error handleSocketRequest", error, request);
                })
        });
        socket.on("subscribe", (topic: string) => {
            socket.join(topic);

        });

    }


    public handleSocketRequest(request: SocketRequest): Promise<SocketResponse> {
        return new Promise<SocketResponse>((resolve, reject) => {
            let response: SocketResponse = undefined;
            switch (request.type) {
                default:
                    this.warn("unknown socket request", request);
                    reject(response);
                    break;
                case "request.admin.config":
                    resolve(this.handleRequestAdminConfig(request));
                    break;

                case "device.types.update":
                    resolve(this.handleDeviceTypesUpdateRequest(request));
                    break;

                case "display.save.config":
                    resolve(this.handleDisplaySaveConfig(request));
                    break;
            }
        });
    }

    protected handleDisplaySaveConfig(request: SocketRequest): Promise<SocketResponse> {
        return new Promise<SocketResponse>((resolve, reject) => {
            if (!request) {
                this.error("handleDisplaySaveConfig", "no request");
                reject(new SocketResponse(request, SocketResponseResultTypes.bad_parameters));
            } else {
                if (!request.payload) {
                    this.error("handleDisplaySaveConfig", "no request payload");
                    reject(new SocketResponse(request, SocketResponseResultTypes.bad_parameters));
                } else {
                    const config: IDisplaySiteConfig = request.payload as IDisplaySiteConfig;
                    if (!config.zones) {
                        this.error("handleDisplaySaveConfig", "no zones");
                        reject(new SocketResponse(request, SocketResponseResultTypes.bad_parameters));
                    } else {
                        this.outputEvent(ModuleEventType.save_display_data, request.payload, "DisplayModule");
                        resolve(new SocketResponse(request, SocketResponseResultTypes.success));
                    }
                }
            }
        });
    }

    protected handleRequestAdminConfig(request: SocketRequest): Promise<SocketResponse> {
        return new Promise<SocketResponse>((resolve, reject) => {
            if (!request) {
                this.error("handleRequestAdminConfig", "no request");

                reject(new SocketResponse(request, SocketResponseResultTypes.bad_parameters));
            } else {
                if (!this.site_config) {
                    this.error("handleRequestAdminConfig", "no site config");
                    reject(new SocketResponse(request, SocketResponseResultTypes.bad_parameters));
                } else {
                    resolve(new SocketResponse(request, SocketResponseResultTypes.success, { config: this.site_config }));
                }
            }
        });
    }

    protected handleDeviceTypesUpdateRequest(request: SocketRequest): Promise<SocketResponse> {
        return new Promise<SocketResponse>((resolve, reject) => {
            if (!request) {
                reject(new SocketResponse(request, SocketResponseResultTypes.bad_parameters));
            } else {
                if (!request.payload) {
                    reject(new SocketResponse(request, SocketResponseResultTypes.bad_parameters));
                } else {
                    this.site_config.device_types = request.payload;
                    this.onSiteConfigUpdated();
                }
            }
        });
    }
    protected loadDeviceIcons(): void {
        const icon_root = resolve_path(this.Config.static_root, "device");
        try {
            let paths = klawSync(icon_root, { filter: (item: any) => item.path.endsWith(".svg") });
            if (paths) {
                const icons: Array<string> = [];
                paths.forEach((path: any) => {
                    const data = readFileSync(path.path);
                    if (data) {
                        icons.push(data.toString());
                    }
                });
                this.site_config.device_type_icons = icons;
                this.log(icons.length, "device icons loaded");
            }
        } catch (err) {
            this.error("loadDeviceIcons:", err);
        }
    }

    protected loadSiteConfig(): void {

        this.log("loadSiteConfig", "reading site config from ", this.SiteConfigPath);
        const site_json = readFileSync(this.SiteConfigPath);
        this.site_config = JSON.parse(site_json.toString());
        this.site_config.zones.forEach(zone => {
            try {
                const filepath = resolve_path(this.Config.static_root, "zones", zone.map_file);
                this.log("loadSiteConfig", "reading zone ", zone.display_name, "map data from", filepath);
                const map_data_buffer = readFileSync(filepath);
                this.log("read", map_data_buffer.length, "bytes");
                zone.map_data = map_data_buffer.toString();
            }
            catch (error) {
                this.error("Exception during load map file data", error);
            }

        });
    }

    protected loadSiteAnimations(): void {
        try {
            this.log("loadSiteAnimations", "reading", this.AnimationConfigPath);
            const animation_data_buffer = readFileSync(this.AnimationConfigPath);
            this.log("loadSiteAnimations", "read", animation_data_buffer.length, "bytes");
            this.site_config.animations = JSON.parse(animation_data_buffer.toString());
        } catch (error) {
            this.error("Exception thrown during animation read", error);
        }
    }
    protected saveSiteConfig(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            // we don't want the zone map data in our json, or the type icon data - it all gets loaded separately
            const modified_site: SiteConfig = JSON.parse(JSON.stringify(this.site_config));
            modified_site.zones.forEach((zone: ZoneConfig) => {
                zone.map_data = "";
            });
            // modified_site.device_types.forEach(device_type => device_type.status = undefined);
            modified_site.device_type_icons = [];
            modified_site.animations = undefined;
            const site_json = JSON.stringify(modified_site);
            writeFile(this.SiteConfigPath, site_json, (error) => {
                if (error) {
                    reject("file write error: " + error);
                } else {
                    resolve(true);
                }
            });
        });
    }
    protected onSiteConfigUpdated(): void {
        this.saveSiteConfig()
            .then(result => {
                if (!result) {
                    this.error("saveSiteConfig failed");
                } else {
                    // update any clients?
                }
            })
            .catch(error => {
                this.error("exception during saveSiteConfig", error);
            });
    }


    // school's out
}



const admin_module = new AdminModule();
export { admin_module as Admin }
