import { Point } from "./config";
import { getUuid } from "./tools";

export class IntercallDeviceType {
    name: string;
    icon: string;
    uid: string;
}

export const BaseDeviceCSSClass = "intercall_device";
const SVGNS = "http://www.w3.org/2000/svg";

export enum IntercallDeviceState {
    not_set = "device_not_set",
    display = "device_display",
    edit = "device_edit",
    selected = "device_selected",
}


export class IntercallDevice {
    public uid: string;
    public type_name: string;
    public type_uid: string;
    public address: number;
    public channel: number;
    public supply: string;
    public state: IntercallDeviceState;
    public element: SVGElement;
    public svg_point: Point;
    public notes: string;

    static validate(device: IntercallDevice): true | Array<string> {
        let errors = new Array<string>();
        if (!device) {
            errors.push("no device");
        } else {
            if (!device.uid) {
                errors.push("must have a valid uid");
            }
            if (!device.type_name) {
                errors.push("must have a valid type_name");
            }
            if (!device.type_uid) {
                errors.push("must have a valid type_uid");
            }
            if (isNaN(device.address)) {
                errors.push("address must be a number");
            }
            if (isNaN(device.channel)) {
                errors.push("channel must be a number");
            }
            if (isNaN(device.svg_point.x) || isNaN(device.svg_point.y)) {
                errors.push("must have valid coordinates");
            }
        }
        if (errors.length < 1) {
            return true;
        }
        return errors;
    }

    public constructor(config?: any) {
        this.reset();
        this.uid = getUuid();
        this.fromObject(config);
    }

    public get IntercallUid(): string {
        return (this.address ? this.address.toString() : "-") + ":" + (this.channel ? this.channel.toString() : "-") + ":" + (this.supply ? this.supply : "");
    }
    public set IntercallUid(uid: string) {
        const uid_array = uid.split(":");
        if (uid_array.length > 0) {
            this.address = parseInt(uid_array[0]);
        } else {
            this.address = undefined;
        }
        if (uid_array.length > 1) {
            this.channel = parseInt(uid_array[1]);
        } else {
            this.channel = undefined;
        }
        if (uid_array.length > 2) {
            this.supply = uid_array[2];
        } else {
            this.supply = undefined;
        }
    }

    public get TitleString(): string {
        let title_string = this.type_name + " address ";
        title_string += this.address ? this.address.toString() : "not set";
        title_string += ", channel ";
        title_string += this.channel ? this.channel.toString() : "not set";
        title_string += this.supply ? (" on supply " + this.supply) : " [no supply set]";
        return title_string;
    }

    public reset(): void {
        // don't reset the uid!!!
        this.type_name = undefined;
        this.type_uid = undefined;
        this.channel = undefined
        this.supply = "";
        this.state = IntercallDeviceState.not_set;
        this.element = undefined;
        this.svg_point = { x: 0, y: 0 };
        this.notes = "";
    }


    // objects DO NOT copy elements - this is to stop them going into json data, use toDevice / fromDevice
    public fromObject(obj?: any): void {
        if (obj) {
            if (obj.hasOwnProperty("element")) {
                this.fromElement(obj.element);
            }
            if (obj.hasOwnProperty("device_type")) {
                this.fromDeviceType(obj.device_type);
            }

            if (obj.hasOwnProperty("uid")) {
                this.uid = obj.uid;
            }
            if (obj.hasOwnProperty("type_name")) {
                this.type_name = obj.type_name;
            }
            if (obj.hasOwnProperty("type_uid")) {
                this.type_uid = obj.type_uid;
            }
            if (obj.hasOwnProperty("address")) {
                this.address = obj.address;
            }
            if (obj.hasOwnProperty("channel")) {
                this.channel = obj.channel;
            }
            if (obj.hasOwnProperty("supply")) {
                this.supply = obj.supply;
            }
            if (obj.hasOwnProperty("state")) {
                this.state = obj.state;
            }
            if (obj.hasOwnProperty("svg_point")) {
                this.svg_point = obj.svg_point;
            }
            if (obj.hasOwnProperty("notes")) {
                this.notes = obj.notes;
            }

        }
    }
    public toObject(): object {
        const ret: any = {};
        ret["uid"] = this.uid;
        ret["type_name"] = this.type_name;
        ret["type_uid"] = this.type_uid;
        ret["address"] = this.address;
        ret["channel"] = this.channel;
        ret["supply"] = this.supply;
        ret["state"] = this.state;
        ret["svg_point"] = this.svg_point;
        ret["notes"] = this.notes;
        return ret;
    }


    public fromDevice(device: IntercallDevice): void {
        this.fromObject(device);
        this.element = device.element;
    }
    public toDevice(device: IntercallDevice): void {
        this.toDevice(device);
        device.element = this.element;
    }
    public toElement(el: SVGElement, getIconHTMLForDeviceUidFunction?: (uid: string) => string): void {
        if (el) {
            this.element = el;
            if (this.uid) {
                el.id = this.uid;
            }
            if (this.type_name) {
                el.setAttribute("intercall_device_type", this.type_name);
            }
            if (this.type_uid) {
                if (getIconHTMLForDeviceUidFunction) {
                    el.innerHTML = getIconHTMLForDeviceUidFunction(this.type_uid);
                    el.setAttribute("intercall_device_type_uid", this.type_uid);
                }
            }
            el.setAttribute("intercall_uid", this.IntercallUid);
            el.setAttribute("title", this.TitleString);
            el.setAttribute("notes", this.notes);
            if (this.svg_point) {
                const translate_string = ` translate(${Math.round(this.svg_point.x)} ${Math.round(this.svg_point.y)}) scale(0.1)`;
                el.setAttribute("transform", translate_string);

            }


            if (el.childNodes.length > 0) {
                if (el.childNodes[0].nodeName.toLowerCase() === "title") {
                    el.childNodes[0].remove();
                }
            }

            const el_title = document.createElementNS(SVGNS, "title");
            el_title.innerHTML = this.TitleString;
            el.insertAdjacentElement("afterbegin", el_title);

            el.classList.add(BaseDeviceCSSClass);
        }

    }

    public fromElement(el: SVGElement): void {
        this.reset();
        this.element = el;
        if (el) {
            this.uid = el.id;
            if (el.hasAttribute("intercall_device_type")) {
                this.type_name = el.getAttribute("intercall_device_type");
            }
            if (el.hasAttribute("intercall_device_type_uid")) {
                this.type_uid = el.getAttribute("intercall_device_type_uid");
            }
            if (el.hasAttribute("intercall_uid")) {
                this.IntercallUid = el.getAttribute("intercall_uid");
            }
            if (el.hasAttribute("notes")) {
                this.notes = el.getAttribute("notes");
            }
            try {
                let el_parent = el as Element;
                while (el_parent.nodeName.toLowerCase() !== "svg") {
                    el_parent = el_parent.parentElement;
                    if (!el_parent) {
                        break;
                    }
                }
                if (el_parent) {
                    const el_svg = el_parent as SVGSVGElement;
                    const dom_bounds = el.getBoundingClientRect();
                    const dom_p = el_svg.createSVGPoint();
                    dom_p.x = dom_bounds.left;
                    dom_p.y = dom_bounds.top;
                    const svg_p = dom_p.matrixTransform(el_svg.getScreenCTM().inverse());
                    this.svg_point = { x: svg_p.x, y: svg_p.y }
                }
            } catch (exception) {
                // if the svg parent is not displayed getScreenCTM returns null and an exception is thrown
            };
            this.state = IntercallDeviceState.display;
            if (el.classList.contains("device_selected")) {
                this.state = IntercallDeviceState.selected;
            }
            if (el.classList.contains("device_edit")) {
                this.state = IntercallDeviceState.edit;
            }
        }
    }

    public toJSONString(): string {
        const obj = this.toObject();
        return JSON.stringify(obj);
    }

    public fromJSONString(json: string): void {
        try {
            const obj = JSON.parse(json);
            this.reset();
            this.fromObject(obj);
        } catch (error) {
            console.error("device exception", error);
        }
    }

    public fromDeviceType(device_type: IntercallDeviceType): void {
        if (device_type) {
            this.type_name = device_type.name;
            this.type_uid = device_type.uid;
        }
    }
    public toDeviceType(): IntercallDeviceType {
        const ret = new IntercallDeviceType();

        ret.name = this.type_name;
        ret.uid = this.type_uid;
        return ret;
    }
}
