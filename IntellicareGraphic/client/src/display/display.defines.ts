import { IAnimationSequence } from "../../../misc/animation";

export const DisplayDefaultSiteConfig: IDisplaySiteConfig = {
    site_name: "Default Site",
    animations: undefined,
    zones: [],
    site_version: "0.0.0"
}


export interface IDisplayZoneConfig {
    display_name: string;
    map_data: string;
}

export enum UILayout {
    two_column = "ui_two_column",
    one_column = "ui_one_column",
    one_row = "ui_one_row"
}


export interface IDisplaySiteConfig {
    site_name: string;
    zones: Array<IDisplayZoneConfig>;
    site_version: string;
    animations: IDisplayAnimations;

}

export interface IDisplayAnimations {
    end_events: Array<number>;
    sequences: Array<IAnimationSequence>;
}
