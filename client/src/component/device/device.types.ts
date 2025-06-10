import { Subject, fromEvent } from "rxjs";

import { Component } from "../component";
import { SiteConfig, DefaultSiteConfig, Rectangle } from "../../../../misc/config";
import { SocketRequest } from "../../../../misc/socket";
import { Mapbox } from "../mapbox/mapbox";
import { getUuid } from "../../../../misc/tools";
import { IntercallDeviceType, IntercallDevice } from "../../../../misc/device";
import { IAppAction, AppActionType } from "../../defines";


const device_type_edit_box_html = require("./device.types.editor.html");
const device_icon_selector_html = require("./device.types.icon.selector.html");

const SVGNS = "http://www.w3.org/2000/svg";


export class DeviceTypes extends Component {

    protected config: SiteConfig = DefaultSiteConfig;

    protected el_new_button: HTMLButtonElement;
    protected el_edit_area: HTMLElement;
    // protected el_error_message: HTMLElement;

    protected el_new_type: HTMLElement;
    protected el_icon_selector: HTMLElement;
    protected el_icon_edit_holder: HTMLElement;
    protected el_list_area: HTMLElement;

    protected selected_device_type: IntercallDeviceType;

    public mapbox: Mapbox;

    public constructor(socket_requests: Subject<SocketRequest>, actions: Subject<IAppAction>) {
        super(socket_requests, actions);
    }

    public get Selected(): IntercallDeviceType { return this.selected_device_type };
    public onDOMConnection(el_root: HTMLElement): void {
        super.onDOMConnection(el_root);
        this.el_new_button = document.getElementById("new_device_type_button") as HTMLButtonElement;
        this.el_edit_area = document.getElementById("device_types_edit_area") as HTMLElement;

        this.el_list_area = document.getElementById("device_types_list_area");

        fromEvent(this.el_new_button, "click").subscribe(
            () => this.displayNewTypeBox(),
        );

    }
    public onConfigUpdate(config: SiteConfig): void {
        super.onConfigUpdate(config);
        if (this.config) {
            if (this.config.device_types) {
                this.updateDeviceTypeList();
            }
        }
    }

    public deselectAll(): void {
        if (!this.el_list_area) {
            this.error("deselectAll", "no element");
        } else {
            const els = Array.from(this.el_list_area.children);
            els.forEach((el) => el.classList.remove("device_type_selected"));
        }
    }

    public IconHTMLForUid = this.getIconHTMLForUid.bind(this);
    protected getIconHTMLForUid(device_type_uid: string): string {
        let ret = "";
        const el_device_type = document.getElementById("device_type_" + device_type_uid);
        if (el_device_type) {
            const els = el_device_type.getElementsByClassName("device_icon");
            const device_type_icon = els.length < 1 ? undefined : els[0] as Element;
            ret = device_type_icon.innerHTML;
            // ret = el_device_type.innerHTML;
        }
        return ret;
    }


    public getIconBoundsForUid(device_type_uid: string): Rectangle {
        let ret: Rectangle = { x: undefined, y: undefined, w: undefined, h: undefined };
        const el_device_type = document.getElementById("device_type_" + device_type_uid);
        if (el_device_type) {
            const els = el_device_type.getElementsByClassName("device_icon");
            const device_type_icon = els.length < 1 ? undefined : els[0] as Element;
            const rect = device_type_icon.getBoundingClientRect();
            ret.x = rect.x;
            ret.y = rect.y;
            ret.w = rect.width;
            ret.h = rect.height;
            // ret = el_device_type.innerHTML;
        }
        return ret;
    }

    public getDeviceForUID(uid: string): IntercallDeviceType {
        let ret: IntercallDeviceType = undefined;
        if (this.config) {
            ret = this.config.device_types.find(device_type => device_type.uid === uid);
        }
        return ret;
    }







    protected createElementForDeviceTypeList(device_type: IntercallDeviceType): HTMLElement {
        const el = document.createElement("div");
        el.id = "device_type_" + device_type.uid;
        el.classList.add("device_type_list_icon_holder");
        el.innerHTML = `${device_type.name}<svg
xmlns="http://www.w3.org/2000/svg"
width="100" height="100"
viewBox="0 0 100 100"
version="1.1"
baseProfile="full"

>
<g>
${device_type.icon}
</g>
</svg>
<div class='device_type_toolbar hidden'><div class='row'><div class='device_type_toolbar_name'></div><div class='row'><div class='device_type_edit'></div><div class='device_type_remove'></div></div></div>`;


        let els = el.getElementsByClassName("device_type_edit");
        const el_edit = els.length < 1 ? undefined : els[0] as HTMLElement;
        if (el_edit) {
            fromEvent(el_edit, "click").subscribe(event => {
                event.stopPropagation();
                this.onDeviceTypeEditClick(device_type);
            });
        }
        els = el.getElementsByClassName("device_type_remove");
        const el_remove = els.length < 1 ? undefined : els[0] as HTMLElement;
        if (el_remove) {
            fromEvent(el_remove, "click").subscribe(event => {
                event.stopPropagation();
                this.onDeviceTypeRemoveClick(device_type);
            });
        }


        fromEvent(el, "mouseenter").subscribe(event => {
            const target = event.target as HTMLElement;
            if (target) {
                const els = target.getElementsByClassName("device_type_toolbar");
                let toolbar = els.length < 1 ? undefined : els[0] as HTMLElement;
                if (toolbar) {
                    toolbar.classList.add("shown");
                    toolbar.classList.remove("hidden");
                }
            }
        });

        fromEvent(el, "mouseleave").subscribe(event => {
            const target = event.target as HTMLElement;
            if (target) {
                const els = target.getElementsByClassName("device_type_toolbar");
                let toolbar = els.length < 1 ? undefined : els[0] as HTMLElement;
                if (toolbar) {
                    toolbar.classList.add("hidden");
                    toolbar.classList.remove("shown");
                }
            }
        });

        fromEvent(el, "click").subscribe(event => {
            this.selectDeviceType(device_type);
        });

        els = el.getElementsByClassName("device_type_toolbar_name");
        const el_name = els.length < 1 ? undefined : els[0] as HTMLElement;
        if (el_name) {
            el_name.innerHTML = device_type.name;
        }
        return el;
    }


    protected displayEditTypeBox(device_type: IntercallDeviceType): void {
        if (this.el_edit_area) {
            this.updateDeviceTypeList();

            this.el_edit_area.innerHTML = device_type_edit_box_html;
            this.el_new_type = document.getElementById("device_type_editor_holder");
            const el_cancel = document.getElementById("device_type_editor_cancel_button");
            const el_save = document.getElementById("device_type_editor_save_button");
            const el_name_input = document.getElementById("device_type_editor_name_input") as HTMLInputElement;
            this.el_icon_edit_holder = document.getElementById("device_type_editor_icon_holder");
            if (el_cancel) {
                fromEvent(el_cancel, "click").subscribe(() => {
                    this.hideEditTypeBox();
                    this.updateDeviceTypeList();

                });
            }
            if (el_save) {
                fromEvent(el_save, "click").subscribe(() => this.saveEditType(device_type));
            }
            if (el_name_input) {
                el_name_input.value = device_type.name;
                fromEvent(el_name_input, "keydown").subscribe((evt: KeyboardEvent) => {
                    const el_error_message = document.getElementById("device_type_editor_error_message") as HTMLElement;
                    if (el_error_message) {
                        el_error_message.innerHTML = "";
                    }
                    if (evt.which === 13) {
                        this.saveEditType(device_type);
                    }
                    if (evt.key === "Escape") {
                        this.hideEditTypeBox();
                        this.updateDeviceTypeList();

                    }
                });
            }
            if (this.el_icon_edit_holder) {
                this.el_icon_edit_holder.innerHTML = device_type.icon;
                fromEvent(this.el_icon_edit_holder, "click").subscribe(() => {
                    this.displayIconSelector();
                });
            }

        }
    }
    protected hideEditTypeBox(): void {
        if (this.el_edit_area) {
            this.el_edit_area.innerHTML = "";

        }
        this.el_new_type = undefined;
        this.el_icon_selector = undefined;
    }

    protected saveEditType(device_type: IntercallDeviceType): void {
        const error = this.verifyEditType(device_type);
        if (error) {
            const el_error_message = document.getElementById("device_type_editor_error_message") as HTMLElement;
            if (el_error_message) {
                el_error_message.innerHTML = error;
            } else {
                this.error("no error message element");
            }
        } else {
            const el_name_input = document.getElementById("device_type_editor_name_input") as HTMLInputElement;
            let name = el_name_input ? el_name_input.value : undefined;
            if (!name) {
                this.error("saveEditType", "no name, despite verification");
            } else {
                const icon = this.el_icon_edit_holder.innerHTML;
                if (!this.config.device_types) {
                    this.config.device_types = [];
                }

                this.config.device_types = this.config.device_types.filter(existing_device => existing_device.name !== device_type.name);
                this.config.device_types.push({ name, icon, uid: getUuid() })
                this.updateDeviceTypeList();
                this.sendUpdatedDeviceTypesToServer();
                this.hideEditTypeBox();

            }

        }
    }

    protected displayNewTypeBox(): void {
        if (this.el_edit_area) {
            this.el_edit_area.innerHTML = device_type_edit_box_html;
            this.el_new_type = document.getElementById("device_type_editor_holder");
            const el_cancel = document.getElementById("device_type_editor_cancel_button");
            const el_save = document.getElementById("device_type_editor_save_button");
            const el_name_input = document.getElementById("device_type_editor_name_input");
            this.el_icon_edit_holder = document.getElementById("device_type_editor_icon_holder");
            if (el_cancel) {
                fromEvent(el_cancel, "click").subscribe(() => this.hideNewTypeBox());
            }
            if (el_save) {
                fromEvent(el_save, "click").subscribe(() => this.saveNewType());
            }
            if (el_name_input) {
                fromEvent(el_name_input, "keydown").subscribe((evt: KeyboardEvent) => {
                    const el_error_message = document.getElementById("device_type_editor_error_message") as HTMLElement;
                    if (el_error_message) {
                        el_error_message.innerHTML = "";
                    }
                    if (evt.which === 13) {
                        this.saveNewType();
                    }
                    if (evt.key === "Escape") {
                        this.hideNewTypeBox();
                    }
                });
            }
            this.updateDeviceTypeList();

        }
    }

    protected updateDeviceTypeList(): void {
        if (this.el_icon_edit_holder) {
            fromEvent(this.el_icon_edit_holder, "click").subscribe(
                () => this.displayIconSelector(),
            );

        }
        if (this.el_list_area && this.config.device_types) {
            this.el_list_area.innerHTML = "";
            this.config.device_types.forEach(device => {
                const el = this.createElementForDeviceTypeList(device);
                this.el_list_area.insertAdjacentElement("beforeend", el);
                if (device === this.selected_device_type) {
                    el.classList.add("device_type_selected");
                }
            });
        }
    }

    // protected updateDeviceTypeList(): void {
    //     const def_els = Array.from(document.getElementsByTagNameNS(SVGNS, "defs"));
    //     this.log("updateDeviceTypeList", "def_els", def_els);
    //     this.config.device_types = [];
    //     def_els.forEach(def_el => {
    //         // const device_els = Array.from(def_el.querySelectorAll("[lc.blockname]"));
    //         const device_els = Array.from(def_el.getElementsByTagNameNS(SVGNS, "g"));
    //         this.log("updateDeviceTypeList", device_els);
    //         device_els.forEach(device_el => {
    //             if (device_el.parentNode === def_el) {
    //                 if (device_el.hasAttribute("lc:blockname")) {
    //                     const icon_els = device_els[0].getElementsByTagNameNS(SVGNS, "g");
    //                     if (icon_els.length > 0) {
    //                         const params = {
    //                             name: device_el.getAttribute("lc:blockname"),
    //                             uid: getUuid(),
    //                             icon: icon_els[0].innerHTML.trim()
    //                         }
    //                         this.config.device_types.push(params);
    //                         this.log("device : ", params);
    //                     }
    //                 } else {
    //                     this.log("no blockname", device_el);
    //                 }
    //             } else {
    //                 this.log("this is not a direct child", device_el);
    //             }
    //         });
    //         this.config.device_types.forEach((device_type) => {
    //             const el = this.createElementForDeviceTypeList(device_type);
    //             this.el_list_area.insertAdjacentElement("beforeend", el);
    //             if (device_type === this.selected_device_type) {
    //                 el.classList.add("device_type_selected");
    //             }
    //         });
    //     });
    //     // if (this.el_icon_edit_holder) {
    //     //     fromEvent(this.el_icon_edit_holder, "click").subscribe(
    //     //         () => this.displayIconSelector(),
    //     //     );

    //     // }
    //     // if (this.el_list_area && this.config.device_types) {
    //     //     this.el_list_area.innerHTML = "";
    //     //     this.config.device_types.forEach(device => {
    //     //         const el = this.createElementForDeviceTypeList(device);
    //     //         this.el_list_area.insertAdjacentElement("beforeend", el);
    //     //         if (device === this.selected_device_type) {
    //     //             el.classList.add("device_type_selected");
    //     //         }
    //     //     });
    //     // }
    // }

    protected hideNewTypeBox(): void {
        if (this.el_edit_area) {
            this.el_edit_area.innerHTML = "";

        }
        this.el_new_type = undefined;
        this.el_icon_selector = undefined;
    }

    protected saveNewType(): void {
        const error = this.verifyNewType();
        if (error) {
            const el_error_message = document.getElementById("device_type_editor_error_message") as HTMLElement;
            if (el_error_message) {
                el_error_message.innerHTML = error;
            } else {
                this.error("no error message element");
            }
        } else {
            const el_name_input = document.getElementById("device_type_editor_name_input") as HTMLInputElement;
            const icon = this.el_icon_edit_holder.innerHTML;
            if (!this.config.device_types) {
                this.config.device_types = [];
            }
            this.config.device_types.push({ name: el_name_input.value, icon: icon, uid: getUuid() })
            this.sendUpdatedDeviceTypesToServer();
            this.hideNewTypeBox();
            this.updateDeviceTypeList();

        }
    }
    protected verifyEditType(device_type: IntercallDeviceType): string {
        const el_name_input = document.getElementById("device_type_editor_name_input") as HTMLInputElement;
        let ret = "";
        if (!el_name_input) {
            ret = "no name input";
        } else {
            const name = el_name_input.value;
            if (!name) {
                ret = "Please specify a device name";
            }
            const already_got_this_name = this.config.device_types.filter(device => device.name === name);
            if (already_got_this_name.length > 0) {
                if (name !== device_type.name) {
                    ret = "This name is already used";
                }
            }
        }

        return ret;
    }

    protected verifyNewType(): string {
        const el_name_input = document.getElementById("device_type_editor_name_input") as HTMLInputElement;
        let ret = "";
        if (!el_name_input) {
            ret = "no name input";
        } else {
            const name = el_name_input.value;
            if (!name) {
                ret = "Please specify a device name";
            }
            const already_got_this_name = this.config.device_types.filter(device => device.name === name);
            if (already_got_this_name.length > 0) {
                ret = "A device with this name already exists";
            }
        }

        return ret;
    }

    protected displayIconSelector(): void {
        if (this.el_edit_area && !this.el_icon_selector) {
            this.el_edit_area.insertAdjacentHTML("beforeend", device_icon_selector_html);
            this.el_icon_selector = document.getElementById("device_type_icon_selector_holder");
        }
        if (this.el_icon_selector) {
            this.el_icon_selector.innerHTML = "";
            this.config.device_type_icons.forEach(icon => {
                const el = document.createElement("div");
                el.innerHTML = icon;
                el.className = "device_type_selector_icon_holder";
                this.el_icon_selector.insertAdjacentElement("beforeend", el);

                fromEvent(el, "click").subscribe((evt) => {
                    if (this.el_icon_edit_holder) {
                        let target_element = evt.target as HTMLElement;
                        if (target_element.nodeName.toLowerCase() === "div") {
                            while (target_element && target_element.nodeName.toLowerCase() !== "svg") {
                                target_element = target_element.children[0] as HTMLElement;
                            }
                        }
                        while (target_element && target_element.nodeName.toLowerCase() !== "svg") {
                            target_element = target_element.parentElement as HTMLElement;
                        }
                        if (target_element) {
                            const el_clone = target_element.cloneNode(true) as HTMLElement;
                            if (el_clone) {
                                this.el_icon_edit_holder.innerHTML = "";
                                this.el_icon_edit_holder.insertAdjacentElement("afterbegin", el_clone);
                            } else {
                                this.error("displayIconSelector", "click", "failed to clone target node");
                            }
                        } else {
                            this.error("displayIconSelector", "click", "unable to locate svg");
                        }
                    }
                });
            });
        }
    }

    protected sendUpdatedDeviceTypesToServer(): void {
        const request = new SocketRequest("device.types.update", this.config.device_types);
        this.socket_requests.next(request);
    }

    protected onDeviceTypeEditClick(device_type: IntercallDeviceType): void {
        this.displayEditTypeBox(device_type);
    }
    protected onDeviceTypeRemoveClick(device_type: IntercallDeviceType): void {
        if (window.confirm("Are you sure you want to delete this device type?\n\nAll devices of this type will be removed")) {
            this.removeDeviceType(device_type);
        }
    }
    protected removeDeviceType(device_type: IntercallDeviceType): void {
        this.mapbox.deleteAllDevicesOfType(device_type);
        this.config.device_types = this.config.device_types.filter(existing_device_type => existing_device_type !== device_type);
        this.updateDeviceTypeList();
        this.sendUpdatedDeviceTypesToServer();
        this.action_subject.next({ action_type: AppActionType.save_remote });
    }

    protected deselectDeviceType(): void {
        if (this.selected_device_type) {
            this.selected_device_type = undefined;
            this.updateDeviceTypeList();
            if (this.mapbox) {
                this.mapbox.setInsertMode(undefined);
            }
        }
    }

    protected selectDeviceType(device_type: IntercallDeviceType): void {
        if (this.selected_device_type === device_type) {
            this.deselectDeviceType();
        } else {
            this.deselectDeviceType();

            this.selected_device_type = device_type;
            this.updateDeviceTypeList();
            if (this.mapbox) {
                this.mapbox.setInsertMode(device_type);
            }
        }
    }

}
