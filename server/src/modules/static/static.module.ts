import { Subject, timer, Observable } from "rxjs"
import { filter } from "rxjs/operators"
import { writeFileSync } from "fs";
import * as path from "path";

import * as express from "express";

import { Module } from "../../module";
import { EHTTPReturn } from "../../defines"


class StaticModule extends Module {
    public constructor() {
        super();
        this.module_name = "Static";
    }


    public handleHTMLRequest(request: express.Request, response: express.Response): EHTTPReturn {
        let ret = EHTTPReturn.unhandled;
        if (request.path === "/") {
            const filepath = path.resolve(this.Config.static_root, "display.html");
            response.sendFile(filepath);
            ret = EHTTPReturn.handled;
        }
        if (request.path === "/injector") {
            const filepath = path.resolve(this.Config.static_root, "injector.html");
            response.sendFile(filepath);
            ret = EHTTPReturn.handled;
        }
        if (request.path === "/admin") {
            const filepath = path.resolve(this.Config.static_root, "admin.html");
            response.sendFile(filepath);
            ret = EHTTPReturn.handled;
        }
        return ret;
    }



    // school's out
}



const static_module = new StaticModule();
export { static_module as Static }
