import * as util from "util"; // for LismorePacket


export enum LismoreEventNames {
    "No Device" = 0,
    "tetsto" = 33,
    "abacus" = 34,
    "Reset" = 128,
    "Present" = 129,
    "Accept" = 130,
    "Isolate" = 131,
    "Speech" = 132,
    "Out Of Bed" = 133,
    "Attend" = 134,
    "Slave Reset" = 135,
    "Call" = 136,
    "Assistance" = 137,
    "Emergency" = 138,
    "Priority" = 139,
    "Attack" = 140,
    "Tamper" = 141,
    "Intercom" = 142,
    "Intercom Reset" = 143,
    "Catering" = 144,
    "Low Battery" = 145,
    "Bed Wet" = 147,
    "Visit" = 148,
    "Priority 2" = 149,
    "Priority 3" = 150,
    "Priority 4" = 151,
    "Man Down" = 152,
    "Toilet Call" = 153,
    "Doctor Present" = 154,
    "Bad SysX" = 155,
    "Bad Address" = 156,
    "Bad Address Sync" = 157,
    "Silent Speech" = 158,
    "Display Setting" = 159,
    "PSU FAULT" = 209,
    "PSU OK=210",
    "Broadcast OK" = 211,
    "Disk Full" = 216,
    "Config Change" = 217,
    "Device IO" = 218,
    "LAN OK" = 219,
    "LAN Fault" = 220,
    "Last Reset SW" = 222,
    "Alive Check" = 223,
    "Mains Failure" = 226,
    "Mains OK" = 227,
    "Battery OK" = 228,
    "Battery Fail" = 229,
    "Earth Fault" = 230,
    "System Startup" = 231,
    "System Broadcast" = 232,
    "Network Reset" = 233,
    "Clock Update" = 235,
    "Despatch Event" = 236,
    "Last Reset WDG" = 237,
    "Last Reset MCLR" = 238,
    "Last Reset POR" = 239,
}


export class LismorePacket {
    public channel_id: number;
    public address: number;
    public event_id: number;
    public user_id: number;
    public name: string;
    public supply: string;
    public event_name: string;

    public constructor(buffer?: ArrayBuffer) {
        this.name = "";
        this.supply = "";
        this.event_name = "";
        this.fromBuffer(buffer);
    }
    public fromObject(config?: any): void {
        if (config) {
            if (config.hasOwnProperty("channel_id")) {
                this.channel_id = config.channel_id;
            }
            if (config.hasOwnProperty("address")) {
                this.address = config.address;
            }
            if (config.hasOwnProperty("event_id")) {
                this.event_id = config.event_id;
            }
            if (config.hasOwnProperty("user_id")) {
                this.user_id = config.user_id;
            }
            if (config.hasOwnProperty("name")) {
                this.name = config.name;
            }
            if (config.hasOwnProperty("supply")) {
                this.supply = config.supply;
            }
            if (config.hasOwnProperty("event_name")) {
                this.event_name = config.event_name;
            }
        }
        this.cleanupNames();
    }
    public fromBuffer(buffer?: ArrayBuffer): void {
        if (buffer) {
            try {
                const decoder = new util.TextDecoder("utf-8");
                if (buffer.byteLength >= 95) {
                    const view = new DataView(buffer);
                    this.channel_id = view.getUint8(9);
                    this.address = view.getUint8(13);
                    this.event_id = view.getUint8(15);
                    this.user_id = view.getUint8(17);
                    this.name = decoder.decode(buffer.slice(31, 45));
                    this.supply = decoder.decode(buffer.slice(63, 79));
                    this.event_name = decoder.decode(buffer.slice(79, 95));

                    this.cleanupNames();
                } else {
                    // console.warn("LismorePacket, Invalid packet buffer.");
                }
                // TODO validate here - maybe with an isValid() function
            } catch (e) {
                console.error("Exception during LismorePacket.fromBuffer", e);
            }
        }
    }

    public toBuffer(): Buffer {
        const ret: Uint8Array = new Uint8Array(96);
        const view = new DataView(ret.buffer);
        var encoder = new util.TextEncoder();
        view.setUint8(9, this.channel_id);
        view.setUint8(13, this.address);
        view.setUint8(15, this.event_id);
        view.setUint8(17, this.user_id);


        const name_string = this.name.length < 14 ? this.name : this.name.substr(0, 14);
        const supply_string = this.supply.length < 14 ? this.supply : this.supply.substr(0, 14);
        const event_string = this.event_name.length < 14 ? this.event_name : this.event_name.substr(0, 14);
        const name = Buffer.from(name_string);
        const supply = Buffer.from(supply_string);
        const event_name = Buffer.from(event_string);

        ret.set(name, 31);
        ret.set(supply, 63);
        ret.set(event_name, 79);
        return Buffer.from(ret);
    }

    public isTheSameDevice(packet: LismorePacket): boolean {
        if (!packet) {
            return false;
        }
        if (packet.channel_id != this.channel_id) {
            return false;
        }
        if (packet.address != this.address) {
            return false;
        }
        if (packet.supply != this.supply) {
            return false;
        }
        return true;
    }
    public matches(packet: LismorePacket): boolean {
        if (!packet) {
            return false;
        }
        if (packet.channel_id != this.channel_id) {
            return false;
        }
        if (packet.address != this.address) {
            return false;
        }
        if (packet.event_id != this.event_id) {
            return false;
        }
        if (packet.user_id != this.user_id) {
            return false;
        }
        if (packet.name != this.name) {
            return false;
        }
        if (packet.supply != this.supply) {
            return false;
        }
        if (packet.event_name != this.event_name) {
            return false;
        }
        return true;
    }

    private cleanupNames(): void {
        if (this.name) {
            this.name = this.name.replace(/[\u{0000} \u{0080}-\u{FFFF}]/gu, "").trim();
            if (this.name.length > 13) {
                this.name = this.name.substr(0, 14);
            }
        }
        if (this.supply) {
            this.supply = this.supply.replace(/[\u{0000} \u{0080}-\u{FFFF}]/gu, "").trim();
            if (this.supply.length > 13) {
                this.supply = this.supply.substr(0, 14);
            }
        }
        if (this.event_name) {
            this.event_name = this.event_name.replace(/[\u{0000} \u{0080}-\u{FFFF}]/gu, "").trim();
            if (this.event_name.length > 13) {
                this.event_name = this.event_name.substr(0, 14);
            }
        }
    }

}
