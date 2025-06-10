import { Subject, Observable } from "rxjs"
import * as dgram from "dgram";

import { Loggable } from "../../../../misc/loggable";
import { LismorePacket } from "../../../../misc/lismore";


const LISMORE_DUPLICATE_TIMEOUT = 500;
const LISMORE_BROADCAST_DESTINATION = "239.255.255.250";
// const LISMORE_BROADCAST_DESTINATION = "255.255.255.255";

export class UDPListener extends Loggable {
    private port: number;
    private udp_socket: dgram.Socket;
    private last_lip_time: number;
    private last_lip_packet: LismorePacket;

    private packet_stream: Subject<LismorePacket>;



    public constructor(port: number) {
        super();
        this.port = port;
        this.packet_stream = new Subject<LismorePacket>();
    }

    public get PacketStream(): Observable<LismorePacket> { return this.packet_stream; }


    public start(): void {
        this.listenToUDP();
    }
    public stop(): void {
        if (this.udp_socket) {
            this.udp_socket.close();
            this.udp_socket = undefined;
        }
    }
    public listenToUDP(): void {
        this.udp_socket = dgram.createSocket("udp4");
        if (this.udp_socket) {
            this.udp_socket.on("error", (error: any) => {
                this.error("dgram.socket error ", error);
            });

            this.udp_socket.on("message", (message: Buffer, remote: any) => {
                this.onMessage(message, remote);
            });

            this.udp_socket.on("listening", () => {
                const address: any = this.udp_socket.address();
                this.log("UDP Server listening on " + address.address + ":" + address.port);
            });

            this.udp_socket.bind(this.port);
        } else {
            this.error("Error starting udp socket");
        }
    }



    public onMessage(message: Buffer, remote: any): void {
        const packet = new LismorePacket(message.buffer);
        const timestamp = Date.now();
        if (this.last_lip_time && this.last_lip_packet) {
            const diff = timestamp - this.last_lip_time;
            if (diff <= LISMORE_DUPLICATE_TIMEOUT) {
                if (packet.matches(this.last_lip_packet)) {
                    // this.log("disregarding duplicate lismore packet");
                } else {
                    this.packet_stream.next(packet);
                }
            } else {
                this.last_lip_packet = packet;
                this.packet_stream.next(packet);

            }
        } else {
            this.packet_stream.next(packet);
        }
        this.last_lip_time = timestamp;
        this.last_lip_packet = packet;

    }

    public broadcastPacket(packet: LismorePacket): void {
        const buffer = packet.toBuffer();
        this.broadcast(buffer);
    }
    private broadcast(message: Buffer): void {
        console.log("broadcast", message);
        if (this.udp_socket) {
            console.log("broadcasting", message.toString());
            this.udp_socket.send(message, 0, message.length, this.port, LISMORE_BROADCAST_DESTINATION);
        }
    }
}
