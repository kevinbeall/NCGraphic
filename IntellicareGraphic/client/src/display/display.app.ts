import { Subject, fromEvent } from "rxjs";

import * as io from 'socket.io-client';

import { Loggable } from "../../../misc/loggable";
import { LismorePacket } from "../../../misc/lismore";

import { Component } from "../component/component";
import { IDisplaySiteConfig, UILayout } from "./display.defines";


import { SocketRequest, SocketResponse } from "../../../misc/socket";
import { DisplayHeader } from "./component/header/display.header";
import { DisplayMapbox } from "./component/mapbox/display.mapbox";


export class DisplayApp extends Loggable {

    private socket: SocketIOClient.Socket;

    private el_root: HTMLElement;
    private el_box: HTMLElement;

    private components: Array<Component>;
    private header: DisplayHeader;
    private mapbox: DisplayMapbox;

    private socket_requests: Subject<SocketRequest>;


    private site_config: IDisplaySiteConfig;

    public constructor() {
        super();

        this.socket_requests = new Subject<SocketRequest>();
        this.socket_requests.subscribe(request => this.onSocketRequest(request), error => this.onSocketRequestError(error), () => this.onSocketRequestComplete());

        this.socket = io();

        this.socket.on('connect', (socket: SocketIOClient.Socket) => {
            this.onSocketConnection();
        });


        this.header = new DisplayHeader(this.SocketRequests);
        this.mapbox = new DisplayMapbox(this.SocketRequests);



    }

    public get SocketRequests(): Subject<SocketRequest> { return this.socket_requests; }


    public start(): void {
        this.el_root = document.getElementById("display_app");
        if (this.el_root) {
            this.onDOMConnection();
            this.onSocketRequest(new SocketRequest("display.request.config"));
        } else {
            this.error("no root element");
        }
    }




    protected onDOMConnection(): void {
        if (!this.el_root) {
            this.error("No Root element");
        } else {
            this.header.onDOMConnection(document.getElementById("header"));
            this.mapbox.onDOMConnection(document.getElementById("mapbox"));

            const el_two_column = document.getElementById("ui_two_column");
            const el_one_column = document.getElementById("ui_one_column");
            const el_one_row = document.getElementById("ui_one_row");
            const el_refresh_events = document.getElementById("tool_refresh_events");
            const el_full_screen = document.getElementById("tool_fullscreen");
            const el_exit_full_screen = document.getElementById("tool_exit_fullscreen");

            const el_resize_up = document.getElementById("tool_resize_up");
            const el_resize_down = document.getElementById("tool_resize_down");

            if (el_two_column) {
                fromEvent(el_two_column, "click").subscribe(() => {
                    this.mapbox.setUILayout(UILayout.two_column);
                    this.header.layoutChanged(UILayout.two_column);
                });
            }
            if (el_one_column) {
                fromEvent(el_one_column, "click").subscribe(() => {
                    this.mapbox.setUILayout(UILayout.one_column);
                    this.header.layoutChanged(UILayout.one_column);
                });
            }
            if (el_one_row) {
                fromEvent(el_one_row, "click").subscribe(() => {
                    this.mapbox.setUILayout(UILayout.one_row);
                    this.header.layoutChanged(UILayout.one_row);
                });
            }
            if (el_refresh_events) {
                fromEvent(el_refresh_events, "click").subscribe(() => this.refreshEvents());
            }

            if (el_full_screen) {
                fromEvent(el_full_screen, "click").subscribe(() => {
                    el_full_screen.classList.remove("shown");
                    el_full_screen.classList.add("hidden");
                    el_exit_full_screen.classList.add("shown");
                    el_exit_full_screen.classList.remove("hidden");
                    this.el_root.requestFullscreen();
                })
            }

            if (el_exit_full_screen) {
                fromEvent(el_exit_full_screen, "click").subscribe(() => {
                    el_exit_full_screen.classList.remove("shown");
                    el_exit_full_screen.classList.add("hidden");
                    el_full_screen.classList.add("shown");
                    el_full_screen.classList.remove("hidden");
                    document.exitFullscreen();
                })
            }

            if(el_resize_up){
                fromEvent(el_resize_up,"click").subscribe(()=>{
                    this.mapbox.resizeFloorsUp();
                });
            }
            if(el_resize_down){
                fromEvent(el_resize_down,"click").subscribe(()=>{
                    this.mapbox.resizeFloorsDown();
                });
            }

            if (this.site_config) {
                this.onConfigChange();
            }
        }
    }

    protected onSocketRequest(request: SocketRequest): void {
        if (this.socket && request) {
            this.socket.emit("display", request, (response: SocketResponse) => {
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


    protected onActionError(error: any): void {
    }
    protected onActionComplete(): void {
    }

    protected onSocketConnection(): void {
        this.socket.removeAllListeners();
        this.socket.on("display.config.change", (config: IDisplaySiteConfig) => {
            this.onConfigChange(config);

        });
        this.socket.on("raw_packet", (packet: string) => {
            try {
                let lismore_packet: LismorePacket = JSON.parse(packet);;
                this.onLismorePacket(lismore_packet);

            } catch (error) {
                this.error("onRawPacket", error, packet);
            }
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


        this.socket.emit("subscribe", "display");

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

    protected onConfigChange(config?: IDisplaySiteConfig): void {
        this.site_config = config;
        this.header.onConfigUpdate(config);
        this.mapbox.onConfigUpdate(config);
        const last_layout = this.mapbox.loadLastLayout();
        this.mapbox.setUILayout(last_layout);
        this.header.layoutChanged(last_layout);
        this.refreshEvents();
    }


    protected handleSocketResponse(response: SocketResponse): void {
        if (!response) {
            this.error("handleSocketResponse", "undefined response");
        } else {
            switch (response.request_type) {
                default:
                    this.error("handleSocketResponse", "unknown response type", response.request_type);
                    break;
                case "display.request.config":
                    this.handleRequestConfigResponse(response);
                    break;
                case "display.request.events":
                    this.handleRequestEventsResponse(response);
                    break;
                case "request.map.data":
                    if (!this.site_config) {
                        this.warn("handleSocketResponse", "request.map.data", "no site config");
                    } else {
                        if (!response.payload) {
                            this.warn("handleSocketResponse", "request.map.data", "no response payload");
                        } else {
                            if (!response.payload.map_file) {
                                this.warn("handleSocketResponse", "request.map.data", "no payload map file");

                            }
                        }
                    }
            }
        }
    }

    protected handleRequestConfigResponse(response: SocketResponse): void {
        if (!response) {
            this.warn("handleRequestConfigResponse", "no response");
        } else {
            if (!response.payload) {
                this.warn("handleRequestConfigResponse", "no response payload");
            } else {
                this.onConfigChange(response.payload);
            }
        }
    }

    private onLismorePacket(packet: LismorePacket): void {
        if (this.mapbox) {
            this.mapbox.onLismorePacket(packet);
        }

    }


    private refreshEvents(): void {
        const el_refresh_events = document.getElementById("tool_refresh_events");
        if (el_refresh_events) {
            el_refresh_events.addEventListener("animationend", () => el_refresh_events.classList.remove("refresh_ping"));
            el_refresh_events.classList.add("refresh_ping");
        }
        this.onSocketRequest(new SocketRequest("display.request.events"));

    }
    private handleRequestEventsResponse(response: SocketResponse): void {
        this.log("Ongoing events are :", response.payload);
        if (!response) {
            this.error("handleRequestEventsResponse", "no response");
        } else {
            this.mapbox.stopAllEventAnimations();
            if (response.payload) {
                response.payload.forEach((packet: LismorePacket) => this.onLismorePacket(packet));
            }
            const el_refresh_events = document.getElementById("tool_refresh_events");
            if (el_refresh_events) {
                el_refresh_events.addEventListener("animationend", () => el_refresh_events.classList.remove("refresh_ping"));
                el_refresh_events.classList.add("refresh_ping");
            }
        }
    }
}
