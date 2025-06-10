import { Subject, timer, Observable } from "rxjs"
import { filter } from "rxjs/operators"
import { writeFileSync } from "fs";
import * as path from "path";

import * as express from "express";

import { Module, ModuleEventType } from "../../module";
import { UDPListener } from "./udp.listener";
import { Config } from "../../defines"
import { LismorePacket } from "../../../../misc/lismore";
import { Socket } from "socket.io" //
import { SocketRequest, SocketResponse, SocketResponseResultTypes } from "../../../../misc/socket";


class UDPModule extends Module {
    private udp: UDPListener;
    public constructor() {
        super();
        this.module_name = "UDP";
    }


    protected setConfig(config: Config): void {
        super.setConfig(config);
        let udp_port = this.Config.udp_port;
        if (udp_port) {
            this.udp = new UDPListener(udp_port);
            this.udp.PacketStream.subscribe(packet => this.onUdpPacket(packet));
            this.udp.start();

        }
    }

    public onSocketConnection(socket: Socket): void {
        socket.join("raw_packet");

        socket.off("injector", (request: SocketRequest, callback: any) => { });
        socket.on("injector", (request: SocketRequest, callback) => {
            this.handleSocketRequest(request)
                .then((response) => {
                    callback(response);
                })
                .catch((error: any) => {
                    this.error("Error handleSocketRequest", error, request);
                })
        });
    }

    public handleSocketRequest(request: SocketRequest): Promise<SocketResponse> {
        return new Promise<SocketResponse>((resolve, reject) => {
            let response: SocketResponse = undefined;
            switch (request.type) {
                default:
                    this.warn("unknown socket request", request);
                    reject(response);
                    break;
                case "injector.inject":
                    resolve(this.handleInjectionRequest(request));
                    break;
            }
        });
    }


    private onUdpPacket(packet: LismorePacket): void {
        this.IO.sockets.in("raw_packet").emit('raw_packet', JSON.stringify(packet));
        this.log("received packet", packet.address, ":", packet.channel_id, ":", packet.supply, "  event [" + packet.event_id + "]", packet.event_name);
        this.outputEvent(ModuleEventType.rx_udp_packet, packet);
    }

    private handleInjectionRequest(request: SocketRequest): Promise<SocketResponse> {
        return new Promise<SocketResponse>((resolve, reject) => {
            if (!request) {
                this.error("handleRequestAdminConfig", "no request");
                reject(new SocketResponse(request, SocketResponseResultTypes.bad_parameters));
            } else {
                if (!request.payload) {
                    this.error("handleRequestAdminConfig", "no request payload");
                    reject(new SocketResponse(request, SocketResponseResultTypes.bad_parameters));
                } else {
                    const packet: LismorePacket = new LismorePacket();
                    packet.fromObject(request.payload);
                    this.log("broadcasting packet", packet.address, ":", packet.channel_id, ":", packet.supply, "  event [" + packet.event_id + "]", packet.event_name);
                    this.udp.broadcastPacket(packet);
                    resolve(new SocketResponse(request, SocketResponseResultTypes.success));
                }
            }
        });
    }

    // school's out
}



const udp_module = new UDPModule();
export { udp_module as UDP }
