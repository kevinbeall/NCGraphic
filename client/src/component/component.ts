import { Subject } from "rxjs";


import { SiteConfig, DefaultSiteConfig, } from "../../../misc/config";
import { SocketRequest } from "../../../misc/socket";
import { AppActionType, IAppAction } from "../defines"


import { Loggable } from "../../../misc/loggable";

export class Component extends Loggable {

    protected el_root: HTMLElement;
    protected socket_requests: Subject<SocketRequest>;
    protected action_subject: Subject<IAppAction>;
    protected config: SiteConfig = DefaultSiteConfig;

    public constructor(socket_requests: Subject<SocketRequest>, actions: Subject<IAppAction>) {
        super();
        this.SocketRequests = socket_requests;
        this.ActionSubject = actions;
    }
    public set SocketRequests(subject: Subject<SocketRequest>) { this.onSocketRequestSubjectUpdate(subject); }
    public set ActionSubject(subject: Subject<IAppAction>) { this.onActionSubjectUpdate(subject); }

    public onConfigUpdate(config: SiteConfig): void {
        this.config = config;
    }

    public onDOMConnection(el_root: HTMLElement): void {
        this.el_root = el_root;
    }


    protected onSocketRequestSubjectUpdate(subject: Subject<SocketRequest>): void {
        this.socket_requests = subject;
    }
    protected onActionSubjectUpdate(subject: Subject<IAppAction>): void {
        this.action_subject = subject;
    }

}
