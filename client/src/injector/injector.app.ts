import { Subject, Subscription, fromEvent } from "rxjs";

import * as io from 'socket.io-client';

import { Loggable } from "../../../misc/loggable";
import { LismorePacket, LismoreEventNames } from "../../../misc/lismore";

import { Component } from "../component/component";

import { isNumber } from "util";


import { SocketRequest, SocketResponse } from "../../../misc/socket";

interface IInjectorDom {
    address: HTMLInputElement;
    channel: HTMLInputElement;
    supply: HTMLInputElement;
    event: HTMLSelectElement;
}

interface IDomValues {
    address?: number;
    channel_id?: number;
    supply?: string;
    event_id?: number;
    event_name?: string;
}

const DEFAULT_MAX_HISTORY_ENTRIES = 100;
const HISTORY_ENTRY_HTML = require("./injector.history.entry.html");

export class InjectorApp extends Loggable {

    private socket: SocketIOClient.Socket;

    private el_root: HTMLElement;


    private socket_requests: Subject<SocketRequest>;

    private sub_address_change: Subscription;
    private sub_channel_change: Subscription;
    private sub_event_change: Subscription;
    private sub_broadcast_click: Subscription;

    public constructor() {
        super();

        this.socket_requests = new Subject<SocketRequest>();
        this.socket_requests.subscribe(request => this.onSocketRequest(request), error => this.onSocketRequestError(error), () => this.onSocketRequestComplete());

        this.socket = io();

        this.socket.on('connect', (socket: SocketIOClient.Socket) => {
            this.onSocketConnection();
        });
    }

    public get SocketRequests(): Subject<SocketRequest> { return this.socket_requests; }


    public start(): void {
        this.el_root = document.getElementById("injector_app");
        if (this.el_root) {
            this.onDOMConnection();
        } else {
            this.error("no root element");
        }
    }




    protected onDOMConnection(): void {
        this.log("onDOMConnection");
        if (!this.el_root) {
            this.error("No Root element");
        } else {
            const el_event_select = document.getElementById("injector_event_select");
            if (!el_event_select) {
                this.error("no event select element");
            } else {
                for (const event in LismoreEventNames) {
                    if (!isNaN(parseInt(event))) {
                        const el_option = document.createElement("option");
                        el_option.value = event;
                        el_option.text = `${LismoreEventNames[event]} [${event}]`;
                        el_event_select.append(el_option);
                    }
                }
            }
        }
        if (this.sub_address_change) {
            this.sub_address_change.unsubscribe();
            this.sub_address_change = undefined;
        }
        if (this.sub_channel_change) {
            this.sub_channel_change.unsubscribe();
            this.sub_channel_change = undefined;
        }
        if (this.sub_event_change) {
            this.sub_event_change.unsubscribe();
            this.sub_event_change = undefined;
        }
        if (this.sub_broadcast_click) {
            this.sub_broadcast_click.unsubscribe();
            this.sub_broadcast_click = undefined;
        }

        const dom = this.elementsFromDom();
        if (dom) {
            if (dom.address) {
                this.sub_address_change = fromEvent(dom.address, "change").subscribe(() => this.validateDom());
            }
            if (dom.channel) {
                this.sub_channel_change = fromEvent(dom.channel, "change").subscribe(() => this.validateDom());
            }
            if (dom.event) {
                this.sub_event_change = fromEvent(dom.event, "change").subscribe(() => this.validateDom());
                dom.event.selectedIndex = 0;
            }
        }
        const el_broadcast_button = document.getElementById("injector_broadcast_button");
        if (el_broadcast_button) {
            this.sub_broadcast_click = fromEvent(el_broadcast_button, "click").subscribe(() => this.doBroadcast());
        }
        this.validateDom();
    }

    protected onSocketRequest(request: SocketRequest): void {
        if (this.socket && request) {
            this.socket.emit("injector", request, (response: SocketResponse) => {
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
            // this.onSocketPing();
        });
        this.socket.on('pong', () => {
            // this.onSocketPong();
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
        this.log("onSocketPing");
    }
    protected onSocketPong(): void {
        this.log("onSocketPong");
    }



    protected handleSocketResponse(response: SocketResponse): void {
        if (!response) {
            this.error("handleSocketResponse", "undefined response");
        } else {
            switch (response.request_type) {
                default:
                    this.error("handleSocketResponse", "unknown response type", response.request_type);
                    break;
                case "injector.inject":// empty response is returned when the server has injected
                    // this.log("handleSocketResponse", response.request_type, response.payload);
                    break;
            }
        }
    }



    private elementsFromDom(): IInjectorDom {
        return {
            address: document.getElementById("injector_address") as HTMLInputElement,
            channel: document.getElementById("injector_channel") as HTMLInputElement,
            supply: document.getElementById("injector_supply_name") as HTMLInputElement,
            event: document.getElementById("injector_event_select") as HTMLSelectElement,
        }
    }

    private valuesFromDom(els?: IInjectorDom): IDomValues {
        els = els ? els : this.elementsFromDom();
        const ret: IDomValues = {};
        if (els) {
            if (els.address) {
                ret.address = parseInt(els.address.value);
            }
            if (els.channel) {
                ret.channel_id = parseInt(els.channel.value);
            }
            if (els.supply) {
                ret.supply = els.supply.value;
            }
            if (els.event) {
                ret.event_id = parseInt(els.event.value);
                ret.event_name = LismoreEventNames[ret.event_id];
            }
        }
        return ret;
    }
    private validateDom(values?: IDomValues): Array<string> {
        values = values ? values : this.valuesFromDom();
        const errors: Array<string> = [];
        if (!values) {
            errors.push("error reading values");
        } else {
            if (isNaN(values.address)) {
                errors.push("address must be a number");
            } else {
                if (values.address < 1 || values.address > 255) {
                    errors.push("address must be between 1 and 255");
                }
            }
            if (isNaN(values.channel_id)) {
                errors.push("channel must be a number");
            } else {
                if (values.channel_id < 1 || values.channel_id > 255) {
                    errors.push("channel must be between 1 and 255");
                }
            }
            if (isNaN(values.event_id)) {
                errors.push("event must be a number");
            } else {
                if (values.event_id < 0 || values.event_id > 255) {
                    errors.push("event must be between 0 and 255");
                }
            }
        }
        const el_broadcast_button = document.getElementById("injector_broadcast_button");
        if (errors.length > 0) {
            if (el_broadcast_button) {
                el_broadcast_button.classList.add("form_error");
                el_broadcast_button.setAttribute("title", errors.join("\n"));
            }
        } else {
            if (el_broadcast_button) {
                el_broadcast_button.classList.remove("form_error");
                el_broadcast_button.setAttribute("title", "Click here to broadcast");
            }
        }
        return errors;
    }
    private doBroadcast(): void {
        const values = this.valuesFromDom();
        const errors = this.validateDom(values);
        if (errors.length < 1) {
            const packet = new LismorePacket();
            packet.fromObject(values);

            this.onSocketRequest(new SocketRequest("injector.inject", packet));
        }
    }



    private onLismorePacket(packet: LismorePacket): void {
        this.log("received packet", packet.address, ":", packet.channel_id, ":", packet.supply, "  event [" + packet.event_id + "]", packet.event_name);
        const el_history = document.getElementById("injector_history");
        const el_history_holder = document.getElementById("injector_history_holder");
        if (el_history_holder) {
            const history_items = Array.from(el_history_holder.getElementsByClassName("injector_history_entry"));
            while (history_items.length >= DEFAULT_MAX_HISTORY_ENTRIES) {
                const el = history_items.shift();
                el.remove();
            }
            const el_item = document.createElement("div");
            el_item.innerHTML = HISTORY_ENTRY_HTML;
            el_item.className = "injector_history_entry";

            let els = el_item.getElementsByClassName("injector_history_timestamp");
            const el_timestamp = els.length < 1 ? undefined : els[0] as HTMLElement;
            els = el_item.getElementsByClassName("injector_history_event");
            const el_event = els.length < 1 ? undefined : els[0] as HTMLElement;
            els = el_item.getElementsByClassName("injector_history_address");
            const el_address = els.length < 1 ? undefined : els[0] as HTMLElement;
            els = el_item.getElementsByClassName("injector_history_channel");
            const el_channel = els.length < 1 ? undefined : els[0] as HTMLElement;
            els = el_item.getElementsByClassName("injector_history_supply");
            const el_supply = els.length < 1 ? undefined : els[0] as HTMLElement;

            if (el_timestamp) {
                el_timestamp.innerHTML = new Date().toLocaleString();
            }
            if (el_event) {
                el_event.innerHTML = `[${packet.event_id}] ${packet.event_name}`;
            }
            if (el_address) {
                el_address.innerHTML = packet.address.toFixed();
            }
            if (el_channel) {
                el_channel.innerHTML = packet.channel_id.toFixed();
            }
            if (el_supply) {
                el_supply.innerHTML = packet.supply;
            }

            el_history_holder.append(el_item);
            const el_count = document.getElementById("injector_history_count") as HTMLElement;
            if (el_count) {
                el_count.innerHTML = el_history_holder.children.length.toFixed();
            }
            if (el_history) {
                const history_bounds = el_history.getBoundingClientRect();
                const history_holder_bounds = el_history_holder.getBoundingClientRect();
            }

        }

    }


}
