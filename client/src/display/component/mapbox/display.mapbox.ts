import { Subject } from "rxjs"

import { SocketRequest } from "../../../../../misc/socket";
import { Component } from "../display.component";
import { UILayout, IDisplaySiteConfig } from "../../display.defines";
import { getUuid } from "../../../../../misc/tools";
import { LismorePacket } from "../../../../../misc/lismore";


const DEFAULT_LAYOUT = UILayout.two_column;
const FLOOR_WIDTH_TAG = "mapbox_floor_width";

export class DisplayMapbox extends Component {

    public constructor(socket_requests: Subject<SocketRequest>) {
        super(socket_requests);
    }

    public onConfigUpdate(config: IDisplaySiteConfig): void {
        super.onConfigUpdate(config);
        if (this.config) {
            if (this.el_root) {
                this.el_root.innerHTML = "";
                this.config.zones.forEach(zone => {
                    if (zone.map_data && zone.map_data.length > 0) {
                        const el_zone = document.createElement("div");
                        el_zone.id = getUuid();
                        el_zone.className = "zone";
                        el_zone.dataset.zone_name = zone.display_name;
                        this.el_root.insertAdjacentElement("beforeend", el_zone);

                        const el_title_holder = document.createElement("div");
                        el_title_holder.className = "zone_title";
                        el_title_holder.innerHTML = zone.display_name;
                        el_zone.append(el_title_holder);
                        const el_svg_holder = document.createElement("div");
                        el_svg_holder.innerHTML = zone.map_data;
                        el_zone.append(el_svg_holder);
                    }
                });
            }
        }
        try{
            const width_string = localStorage.getItem(FLOOR_WIDTH_TAG);
            const width = parseInt(width_string);
            if (!isNaN(width) && isFinite(width)){
                this.resizeFloorsTo(width);
            }

        }catch(error){
        }
    }

    public onDOMConnection(el_root: HTMLElement): void {
        super.onDOMConnection(el_root);
    }

    public onLismorePacket(packet: LismorePacket): void {
        this.config.animations.sequences.forEach(sequence => {
            sequence.events.forEach(event_id => {
                sequence.animations.forEach(animation_name => {
                    const id = "animation_" + animation_name + "_" + packet.address.toFixed() + ":" + packet.channel_id.toFixed() + ":" + packet.supply;
                    const el = document.getElementById(id) as any;
                    if (el) {
                        if (this.config.animations.end_events.indexOf(packet.event_id) !== -1) {
                            el.endElement();
                        }
                        if (sequence.events.indexOf(packet.event_id) !== -1) {
                            el.beginElement();
                        }
                    }


                    const no_supply_id = "animation_" + animation_name + "_" + packet.address.toFixed() + ":" + packet.channel_id.toFixed() + ":";
                    const no_supply_el = document.getElementById( no_supply_id) as any;
                    if ( no_supply_el) {
                        if (this.config.animations.end_events.indexOf(packet.event_id) !== -1) {
                            no_supply_el.endElement();
                        }
                        if (sequence.events.indexOf(packet.event_id) !== -1) {
                            no_supply_el.beginElement();
                        }
                    }

                });
            });
        });

    }
    public loadLastLayout(): UILayout {
        try {
            const layout = localStorage.getItem("mapbox_last_layout");
            return layout ? (layout as UILayout) : DEFAULT_LAYOUT;
        } catch (error) {
            return DEFAULT_LAYOUT;
        }
    }
    public saveLastLayout(layout: UILayout): void {
        localStorage.setItem("mapbox_last_layout", layout);
    }
    public setUILayout(layout: UILayout): void {
        switch (layout) {
            default:
            case UILayout.two_column:
                this.setUITwoColumn();
                break;
            case UILayout.one_column:
                this.setUIOneColumn();
                break;
            case UILayout.one_row:
                this.setUIOneRow();
                break;
        }
        this.saveLastLayout(layout);
    }

    public stopAllEventAnimations(): void {
        const els = document.getElementsByTagName("animate");
        Array.from(els).forEach((el: any) => el.endElement());
    }

    public resizeFloorsUp():void{
        if(this.el_root){
            const els = this.el_root.getElementsByClassName("zone");
            let width=0;
            if(els.length>0){
                width=els[0].clientWidth*1.05;
                this.resizeFloorsTo(width);
                // Array.from(els).forEach(el_zone => {
                //     const el_z=el_zone as HTMLElement;
                //     el_z.style.width=`${width}px`;
                // });
            }
        }
    }
    public resizeFloorsDown():void{
        if(this.el_root){
            const els = this.el_root.getElementsByClassName("zone");
            let width=0;
            if(els.length>0){
                width=els[0].clientWidth*0.95;
                this.resizeFloorsTo(width);
                // Array.from(els).forEach(el_zone => {
                //     const el_z=el_zone as HTMLElement;
                //     el_z.style.width=`${width}px`;
                // });
            }
        }
    }

    public resizeFloorsTo(width:number):void{
        width=Math.round(width);
        if(this.el_root){
            const els = this.el_root.getElementsByClassName("zone");
            Array.from(els).forEach(el_zone => {
                const el_z=el_zone as HTMLElement;
                el_z.style.width=`${width}px`;
            });
        }
        localStorage.setItem(FLOOR_WIDTH_TAG,width.toString());

    }


    private setUITwoColumn(): void {
        this.el_root.className = "mapbox_two_column";
        const els = this.el_root.getElementsByClassName("zone");
        Array.from(els).forEach(el_zone => {
            el_zone.className = "zone zone_two_column";
        });
    }
    private setUIOneColumn(): void {
        this.el_root.className = "mapbox_one_column";
        const els = this.el_root.getElementsByClassName("zone");
        Array.from(els).forEach(el_zone => {
            el_zone.className = "zone zone_one_column";
        });
    }
    private setUIOneRow(): void {
        this.el_root.className = "mapbox_one_row";
        const els = this.el_root.getElementsByClassName("zone");
        Array.from(els).forEach(el_zone => {
            el_zone.className = "zone zone_one_row";
        });
    }

 
}
