import { IntercallDevice, IntercallDeviceType } from "./device";
import { ISiteAnimations } from "./animation";

export interface Point {
    x: number;
    y: number;
}

export interface Rectangle {
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface ZoneConfig {
    display_name: string;// must be unique over the whole site
    map_file: string;
    map_data: string;
    icon_scale: number;
    devices: Array<IntercallDevice>;
}


export interface SiteConfig {
    site_name: string;
    animations: ISiteAnimations;
    zones: Array<ZoneConfig>;

    device_type_icons: Array<string>;
    device_types: Array<IntercallDeviceType>;
    config_version: string;
}

export function ZoneForName(name: string, config: SiteConfig): ZoneConfig {
    let ret: ZoneConfig = undefined;
    if (name && config) {
        if (config.zones) {
            config.zones.forEach(zone => {
                if (zone.display_name.toLowerCase() === name.toLowerCase()) {
                    ret = zone;
                }
            });

        }
    }

    return ret;
    // return config ? config.zones ? config.zones.find((z: ZoneConfig) => z.display_name === name) : undefined : undefined;
}

export function ZonesForMapFile(map_file: string, config: SiteConfig): ZoneConfig[] {
    return config ? config.zones ? config.zones.filter((z: ZoneConfig) => z.map_file === map_file) : undefined : undefined;
}

const default_config: SiteConfig = {
    site_name: "unknown",
    animations: undefined,
    zones: [],
    device_type_icons: [],
    device_types: [],
    config_version: "0"
}

export { default_config as DefaultSiteConfig };

export interface IDisplayZoneConfig {
    display_name: string,
    map_data: string,
    devices: Array<IntercallDevice>,
}

export interface IDisplaySiteConfig {
    site_name: string;
    zones: Array<IDisplayZoneConfig>;
}
