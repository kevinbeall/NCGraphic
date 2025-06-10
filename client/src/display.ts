import { DisplayApp } from "./display/display.app";

function attach() {
    console.log("attaching to dom #", count);
    el = document.getElementById("display_app");
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
    console.log("Loaded");
    const app = new DisplayApp();
    app.start();
}






let el = undefined;
let count = 0;

attach();
