export interface Config {
    http_port: string;
    udp_port: number,

    static_root: string;

    config_version: string;
}


export enum EHTTPReturn {
    unhandled = 0,
    partial,
    handled,
    redirected,

}

