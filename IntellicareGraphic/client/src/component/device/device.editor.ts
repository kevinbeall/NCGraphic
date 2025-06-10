import { fromEvent, Subject } from "rxjs";
import { Loggable } from "../../../../misc/loggable";
import { Point } from "../../../../misc/config";
import { IntercallDevice } from "../../../../misc/device";
import { DeviceTypes } from "./device.types";

const HTML = require("./device.editor.html");


export enum DeviceEditorMessageType {
    deleted,
    updated,
    saved
}

export interface IDeviceEditorEvent {
    message_type: DeviceEditorMessageType;
    device: IntercallDevice;
}

export interface DeviceEditorDomElements {
    x: HTMLInputElement;
    y: HTMLInputElement;
    address: HTMLInputElement;
    channel: HTMLInputElement;
    supply: HTMLInputElement;
    notes: HTMLTextAreaElement;
    cancel_button: HTMLButtonElement;
    delete_button: HTMLButtonElement;
    update_button: HTMLButtonElement;
    save_button: HTMLButtonElement;

}

export interface DeviceEditorConfig {
    root_element: Element;
    device_types: DeviceTypes;
    point?: Point;
}
export class DeviceEditor extends Loggable {
    private config: DeviceEditorConfig;
    private events: Subject<IDeviceEditorEvent>;
    private current_device: IntercallDevice;
    private current_device_element: SVGElement;

    public constructor(config: DeviceEditorConfig) {
        super();
        this.config = config;
        this.events = new Subject<IDeviceEditorEvent>();

    }

    public get Events(): Subject<IDeviceEditorEvent> { return this.events; }


    public hide(): void {
        const el_box = document.getElementById("mapbox_device_editor");
        if (el_box) {
            el_box.remove();
        }
        const el_modal = document.getElementById("modal_background");
        if (el_modal) {
            el_modal.classList.remove("shown");
            el_modal.classList.add("hidden");
        }
    }
    public display(device: IntercallDevice): Subject<IDeviceEditorEvent> {
        this.current_device_element = device.element;
        this.config.root_element.insertAdjacentHTML("beforeend", HTML);
        this.current_device = device;
        this.fromDeviceToDom(this.current_device);
        this.setPosition(device);
        const el_modal = document.getElementById("modal_background");
        if (el_modal) {
            el_modal.classList.remove("hidden");
            el_modal.classList.add("shown");
        }

        return this.events;
    }

    public fromDeviceToDom(device: IntercallDevice): void {
        const els = this.getElementsFromDom();
        if (els.x) {
            els.x.value = isNaN(device.svg_point.x) ? "" : Math.round(device.svg_point.x).toFixed();
        }
        if (els.y) {
            els.y.value = isNaN(device.svg_point.y) ? "" : Math.round(device.svg_point.y).toFixed();
        }
        if (els.address) {
            els.address.value = isNaN(device.address) ? "" : Math.round(device.address).toFixed();
        }
        if (els.channel) {
            els.channel.value = isNaN(device.channel) ? "" : Math.round(device.channel).toFixed();
        }
        if (els.supply) {
            els.supply.value = device.supply;
        } else {
            els.supply.value = "";
        }
        if (els.notes) {
            els.notes.value = device.notes;
        } else {
            els.notes.value = "";
        }
        if (els.cancel_button) {
            fromEvent(els.cancel_button, "click").subscribe(
                () => this.cancelClicked()
            );
        }
        if (els.delete_button) {
            fromEvent(els.delete_button, "click").subscribe(
                () => this.deleteClicked()
            );
        }
        if (els.update_button) {
            fromEvent(els.update_button, "click").subscribe(
                () => {
                    this.updateClicked();
                }
            );
        }
        if (els.save_button) {
            fromEvent(els.save_button, "click").subscribe(
                () => this.saveClicked()
            );
        }

    }

    public fromDomToDevice(device?: IntercallDevice): void {
        if (!device) {
            device = this.current_device;
        }
        if (device) {
            // this.update_position = false;
            const els = this.getElementsFromDom();
            if (els.x) {
                const x = parseInt(els.x.value);
                if (x !== Math.round(device.svg_point.x)) {
                    device.svg_point.x = x;
                    // this.update_position = true;
                }
            }
            if (els.y) {
                const y = parseInt(els.y.value);
                if (y !== Math.round(device.svg_point.y)) {
                    device.svg_point.y = y;
                    // this.update_position = true;
                }
            }
            if (els.address) {
                device.address = parseInt(els.address.value);
            }
            if (els.channel) {
                device.channel = parseInt(els.channel.value);
            }
            if (els.supply) {
                device.supply = els.supply.value;
            }
            if (els.notes) {
                device.notes = els.notes.value;
            }
            if (!this.current_device_element) {
                this.error("fromDomToDevice", "no current device element for uid", device.uid);
            } else {
                device.toElement(this.current_device_element);
            }
        }
    }

    private getElementsFromDom(): DeviceEditorDomElements {
        const ret: DeviceEditorDomElements = {
            x: document.getElementById("mapbox_device_edit_x") as HTMLInputElement,
            y: document.getElementById("mapbox_device_edit_y") as HTMLInputElement,
            address: document.getElementById("mapbox_device_edit_address") as HTMLInputElement,
            channel: document.getElementById("mapbox_device_edit_channel") as HTMLInputElement,
            supply: document.getElementById("mapbox_device_edit_supply") as HTMLInputElement,
            notes: document.getElementById("mapbox_device_edit_notes") as HTMLTextAreaElement,
            cancel_button: document.getElementById("mapbox_device_edit_cancel") as HTMLButtonElement,
            delete_button: document.getElementById("mapbox_device_edit_delete") as HTMLButtonElement,
            update_button: document.getElementById("mapbox_device_edit_update") as HTMLButtonElement,
            save_button: document.getElementById("mapbox_device_edit_save") as HTMLButtonElement
        };
        return ret;
    }

    private setPosition(device?: IntercallDevice): void {
        if (!device) {
            device = this.current_device;
        }
        if (!device.element) {
            this.warn("setPosition", "no device element");
        } else {
            const el_box = document.getElementById("mapbox_device_editor");
            const icon_bounds = device.element.getBoundingClientRect();
            const box_bounds = el_box.getBoundingClientRect();
            const holder_bounds = this.config.root_element.getBoundingClientRect();

            const icon_x_mid = icon_bounds.left + (icon_bounds.width / 2);

            let xval = Math.round(icon_bounds.right);
            if (icon_x_mid > (holder_bounds.width / 2)) {
                xval = Math.round(icon_bounds.left - box_bounds.width);
            }
            let yval = Math.round(icon_bounds.top - (box_bounds.height / 2) + (icon_bounds.height / 2));
            el_box.style.top = yval + "px";
            el_box.style.left = xval + "px";

        }
    }

    private cancelClicked(): void {
        const el = this.getElementsFromDom();
        if (el.address) {
            if (isNaN(parseInt(el.address.value))) {
                this.events.next({ message_type: DeviceEditorMessageType.deleted, device: this.current_device });
            }
        }
        if (el.channel) {
            if (isNaN(parseInt(el.channel.value))) {
                this.events.next({ message_type: DeviceEditorMessageType.deleted, device: this.current_device });
            }
        }
        this.hide();
    }
    private deleteClicked(): void {
        if (this.events) {
            if (window.confirm("Are you sure you want to delete this device?")) {
                this.events.next({ message_type: DeviceEditorMessageType.deleted, device: this.current_device });
            }
        }
    }
    private updateClicked(): void {
        if (this.events) {
            this.fromDomToDevice();
            const valid = IntercallDevice.validate(this.current_device);
            if (valid === true) {
                this.setPosition();
                this.events.next({ message_type: DeviceEditorMessageType.updated, device: this.current_device });
            } else {
                const el = document.getElementById("mapbox_device_edit_message");
                if (el) {
                    el.innerHTML = valid.join("<br/>");
                }
            }
        }
    }
    private saveClicked(): void {
        if (this.events) {
            this.fromDomToDevice();
            const valid = IntercallDevice.validate(this.current_device);
            if (valid === true) {
                this.events.next({ message_type: DeviceEditorMessageType.saved, device: this.current_device });
            } else {
                const el = document.getElementById("mapbox_device_edit_message");
                if (el) {
                    el.innerHTML = valid.join("<br/>");
                }
            }
        }
    }

}
