import { Subject } from "rxjs";


import { IDisplaySiteConfig, DisplayDefaultSiteConfig, } from "../display.defines";
import { SocketRequest } from "../../../../misc/socket";
import { AppActionType, IAppAction } from "../../defines"


import { Loggable } from "../../../../misc/loggable";

export class Component extends Loggable {

    protected el_root: HTMLElement;
    protected socket_requests: Subject<SocketRequest>;
    protected config: IDisplaySiteConfig = DisplayDefaultSiteConfig;

    public constructor(socket_requests: Subject<SocketRequest>) {
        super();
        this.SocketRequests = socket_requests;
    }
    public set SocketRequests(subject: Subject<SocketRequest>) { this.onSocketRequestSubjectUpdate(subject); }

    public onConfigUpdate(config: IDisplaySiteConfig): void {
        this.config = config;
    }

    public onDOMConnection(el_root: HTMLElement): void {
        this.el_root = el_root;
    }


    protected onSocketRequestSubjectUpdate(subject: Subject<SocketRequest>): void {
        this.socket_requests = subject;
    }

}
