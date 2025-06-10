import { IAnimationSequence } from "../../../../misc/animation";

export interface IDisplayZoneConfig {
    display_name: string;
    map_file: string;
    map_data: string;

}
export interface IDisplaySiteConfig {
    site_name: string;
    animations: IDisplayAnimations;
    zones: Array<IDisplayZoneConfig>;
    site_version: string;
}


export interface IDisplayAnimations {
    end_events: Array<number>;
    sequences: Array<IAnimationSequence>;
}
