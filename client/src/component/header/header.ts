import { Subject, fromEvent } from "rxjs";
import { Component } from "../component";
import { SiteConfig, ZoneForName } from "../../../../misc/config";
import { SocketRequest } from "../../../../misc/socket";

import { Mapbox } from "../mapbox/mapbox";
import { AppActionType, IAppAction } from "../../defines";
import { IntercallDevice } from "../../../../misc/device";

export class Header extends Component {

    protected el_sitename: HTMLElement;
    protected el_zones: HTMLSelectElement;
    protected el_nursecall_visiblity: HTMLInputElement;

    public mapbox: Mapbox;
    public constructor(socket_requests: Subject<SocketRequest>, actions: Subject<IAppAction>) {
        super(socket_requests, actions);
    }

    public onConfigUpdate(config: SiteConfig): void {
        super.onConfigUpdate(config);
        if (this.config) {
            if (this.el_sitename) {
                this.el_sitename.innerHTML = this.config.site_name;
            }
            if (this.el_zones) {
                let first_run = this.el_zones.options.length === 0;
                this.el_zones.options.length = 0;
                let option = document.createElement("option");
                option.value = "";
                option.text = "select a zone";
                this.el_zones.add(option);
                this.config.zones.forEach((z, idx) => {
                    let option = document.createElement("option");
                    option.value = "zone_" + idx;
                    option.text = z.display_name;
                    this.el_zones.add(option);
                });
                if (first_run) {
                    if (this.el_zones.options.length > 1) {
                        this.el_zones.selectedIndex = 1;
                        this.el_zones.dispatchEvent(new Event("change"));
                    }

                }
            }
        }
    }

    public onDOMConnection(el_root: HTMLElement): void {
        super.onDOMConnection(el_root);
        this.el_sitename = document.getElementById("header_sitename") as HTMLElement;
        this.el_zones = document.getElementById("header_zones") as HTMLSelectElement;
        this.el_zones.addEventListener("change", (event) => this.onZoneChange(event));
        this.el_nursecall_visiblity = document.getElementById("nursecall_visibility") as HTMLInputElement;
        if (this.el_nursecall_visiblity) {
            fromEvent(this.el_nursecall_visiblity, "change").subscribe(() => {
                this.updateNursecallVisibility(parseInt(this.el_nursecall_visiblity.value));
            });
        }
        const el_save = document.getElementById("header_save_button");
        if (el_save) {
            fromEvent(el_save, "click").subscribe(() => this.onSaveClick());
        }
        const el_floor_up=document.getElementById("tool_resize_up");
        if(el_floor_up){
            fromEvent(el_floor_up,"click").subscribe(()=>{
                const el_floor=document.getElementById("mapbox_svg_holder");
                if(el_floor){
                    this.mapbox.setFloorSizeTo(el_floor.clientWidth*1.05);
                }

            });
        }

        const el_floor_down=document.getElementById("tool_resize_down");
        if(el_floor_down){
            fromEvent(el_floor_down,"click").subscribe(()=>{
                const el_floor=document.getElementById("mapbox_svg_holder");
                if(el_floor){
                    this.mapbox.setFloorSizeTo(el_floor.clientWidth*0.95);
                }

            });
        }

    }

    public updateNursecallVisibility(value: number): void {
        const value_percent = value % 100;
        const value_normalised = value / 100;
        if (this.mapbox) {
            this.mapbox.updateNursecallOpacity(value_normalised);
        }
        if (this.el_nursecall_visiblity) {
            this.el_nursecall_visiblity.value = value_percent.toFixed();
        }

    }

    private onZoneChange(event: Event): void {
        if (event) {
            if (event.target) {
                const el = event.target as HTMLSelectElement;
                if (el.selectedOptions.length > 0) {
                    const option = el.selectedOptions[0];
                    if (option.value) {
                        const zone = ZoneForName(option.text, this.config);
                        if (!zone) {
                            this.error("onZoneChange", "no zone from zoneForName", option.text, this.config);
                        } else {
                            if (!zone.map_data) {
                                if (!this.socket_requests) {
                                    this.error("unable to request map data - no socket requests subject");
                                } else {
                                    this.socket_requests.next(new SocketRequest("request.map.data", { map_file: zone.map_file }));
                                }
                            } else {
                                if (this.mapbox) {
                                    this.mapbox.display(zone);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    private onSaveClick(): void {
        this.action_subject.next({ action_type: AppActionType.save_remote });
    }
}
