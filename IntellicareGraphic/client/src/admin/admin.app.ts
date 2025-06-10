import { Subject } from "rxjs";

import * as io from 'socket.io-client';

import { Loggable } from "../../../misc/loggable";
import { IDisplaySiteConfig, SiteConfig, ZonesForMapFile, ZoneForName } from "../../../misc/config";
import { SocketRequest, SocketResponse } from "../../../misc/socket";
import { Component } from "../component/component";
import { Header } from "../component/header/header";
import { Mapbox } from "../component/mapbox/mapbox";
import { DeviceTypes } from "../component/device/device.types";
import { AppActionType, IAppAction } from "../defines";
import { IntercallDevice } from "../../../misc/device";


export class AdminApp extends Loggable {

    private socket: SocketIOClient.Socket;

    private el_root: HTMLElement;

    private components: Array<Component>;
    private header: Header;
    private mapbox: Mapbox;
    private device_types: DeviceTypes;

    private socket_requests: Subject<SocketRequest>;
    private actions: Subject<IAppAction>;


    private site_config: SiteConfig;

    public constructor() {
        super();

        this.socket_requests = new Subject<SocketRequest>();
        this.socket_requests.subscribe(request => this.onSocketRequest(request), error => this.onSocketRequestError(error), () => this.onSocketRequestComplete());

        this.actions = new Subject<IAppAction>();
        this.actions.subscribe(action => this.onAction(action), error => this.onActionError(error), () => this.onActionComplete());

        this.socket = io();

        this.socket.on('connect', (socket: SocketIOClient.Socket) => {
            this.onSocketConnection();
        });



        this.header = new Header(this.socket_requests, this.actions);
        this.mapbox = new Mapbox(this.socket_requests, this.actions);
        this.device_types = new DeviceTypes(this.socket_requests, this.actions);

        this.header.mapbox = this.mapbox;
        this.device_types.mapbox = this.mapbox;
        this.mapbox.device_types = this.device_types;

        this.components = [this.header, this.mapbox, this.device_types];
    }

    public get SocketRequests(): Subject<SocketRequest> { return this.socket_requests; }


    public start(): void {
        this.el_root = document.getElementById("admin_app");
        if (this.el_root) {
            this.onDOMConnection();
            this.onSocketRequest(new SocketRequest("request.admin.config"));
            this.onSocketRequest(new SocketRequest("display.request.config"), "display");
        } else {
            this.error("no root element");
        }
    }




    protected onDOMConnection(): void {
        if (!this.el_root) {
            this.error("No Root element");
        } else {
            let el = document.getElementById("header");
            if (el) {
                this.header.onDOMConnection(el);
            } else {
                this.warn("no element for header");
            }

            el = document.getElementById("mapbox");
            if (el) {
                this.mapbox.onDOMConnection(el);
            } else {
                this.warn("no element for mapbox");
            }
            el = document.getElementById("device_types");
            if (el) {
                this.device_types.onDOMConnection(el);
            } else {
                this.warn("no element for device types");
            }

            if (this.site_config) {
                this.onConfigChange();
            }
        }
    }

    protected onSocketRequest(request: SocketRequest, recipient: string = "admin"): void {
        if (this.socket && request) {
            this.socket.emit(recipient, request, (response: SocketResponse) => {
                this.handleSocketResponse(response);
            });
        }
    }


    protected onSocketRequestError(error: any): void {
        this.error("onSocketRequestError", error);
    }
    protected onSocketRequestComplete(): void {
        this.error("onSocketRequestComplete");
    }

    protected onAction(action: IAppAction): void {
        switch (action.action_type) {
            default:
                this.log("onAction", "unknown action", action);
                break;
            case AppActionType.save_remote:
                this.saveRemote();
                break;
            case AppActionType.updateNursecallLayerVisibility:
                this.header.updateNursecallVisibility(action.payload as number);
                break;
            case AppActionType.checkForDuplicates:
                this.checkForDuplicateDevices();
                break;
        }

    }
    protected onActionError(error: any): void {
    }
    protected onActionComplete(): void {
    }

    protected onSocketConnection(): void {
        this.socket.removeAllListeners();
        this.socket.on("config.change", (config: SiteConfig) => {
            this.onConfigChange(config);
        });

        this.socket.on('connect', (socket: SocketIOClient.Socket) => {
            this.onSocketConnection();
        });
        this.socket.on('disconnect', () => {
            this.onSocketDisconnected();
        });

        this.socket.on('reconnect', () => {
            this.onSocketReconnected();
        });
        this.socket.on('ping', () => {
            this.onSocketPing();
        });
        this.socket.on('pong', () => {
            this.onSocketPong();
        });


        this.socket.emit("subscribe", "admin");

    }
    protected onSocketDisconnected(): void {
        this.log("onSocketDisonnected");
    }
    protected onSocketReconnected(): void {
        this.log("onSocketReconnected");
    }

    protected onSocketPing(): void {
        //        this.log("onSocketPing");
    }
    protected onSocketPong(): void {
        //        this.log("onSocketPong");
    }

    protected onConfigChange(config?: SiteConfig): void {
        this.site_config = config;
        if (this.site_config) {

        }

        // the order of this is important
        this.mapbox.onConfigUpdate(this.site_config);
        this.device_types.onConfigUpdate(this.site_config);
        this.header.onConfigUpdate(this.site_config);

    }


    protected handleSocketResponse(response: SocketResponse): void {
        if (!response) {
            this.error("handleSocketResponse", "undefined response");
        } else {
            switch (response.request_type) {
                default:
                    this.error("handleSocketResponse", "known response type", response.request_type);
                    break;
                case "request.admin.config":
                    this.handleAdminConfigResponse(response);
                    break;
                case "display.save.config":
                    this.handleDisplaySaveConfigResponse(response);
                    break;
                case "display.request.config":
                    this.handleDisplayRequestConfigResponse(response);
                    break;
              
            }
        }
    }
    protected handleDisplayRequestConfigResponse(response: SocketResponse): void {
        if (!response) {
            this.error("handleDisplayRequestConfigResponse", "no response");
        } else {
            if (!response.payload) {
                this.error("handleDisplayRequestConfigResponse", "no response payload");
            } else {
                if (!response.payload.zones) {
                    this.error("handleDisplayRequestConfigResponse", "no response payload zones");
                } else {
                    const data: IDisplaySiteConfig = response.payload;
                    const original_zone = this.mapbox.CurrentZone;
                    data.zones.forEach(zone => {
                        const current_zone = ZoneForName(zone.display_name, this.site_config);
                        if (!current_zone) {
                            this.error("handleDisplayRequestConfigResponse", "currently we have no zone named", zone.display_name);
                        } else {
                            this.mapbox.display(current_zone);
                            const el = document.createElement("g");
                            if (!el) {
                                this.error("handleDisplayRequestConfigResponse", "error creating zone device element");
                            } else {
                                el.innerHTML = zone.map_data;
                                const els = el.getElementsByClassName("intercall_device");
                                Array.from(els).forEach(device_element => {
                                    this.mapbox.insertDeviceFromExternalElement(device_element);

                                });
                                this.mapbox.updateUI();
                            }
                        }
                    });
                    if (original_zone) {
                        this.mapbox.display(original_zone);
                    } else {
                        if (!this.site_config.zones) {
                            this.error("handleDisplayRequestConfigResponse", "no site config zones object");
                        } else {
                            if (this.site_config.zones.length < 1) {
                                this.error("handleDisplayRequestConfigResponse", "no site config zones");
                            } else {
                                this.mapbox.display(this.site_config.zones[0]);
                            }
                        }
                    }
                }
            }
        }

    }

    protected handleDisplaySaveConfigResponse(response: SocketResponse): void {
        window.alert("maps saved");
        if (this.site_config.zones.length > 0) {
            this.mapbox.display(this.site_config.zones[0]);
        }

    }
    protected handleAdminConfigResponse(response: SocketResponse): void {
        if (!response) {
            this.error("handleAdminConfigResponse", "no response");
        } else {
            if (!response.payload) {
                this.error("handleAdminConfigResponse", "no response payload");
            } else {
                this.onConfigChange(response.payload.config);
            }
        }
    }


    protected saveRemote(): void {
        this.mapbox.deselectAllDevices();
        const dups = this.checkForDuplicateDevices();
        if (dups.length > 0) {
            let msg = "One or more devices are badly addressed:\nPlease fix these issues before continuing\n\n";
            const uids = dups.map(device => device.IntercallUid);
            msg += uids.join("\n");
            window.alert(msg);
        } else {
            const config: IDisplaySiteConfig = {
                site_name: this.site_config.site_name,
                zones: [],
            }
            this.site_config.zones.forEach(zone => {
                const html = this.mapbox.getDisplayHTML(zone.display_name);
                config.zones.push({
                    display_name: zone.display_name,
                    map_data: html,
                    devices: zone.devices
                })
            });
            const request = new SocketRequest("display.save.config", config);
            this.onSocketRequest(request);
        }
    }

    protected checkForDuplicateDevices(): Array<IntercallDevice> {
        let ret: Array<IntercallDevice> = [];
        if (!this.site_config) {
            // this.error("checkForDuplicateDevices", "no site_config");
        } else {
            if (!this.site_config.zones) {
                // this.error("checkForDuplicateDevices", "no site_config zones");
            } else {
                const intercall_uids: Array<string> = [];
                this.site_config.zones.forEach(zone => {
                    if (!zone.devices) {
                        // this.error("checkForDuplicateDevices", "no zone devices", zone.display_name);
                    } else {
                        zone.devices.forEach(device => {
                            if (intercall_uids.includes(device.IntercallUid)) {
                                ret.push(device);
                            } else {
                                intercall_uids.push(device.IntercallUid);
                            }
                        });
                    }
                });
            }
            this.mapbox.DevicesInError = ret;

            return ret;
        }
    }
}
