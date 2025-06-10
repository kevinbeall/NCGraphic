console.log("injector client");
import { Loggable } from "../../misc/loggable";
import { InjectorApp } from "./injector/injector.app";
class InjectorIndex extends Loggable { };
const out = new InjectorIndex();



function attach() {
    console.log("attaching to dom #", count);
    el = document.getElementById("injector_app");
    if (!el) {
        if (count < 300) {
            count++;
            setTimeout(() => {
                attach();
            }, 100);
        } else {
            console.error("Unable to attach to DOM - no element", "display_app");
        }
    } else {
        loaded();
    }
}
function loaded() {
    const app = new InjectorApp();
    app.start();
}






let el = undefined;
let count = 0;

attach();



