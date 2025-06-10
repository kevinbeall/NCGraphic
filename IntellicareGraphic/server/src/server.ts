const package_json = require("../package.json");

console.log("Admin server running...  version", package_json.version);

import * as bodyParser from "body-parser";
// import * as http from "http";
import * as express from "express";
import * as socketio from "socket.io";
import { Observable, Subject, merge } from "rxjs";

import { resolve } from "path";

import { Config, EHTTPReturn } from "./defines";
import { Module, IModuleEvent, ModuleEventType } from "./module";


import { SiteConfig } from "../../misc/config";

import { Static } from "./modules/static/static.module";
import { Admin } from "./modules/admin/admin.module";
import { Display } from "./modules/display/display.module";
import { UDP } from "./modules/udp/udp.module";

import {readFileSync} from "fs"


import { Loggable } from "../../misc/loggable";
class AdminIndex extends Loggable {
}

const out = new AdminIndex;

// const config: Config = require("./admin.json");

const default_config:Config = {
    "http_port": "9090",
    "udp_port": 6345,

    "static_root": "./dist/static",


    "config_version": "0.0.0"
}

let config:Config = default_config;
try{
    const config_data = readFileSync('./dist/admin.json', 'utf8');
    config = JSON.parse(config_data);
} catch(error){
    out.error("Error loading config",__dirname,process.cwd(),error);
}

const http_port = config.http_port ? config.http_port : 8000;


try {


    var app = express();
    app.set("port", http_port);
    app.use(express.static(config.static_root));
    app.use(bodyParser.json());

    app.all("*", (request: express.Request, response: express.Response) => {
        out.log("app.all call", request.url);
        const success = modules.filter(module => module.handleHTMLRequest(request, response) === EHTTPReturn.handled);
        if (success && success.length > 0) {
            // log(success.length, "modules handled this(", request.url, ") request [", success.map(module => module.ModuleName).join(","), "]");
        } else {
            // log("no module found for request", request.url);
        }

    });

    let http = require("http").Server(app);
    let io = require("socket.io")(http);


    const events_in = new Subject<IModuleEvent>();

    const modules: Array<Module> = [Static, Admin, Display, UDP];
    modules.forEach(module => {
        module.EventsIn = events_in;
        module.IO = io;
        module.EventsOut.subscribe((event) => {
            events_in.next(event);
        });

    });

    // loading the config kicks things off, so make sure everyone has set themselves up first
    modules.forEach(module => {
        module.Config = config;

    });
    app.get("/", (req: any, res: any) => {
        const filepath = resolve(config.static_root, "admin.html");
        res.sendFile(filepath);
    });

    io.on("connection", function(socket: any) {
        if (socket) {
            socket.removeAllListeners();
            out.log("a user connected", socket.handshake.address);
            socket.on('message', (msg: any) => {
                out.log('message : ', msg);
            });

            modules.forEach(m => m.onSocketConnection(socket));
        }

    });



    http.listen(http_port, function() {
        out.log("HTTP server listening on *:", http_port);
    });

} catch (e) {
    out.error("Index Exception ", e);
}
