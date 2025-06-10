console.log("admin client");


import { AdminApp } from "./admin/admin.app";

function attach() {
    console.log("attaching to dom #", count);
    el = document.getElementById("admin_app");
    if (!el) {
        if (count < 300) {
            count++;
            setTimeout(() => {
                attach();
            }, 100);
        } else {
            console.error("Unable to attach to DOM - no element", "admin_app");
        }
    } else {
        loaded();
    }
}
function loaded() {
    console.log("Loaded");
    const app = new AdminApp();
    app.start();
}






let el = undefined;
let count = 0;

attach();
