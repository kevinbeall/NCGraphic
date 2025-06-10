import { Subject } from "rxjs"
import { Component } from "../display.component";
import { SocketRequest } from "../../../../../misc/socket";
import { UILayout, IDisplaySiteConfig } from "../../display.defines";


export class DisplayHeader extends Component {


    protected el_sitename: HTMLElement;

    public constructor(socket_requests: Subject<SocketRequest>) {
        super(socket_requests);
    }

    public onConfigUpdate(config: IDisplaySiteConfig): void {
        super.onConfigUpdate(config);
        if (this.config) {
            if (this.el_sitename) {
                this.el_sitename.innerHTML = this.config.site_name;
            }
        }
    }

    public onDOMConnection(el_root: HTMLElement): void {
        super.onDOMConnection(el_root);
        this.el_sitename = document.getElementById("header_sitename") as HTMLElement;
    }


    public layoutChanged(layout: UILayout): void {
        const els = this.el_root.getElementsByClassName("ui_icon");
        Array.from(els).forEach(el_holder => {
            if (el_holder.children.length > 0) {
                el_holder.children[0].classList.remove("ui_selected");
                if (el_holder.children[0].id === layout) {
                    el_holder.children[0].classList.add("ui_selected");
                }
            }

        })

    }

}
