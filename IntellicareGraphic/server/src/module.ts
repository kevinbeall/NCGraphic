import { Observable, Subject } from "rxjs";
import * as express from "express";
import { Server, Socket } from "socket.io";

import { Loggable } from "../../misc/loggable";

import { EHTTPReturn, Config } from "./defines";

export enum ModuleEventType {
    nop = "nop",
    site_config_update = "site_config_update",
    save_display_data = "save_display_data",

    rx_udp_packet = "rx_udp_packet",
    error = "error"
}
export type ModuleEventPayload = Object;
export interface IModuleEvent {
    event_type: ModuleEventType;
    source: Module;//module emitting this event
    destination?: string;// a module name or nothing for a broadcast
    payload?: ModuleEventPayload;
}

export class Module extends Loggable {

    protected module_name: string;
    protected config: Config;
    protected io_server: Server;

    protected events_in: Subject<IModuleEvent>;
    protected events_out: Subject<IModuleEvent>;


    public get ModuleName(): string { return this.module_name; }

    public get Config(): Config { return this.config; }
    public set Config(config: Config) { this.setConfig(config); }

    public set IO(server: Server) { this.setIOServer(server); }
    public get IO(): Server { return this.io_server; }

    public get EventsIn(): Subject<IModuleEvent> { return this.events_in; }
    public set EventsIn(events_in: Subject<IModuleEvent>) { this.setEventsIn(events_in); };

    public get EventsOut(): Observable<IModuleEvent> { return this.events_out; }


    public constructor() {
        super();
        this.module_name = this.constructor.name;
        this.events_out = new Subject<IModuleEvent>();
    }

    public eventFilter(event: IModuleEvent): boolean { // return true if the name matches or if the goal is undefined/false
        let ret = false;
        if (!event) {
            this.error("eventFilter", "null event");
        } else {
            if (event.source === this) {
                // this.log("eventFilter", "ignoring self emitted event");
            } else {
                if (!event.destination) {
                    // this.log("eventFilter", "accepting broadcast event");
                    ret = true;
                } else {
                    if (event.destination === this.ModuleName) {
                        // this.log("eventFilter", "accepting event for this module");
                        ret = true;
                    } else {
                        // this.log("eventFilter", "rejecting event for", event.destination);
                    }
                }
            }
        }
        return ret;
    }

    public start(events_in?: Subject<IModuleEvent>): void {
        if (events_in) {
            this.EventsIn = events_in;
        }
    }
    public handleHTMLRequest(request: express.Request, response: express.Response): EHTTPReturn {
        return EHTTPReturn.unhandled;
    }
    public handleIncomingEvent(event: IModuleEvent): void {
    }

    public onSocketConnection(socket: Socket): void {

    }

    protected setIOServer(server: Server): void {
        this.io_server = server;
    }
    protected setConfig(config: Config): void {
        this.config = config;
    }

    protected setEventsIn(events_in: Subject<IModuleEvent>): void {
        this.events_in = events_in;
        this.events_in.subscribe(event => this.onIncomingEvent(event));
    }
    protected onIncomingEvent(event: IModuleEvent): void {
        if (this.eventFilter(event)) {
            this.handleIncomingEvent(event);
        }
    }

    protected outputEvent(event_type: ModuleEventType, payload: ModuleEventPayload, destination?: string): void {
        if (this.events_out) {
            this.events_out.next({ event_type, payload, destination, source: this });
        }
    }

}
