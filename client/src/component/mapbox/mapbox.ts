import { Subject, fromEvent } from "rxjs";
import { Component } from "../component";
import { SiteConfig, ZoneConfig, Point, ZoneForName } from "../../../../misc/config";
import { SocketRequest } from "../../../../misc/socket";
import { IAnimation } from "../../../../misc/animation";
import { isNumber } from "util";
import { getParentElementWithAttribute } from "../../../../misc/tools";
import { DeviceTypes } from "../device/device.types";
import { IntercallDeviceType } from "../../../../misc/device";
import { IntercallDevice } from "../../../../misc/device";
import { DeviceEditor, DeviceEditorMessageType } from "../device/device.editor";
import { AppActionType, IAppAction } from "../../defines";

export enum MapboxMode {
    none = "none",
    display = "display",
    insert = "insert"
}

const SVGNS = "http://www.w3.org/2000/svg";

const HTML = require("./mapbox.html");


const DEFAULT_DEVICE_FILL_COLOR = "#FFFFDD";
const SELECTED_DEVICE_FILL_COLOR = "#FFFF00";
const ERROR_DEVICE_FILL_COLOR = "#FF0000";

export class Mapbox extends Component {

    protected el_svg_holder: HTMLElement;
    protected el_svg: SVGSVGElement;
    protected el_map_header_mode: HTMLElement;
    protected el_nursecall_layer: HTMLElement;

    protected el_devices: SVGGElement;
    protected el_device_select: HTMLSelectElement;

    protected el_mouse_xy: HTMLElement;
    protected el_mouse_display: HTMLElement;
    protected el_mouse_svg: HTMLElement;

    protected insert_device_type: IntercallDeviceType;
    protected mode: MapboxMode;
    protected current_zone: ZoneConfig;

    protected editor_device: IntercallDevice;

    public device_types: DeviceTypes;

    public devices_in_error: Array<IntercallDevice>;


    public constructor(socket_requests: Subject<SocketRequest>, actions: Subject<IAppAction>) {
        super(socket_requests, actions);
        this.mode = MapboxMode.none;
        this.devices_in_error = [];
    }

    public get Element(): HTMLElement { return this.el_root; }
    public get CurrentZone(): ZoneConfig { return this.current_zone; }
    public set DevicesInError(devices: Array<IntercallDevice>) { this.setDevicesInError(devices) }

    public onDOMConnection(el_root: HTMLElement): void {
        super.onDOMConnection(el_root);
        if (this.el_root) {
            this.el_root.innerHTML = HTML;
        }
        if (this.el_device_select) {
            this.el_device_select.options.length = 1;
        }

        this.el_svg_holder = document.getElementById("mapbox_svg_holder");
        this.el_map_header_mode = document.getElementById("mapbox_header_mode");

        this.el_mouse_xy = document.getElementById("mapbox_header_mouse_xy");
        this.el_mouse_display = document.getElementById("mapbox_header_display");
        this.el_mouse_svg = document.getElementById("mapbox_header_svg");

        this.el_device_select = document.getElementById("mapbox_device_select") as HTMLSelectElement;


        if (this.el_device_select) {
            fromEvent(this.el_device_select, "change").subscribe(() => this.onDeviceSelectChange());
        }

        this.updateModeUI();
        this.updateDeviceList();
    }

    public onConfigUpdate(config: SiteConfig): void {
        super.onConfigUpdate(config);
        if (!this.config) {
            this.error("onConfigUpdate", "no config");
        } else {
            if (!this.current_zone) {
                if (!this.config.zones) {
                    this.error("onConfigUpdate", "no config zones");
                } else {
                    if (this.config.zones.length < 1) {
                        this.error("onConfigUpdate", "config zones is empty");
                    } else {
                        this.display(this.config.zones[0]);
                    }
                }
            }
        }
    }


    public displayZoneName(name: string): boolean {
        let ret = false;
        const zone = this.config.zones.find(zone => zone.display_name === name);
        if (zone) {
            this.display(zone);
            ret = true;
        }
        return ret;
    }

    public display(zone: ZoneConfig): void {
        if (!zone) {
            this.error("display", "no zone");
        } else {
            if (this.device_types) {
                this.device_types.deselectAll();
            }
            const el_zones = document.getElementById("header_zones") as HTMLSelectElement;
            if (el_zones) {
                Array.from(el_zones.options).forEach(option => { if (option.text === zone.display_name) { el_zones.selectedIndex = option.index } });
            }

            if (this.el_svg_holder) {

                this.el_svg_holder.innerHTML = zone.map_data;

                this.current_zone = zone;

                this.el_svg = this.el_svg_holder.children[0] as SVGSVGElement;
                if (this.el_svg) {
                    this.el_svg.style.height = "100%";
                    this.el_svg.style.width = "100%";

                    this.el_devices = this.el_svg.getElementById("devices") as SVGDefsElement;
                    if (!this.el_devices) {
                        this.el_devices = document.createElementNS(SVGNS, "g") as SVGGElement;
                        this.el_devices.id = "devices";
                        this.el_svg.insertAdjacentElement("afterbegin", this.el_devices);
                    }

                    if (zone.devices) {
                        zone.devices.forEach((device_object) => {
                            const device = new IntercallDevice(device_object);
                            this.insertExistingDevice(device);
                        });
                    }
                    fromEvent(this.el_svg, "click").subscribe((event: MouseEvent) => {
                        this.onSVGClick(event);
                    });

                    this.mode = MapboxMode.display;
                    this.updateModeUI();
                    this.updateUI();

                }
                this.el_nursecall_layer = document.getElementById("nursecall");
                this.updateDeviceList();
                this.action_subject.next({ action_type: AppActionType.updateNursecallLayerVisibility, payload: 15 });
            }
        }
    }

    public updateNursecallOpacity(value: number): void {
        if (this.el_nursecall_layer) {
            this.el_nursecall_layer.style.opacity = "" + value;
        }

    }

    public updateModeUI(): void {
        if (this.el_map_header_mode) {
            switch (this.mode) {
                default:
                    this.el_map_header_mode.innerHTML = "";
                    this.el_svg_holder.style.cursor = "auto";
                    break;
                case MapboxMode.none:
                    this.el_map_header_mode.innerHTML = "Please select a Zone from the dropdown above";
                    this.el_svg_holder.style.cursor = "auto";
                    break;
                case MapboxMode.display:
                    this.el_map_header_mode.innerHTML = "Display";
                    this.el_svg_holder.style.cursor = "auto";

                    break;
                case MapboxMode.insert:
                    this.el_map_header_mode.innerHTML = "Inserting " + (this.insert_device_type ? this.insert_device_type.name : "");
                    if (this.el_svg_holder) {
                        this.el_svg_holder.style.cursor = "crosshair";
                    }

                    break;

            }
        }
    }
    public setInsertMode(device_type: IntercallDeviceType): void {
        if (!device_type) {
            this.mode = MapboxMode.display;
        } else {
            this.mode = MapboxMode.insert;
            this.insert_device_type = device_type;
        }
        this.updateModeUI();
    }

    public hasDevice(uid: string): boolean {
        return !!this.getDeviceForUid(uid);
    }
    public getDeviceForUid(uid: string): IntercallDevice {
        return new IntercallDevice(this.current_zone.devices.find(device => device.uid === uid));
    }
    public getDevicesForIntercallUid(uid: string): Array<IntercallDevice> {
        return this.current_zone.devices.filter(device => {
            return device.IntercallUid === uid;
        });
    }
    public getDeviceForElement(element: Element): IntercallDevice {
        return new IntercallDevice(this.current_zone.devices.find(device => device.element === element));
    }

    public deleteDevice(device: IntercallDevice): void {
        if (!device) {
            this.warn("deleteDevice", "no device");
        } else {
            if (!this.current_zone) {
                this.warn("deleteDevice", "no current zone");
            } else {
                if (!this.current_zone.devices) {
                    this.warn("deleteDevice", "no current zone devices");
                } else {
                    this.current_zone.devices = this.current_zone.devices.filter(existing_device => device.uid != existing_device.uid);
                    if (device.element) {
                        device.element.remove();
                    }
                    if (this.el_device_select) {
                        Array.from(this.el_device_select.options).forEach(option => { if (option.value === device.uid) { option.remove(); } });
                    }
                }
            }
        }
    }

    public updateOrAddDevice(device: IntercallDevice): void {
        if (!device) {
            this.warn("updateOrAddDevice", "no device");
        } else {
            this.updateOrAddDevices([device]);
        }
    }

    public updateOrAddDevices(devices: Array<IntercallDevice>): void {
        if (!devices) {
            this.error("updateOrAddDevices", "no devices");
        } else {
            devices.forEach(device => {
                this.current_zone.devices = this.current_zone.devices.filter(existing_device => device.uid != existing_device.uid);
                this.current_zone.devices.push(device);

            });
        }
    }
    public updateUI(): void {
        this.updateDeviceList();
        if (!this.el_devices) {
            this.warn("updateUI", "no device element");
        } else {
            this.el_devices.innerHTML = "";
            this.current_zone.devices.forEach(device => {
                const el_device = document.createElementNS(SVGNS, "g");
                fromEvent(el_device, "click").subscribe((event: MouseEvent) => this.onDeviceElementClick(event));
                fromEvent(el_device, "mouseover").subscribe((event: MouseEvent) => this.onDeviceElementMouseover(event));

                device.toElement(el_device, this.device_types.IconHTMLForUid);
                this.addAnimationsToDevice(device);

                this.el_devices.append(el_device);

            });
        }

    }
    public insertDeviceFromExternalElement(element: Element): void {
        if (!element) {
            this.error("insertDeviceFromExternalElement", "no element");
        } else {
            if (!this.el_devices) {
                this.error("insertDeviceFromExternalElement", "no devices element");
            } else {
                this.el_devices.append(element);
                const device = new IntercallDevice({
                    element
                });
                this.current_zone.devices.push(device);
                // this.updateUI();
            }
        }
    }
    public insertExistingDevice(device: IntercallDevice, zone?: ZoneConfig): void {
        if (!zone) {
            zone = this.current_zone;
            if (!zone) {
                this.warn("insertExistingDevice", "no zone");
            } else {
                if (!device) {
                    this.warn("insertExistingDevice", "no device");
                } else {
                    if (device.uid.length < 1) {
                        this.warn("insertExistingDevice", "no device uid");
                    } else {
                        let existing_device = this.getDeviceForUid(device.uid);
                        if (existing_device) {
                            existing_device.fromObject(device);
                        } else {
                            this.current_zone.devices.push(device);
                        }
                        // this.updateUI();
                    }
                }

            }
        }
    }
    public insertNewDevice(point: Point): void {
        if (!this.el_devices) {
            this.error("insertNewDevice", "no devices element");
        } else {
            if (!this.insert_device_type) {
                this.error("insertNewDevice", "no insert device type");
            } else {
                const device = new IntercallDevice({
                    svg_point: this.svgPointForDomPoint(point),
                    device_type: this.insert_device_type
                });

                const el_device_group = document.createElementNS(SVGNS, "g");
                device.toElement(el_device_group, this.device_types.IconHTMLForUid);
                this.selectDevice(device);

                el_device_group.style.scale= "0.1";
                this.el_devices.insertAdjacentElement("beforeend", el_device_group);

                fromEvent(el_device_group, "click").subscribe((event: MouseEvent) => this.onDeviceElementClick(event));
                fromEvent(el_device_group, "mouseover").subscribe((event: MouseEvent) => this.onDeviceElementMouseover(event));

                if (!this.current_zone.devices) {
                    this.current_zone.devices = [];
                }
                this.current_zone.devices.push(device);

                const editor = new DeviceEditor({
                    root_element: this.el_root,
                    point: point,
                    device_types: this.device_types,

                });
                this.addAnimationsToDevice(device);
                editor.display(device).subscribe(event => {
                    switch (event.message_type) {
                        default:
                            this.error("insertNewDevice", "Unknown edit Box Event", event);
                            break;
                        case DeviceEditorMessageType.deleted:
                            this.deleteDevice(event.device);
                            editor.hide();
                            this.updateDeviceList();

                            break;
                        case DeviceEditorMessageType.updated:
                            this.updateDeviceElement(event.device);
                            this.updateDeviceList([event.device]);
                            break;
                        case DeviceEditorMessageType.saved:
                            this.updateDeviceElement(event.device);
                            this.updateDeviceList([event.device]);
                            editor.hide();
                            if (this.el_device_select) {
                                this.el_device_select.value = device.uid;
                                this.onDeviceSelectChange();
                            }
                            break;

                    }
                });

            }
        }
    }


    public deleteAllDevicesOfType(device_type: IntercallDeviceType): void {
        if (!device_type) {
            this.error("deleteAllDevicesOfType", "no device type");
        } else {
            if (!this.config) {
                this.error("deleteAllDevicesOfType", "no config");
            } else {
                if (!this.config.zones) {
                    this.error("deleteAllDevicesOfType", "no config zones");
                } else {
                    this.config.zones.forEach(zone => {
                        if (!zone.devices) {
                            this.error("deleteAllDevicesOfType", "no devices for zone", zone.display_name);
                        } else {
                            this.display(zone);
                            const devices = zone.devices.filter(device => device.type_uid === device_type.uid);
                            this.log("removing", devices.length, "devices of type", device_type.name, "from zone", zone.display_name);
                            devices.forEach(device => {
                                this.deleteDevice(device);
                            });
                        }
                    });
                }
            }
        }
    }
    public getDisplayHTML(zone_name: string): string {
        let ret: string = undefined;
        const zone = ZoneForName(zone_name, this.config);
        if (zone) {
            if (this.current_zone !== zone) {
                this.display(zone);
            }
            const el_svg_holder = this.el_svg_holder.cloneNode(true) as Element;
            const el_svg = el_svg_holder.children[0] as Element;
            if (!el_svg) {
                this.warn("getDisplayHTML", "no svg element for zone", zone_name);
            } else {
                el_svg.id = zone_name.replace(/[^a-z0-9]/gi, '_').toLowerCase()
                const child_array = Array.from(el_svg_holder.children[0].children);
                child_array.forEach(el => {
                    if (el.id.toLowerCase() !== "floorplan") {
                        if (el.id.toLowerCase() !== "devices") {
                            el.remove();
                        } else { // this _is_ the device node
                            const device_els = el.querySelectorAll("g[intercall_uid]");
                            Array.from(device_els).forEach(el_device => this.prepareDeviceElementsForExportToDisplay(el_device));

                        }
                    }
                });
                ret = el_svg_holder.innerHTML;

            }
        }
        return ret;
    }

    public deselectAllDevices(): void {
        let els = this.el_devices.querySelectorAll("g[intercall_uid]");

        els.forEach(el => {
            const device = this.getDeviceForElement(el);
            this.deselectDevice(device);
        });

    }
    public deselectDevice(device: IntercallDevice): void {
        if (!device) {
            this.error("deselectDevice", "no device");
        } else {
            if (!device.element) {
                this.error("deselectDevice", "no device element");
            } else {
                if (device.element.classList.contains("device_error")) {

                } else {
                    device.element.classList.remove("device_selected");
                    let els = device.element.getElementsByTagName("animate");
                    Array.from(els).forEach((el_anim: any) => {
                        el_anim.endElement();
                    });
                    els = device.element.getElementsByClassName("device_icon_background");
                    Array.from(els).forEach((el_background: any) => {
                        el_background.setAttribute("r", "35");
                        el_background.setAttribute("style", "stroke-width:1;fill:" + DEFAULT_DEVICE_FILL_COLOR);

                    });
                }
            }
        }

    }
    public selectDevice(device: IntercallDevice): void {
        this.deselectAllDevices();
        if (this.el_device_select) {
            this.el_device_select.value = device.uid;
        }
        if (!device) {
            this.error("selectDevice", "no device");
        } else {
            if (!device.element) {
                this.error("selectDevice", "no device element");
            } else {
                device.element.classList.add("device_selected");
                const el_scale = document.getElementById("animation_scale_" + device.IntercallUid) as any;
                const el_yellow = document.getElementById("animation_yellow_" + device.IntercallUid) as any;
                if (el_scale) {
                    el_scale.beginElement();
                }
                if (el_yellow) {
                    el_yellow.beginElement();
                }
                let els = device.element.getElementsByClassName("device_icon_background");
                Array.from(els).forEach((el_background: any) => {
                    el_background.setAttribute("style", "stroke-width:4;fill:" + SELECTED_DEVICE_FILL_COLOR);
                    el_background.setAttribute("r", "100");
                });

            }
        }
    }


    ///// Start of Protected
    protected deErrorAllDevices(): void {
        let els = this.el_devices.querySelectorAll("g[intercall_uid]");

        els.forEach(el => {
            const device = this.getDeviceForElement(el);
            this.deErrorDevice(device);
        });

    }
    public deErrorDevice(device: IntercallDevice): void {
        if (!device) {
            this.error("deErrorDevice", "no device");
        } else {
            if (!device.element) {
                this.error("deErrorDevice", "no device element");
            } else {
                device.element.classList.remove("device_error");
                const els = device.element.getElementsByClassName("device_icon_background");
                Array.from(els).forEach((el_background: any) => {
                    el_background.setAttribute("r", "35");
                    el_background.setAttribute("style", "stroke-width:1;fill:" + DEFAULT_DEVICE_FILL_COLOR);

                });
            }
        }
    }
    public setDeviceInError(device: IntercallDevice): void {
        if (!device) {
            this.error("setDeviceInError", "no device");
        } else {
            if (!device.element) {
                this.error("setDeviceInError", "no device element");
            } else {
                device.element.classList.add("device_error");
                let els = device.element.getElementsByClassName("device_icon_background");
                Array.from(els).forEach((el_background: any) => {
                    el_background.setAttribute("style", "stroke-width:4;fill:" + ERROR_DEVICE_FILL_COLOR);
                    el_background.setAttribute("r", "100");
                });

            }
        }
    }


    public setFloorSizeTo(width:number):void{
        const el=document.getElementById("mapbox_svg_holder");
        if(el){
            if (!isNaN(width) && isFinite(width)){
                if(width>0){
                    el.style.width=`${width}px`;
                }
            }
        }
    }

    protected setDevicesInError(devices: Array<IntercallDevice>): void {
        this.devices_in_error = devices;
        this.deErrorAllDevices();
        if (!this.devices_in_error) {
            this.error("setDevicesInError", "no devices_in_error");
        } else {
            this.devices_in_error.forEach(device => {
                const dups = this.getDevicesForIntercallUid(device.IntercallUid);
                dups.forEach(dup_device => {
                    this.setDeviceInError(dup_device);
                });
            });

            const el_error_count = document.getElementById("mapbox_header_device_error_count");
            const el_error_label = document.getElementById("mapbox_header_label_error");
            if (el_error_count && el_error_label) {
                if (this.devices_in_error.length > 0) {
                    el_error_count.innerHTML = this.devices_in_error.length.toFixed();
                    el_error_count.classList.add("shown");
                    el_error_count.classList.remove("hidden");
                    el_error_label.classList.add("shown");
                    el_error_label.classList.remove("hidden");
                } else {
                    el_error_count.innerHTML = "";
                    el_error_count.classList.add("hidden");
                    el_error_count.classList.remove("shown");
                    el_error_label.classList.add("hidden");
                    el_error_label.classList.remove("shown");
                }
            }

        }
    }
    protected prepareDeviceElementsForExportToDisplay(el: Element): void {
        if (!el) {
            this.error("prepareDeviceElementsForExportToDisplay", "no element");
        } else {
            const device = this.getDeviceForUid(el.id);
            if (!device) {
                this.error("prepareDeviceElementsForExportToDisplay", "no device for element id", el.id);
            } else {
                el.setAttribute("class", "intercall_device")
                const el_backgrounds = el.getElementsByClassName("device_icon_background");
                Array.from(el_backgrounds).forEach(el_background => {
                    el_background.setAttribute("r", "1");
                    el_background.removeAttribute("style");
                });
            }
        }
    }

    protected updateDeviceElement(device: IntercallDevice): void {
        if (!device) {
            this.error("updateDeviceElement", "no device");
        } else {
            if (!device.element) {
                this.error("updateDeviceElement", "no device element");
            } else {
                const el_backgrounds = device.element.getElementsByClassName("device_icon_background");
                if (el_backgrounds) {
                    if (el_backgrounds.length < 1) {
                        this.addAnimationsToDevice(device);
                    }
                    Array.from(el_backgrounds).forEach(el_background => {
                        const el_animations = el_background.getElementsByTagName("animate");
                        if (el_animations) {
                            Array.from(el_animations).forEach(el_animation => {
                                const id_deconstructed = el_animation.id.split("_");
                                if (id_deconstructed.length > 2) {
                                    // id_deconstructed.length = 3; // fix bug where extra stuff was added
                                    id_deconstructed[2] = device.IntercallUid;
                                    el_animation.id = id_deconstructed.join("_");
                                }
                            });
                        }
                    })
                }
            }
        }
    }

    protected addAnimationsToDevice(device: IntercallDevice): void {
        if (!device) {
            this.error("addAnimationsToDevice", "no device");
        } else {
            if (!device.element) {
                this.error("addAnimationsToDevice", "no device element");
            } else {
                if (!device.address) {
                    // this.error("addAnimationsToDevice", "device has no address");
                } else {
                    let els = device.element.getElementsByClassName("device_icon_background");
                    Array.from(els).forEach(background_el => background_el.remove());

                    const el_background = document.createElementNS(SVGNS, "circle") as SVGCircleElement;
                    el_background.classList.add("device_icon_background");
                    el_background.setAttribute("cx", "25");
                    el_background.setAttribute("cy", "25");
                    el_background.setAttribute("r", "35");
                    el_background.setAttribute("style", "stroke-width:4;fill:" + DEFAULT_DEVICE_FILL_COLOR);
                    device.element.prepend(el_background);
                    this.config.animations.animations.forEach(animation => this.addAnimationToElement(animation, el_background, device.IntercallUid));
                    /*
                                        this.scaleAnimationToElement(el_background, device.IntercallUid);
                                        this.redFillAnimationToElement(el_background, device.IntercallUid);
                                        this.greenFillAnimationToElement(el_background, device.IntercallUid);
                                        this.yellowFillAnimationToElement(el_background, device.IntercallUid);
                    */
                }
            }
        }
    }
    protected addAnimationToElement(animation: IAnimation, element: SVGElement, uid: string): void {
        if (!animation) {
            this.error("addAnimationToElement", "no animation");
        } else {
            if (!element) {
                this.error("addAnimationToElement", "no element");
            } else {
                if (!uid) {
                    this.error("addAnimationToElement", "no uid");
                } else {
                    const el_animation = document.createElementNS(SVGNS, "animate");
                    el_animation.id = "animation_" + animation.id + "_" + uid;
                    el_animation.setAttributeNS(SVGNS, "attributeType", "xml");
                    el_animation.setAttributeNS(SVGNS, "begin", animation.begin);
                    el_animation.setAttributeNS(SVGNS, "attributeName", animation.attributeName);
                    el_animation.setAttributeNS(SVGNS, "repeatCount", animation.repeatCount);
                    el_animation.setAttributeNS(SVGNS, "fill", "remove");
                    el_animation.setAttributeNS(SVGNS, "values", animation.values);
                    el_animation.setAttributeNS(SVGNS, "keyTimes", animation.keyTimes);
                    el_animation.setAttributeNS(SVGNS, "dur", animation.dur);
                    element.append(el_animation);

                }
            }
        }
    }


    protected getUniqueArrayOfDeviceTypes(): Array<IntercallDeviceType> {
        const ret = new Array<IntercallDeviceType>();
        if (this.el_devices) {
            const els = this.el_devices.querySelectorAll("g[intercall_uid]");
            const device_element_array = Array.from(els);
            device_element_array.forEach(device_element => {
                const type_uid = device_element.getAttribute("intercall_device_type_uid");
                if (type_uid) {
                    if (!ret.find(device_type => device_type.uid === type_uid)) {
                        ret.push(this.device_types.getDeviceForUID(type_uid));
                    }
                }
            });
        }

        return ret;
    }

    protected createElementForDevice(): SVGElement {
        let el_device = document.createElementNS(SVGNS, "g") as SVGElement;
        fromEvent(el_device, "click").subscribe((event: MouseEvent) => this.onDeviceElementClick(event));
        fromEvent(el_device, "mouseover").subscribe((event: MouseEvent) => this.onDeviceElementMouseover(event));
        this.el_devices.appendChild(el_device);
        return el_device;

    }

    protected displayDeviceEditBox(device: IntercallDevice): void {
        if (!device) {
            this.warn("displayDeviceEditBox", "no device");
        } else {
            const editor = new DeviceEditor({
                root_element: this.el_root,
                device_types: this.device_types,

            });
            this.selectDevice(device);

            editor.display(device).subscribe(event => {
                switch (event.message_type) {
                    default:
                        this.error("displayDeviceEditBox", "Unknown edit Box Event", event);
                        break;
                    case DeviceEditorMessageType.deleted:
                        this.deleteDevice(device);
                        editor.hide();
                        this.updateDeviceList();
                        break;
                    case DeviceEditorMessageType.updated:
                        this.deselectAllDevices();
                        this.updateDeviceElement(event.device);
                        this.updateDeviceList([event.device]);
                        break;
                    case DeviceEditorMessageType.saved:
                        this.deselectAllDevices();
                        this.updateDeviceElement(event.device);
                        this.updateDeviceList([event.device]);
                        editor.hide();
                        if (this.el_device_select) {
                            this.el_device_select.value = device.uid;
                            this.onDeviceSelectChange();
                        }
                        break;

                }
            });
        }
    }

    protected svgPointForDomPoint(dom_point: Point): Point {
        const dom_p = this.el_svg.createSVGPoint();
        dom_p.x = dom_point.x;
        dom_p.y = dom_point.y;
        const svg_p = dom_p.matrixTransform(this.el_svg.getScreenCTM().inverse());
        return { x: svg_p.x, y: svg_p.y }
    }


    protected onSVGClick(event: MouseEvent): void {
        switch (this.mode) {
            default:
                break;
            case MapboxMode.insert:
                let x = event.clientX;
                let y = event.clientY;
                this.insertNewDevice({ x, y });
                break;
        }
    }


    protected updateDeviceList(devices?: Array<IntercallDevice>): void {
        if (devices) {
            this.updateOrAddDevices(devices);
        }
        if (!this.current_zone) {
            // this.log("updateDeviceList", "no current zone");
        } else {
            if (!this.current_zone.devices) {
                this.current_zone.devices = [];
            } else {
                const el_count = document.getElementById("mapbox_header_device_count");
                if (el_count) {
                    el_count.innerHTML = this.current_zone.devices.length.toFixed();
                }
                const in_error: IntercallDevice[] = [];
                if (this.el_device_select) {
                    this.el_device_select.options.length = 1;
                }

                this.current_zone.devices.forEach(device => {
                    if (!IntercallDevice.validate(device)) {
                        in_error.push(device);
                    }
                    if (this.el_device_select) {
                        const el_opt = document.createElement("option");
                        el_opt.value = device.uid;
                        el_opt.text = device.TitleString;
                        this.el_device_select.insertAdjacentElement("beforeend", el_opt);
                    }

                });
                if (in_error.length > 0) {
                    const el_error_count = document.getElementById("mapbox_header_device_error_count");
                    if (el_error_count) {
                        el_error_count.innerHTML = in_error.length.toFixed();
                        el_error_count.classList.add("shown");
                        el_error_count.classList.remove("hidden");
                    }
                    const el_error_label = document.getElementById("mapbox_header_label_error");
                    if (el_error_label) {
                        el_error_label.classList.add("shown");
                        el_error_label.classList.remove("hidden");
                    }
                } else {
                    const el_error_count = document.getElementById("mapbox_header_device_error_count");
                    if (el_error_count) {
                        el_error_count.innerHTML = "0";
                        el_error_count.classList.remove("shown");
                        el_error_count.classList.add("hidden");
                    }
                    const el_error_label = document.getElementById("mapbox_header_label_error");
                    if (el_error_label) {
                        el_error_label.classList.remove("shown");
                        el_error_label.classList.add("hidden");
                    }

                }

            }

        }
        this.action_subject.next({ action_type: AppActionType.checkForDuplicates });
    }


    protected onDeviceElementClick(event: MouseEvent): void {
        event.stopPropagation();
        const el = getParentElementWithAttribute(event.target as HTMLElement, "intercall_uid");
        const device = this.getDeviceForElement(el);
        this.displayDeviceEditBox(device);
    }

    protected onDeviceElementMouseover(event: MouseEvent): void {
        if (event) {
            const el = getParentElementWithAttribute(event.target as HTMLElement, "intercall_uid");

            if (el) {
                const title = el.getAttribute("title");
                if (title) {
                }
            }
        }
    }

    protected onDeviceSelectChange(): void {
        if (!this.el_device_select) {
            this.error("onDeviceSelectChange", "no device select element");
        } else {
            this.deselectAllDevices();
            const uid = this.el_device_select.options[this.el_device_select.selectedIndex].value;
            const el = document.getElementById(uid);
            if (el) {
                const device = this.getDeviceForElement(el);
                this.selectDevice(device);
            }
        }
    }




}
