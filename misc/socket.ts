import { getUuid } from "./tools"
export class SocketRequest {
    public uid: string;
    public type: string;
    public payload: any;

    public constructor(type?: string, payload?: any) {
        this.uid = getUuid();
        this.type = type;
        this.payload = payload;
    }
}


export class SocketResponse {
    public uid: string;
    public result: SocketResponseResultTypes;
    public request_uid: string;
    public request_type: string;
    public payload: any;

    public constructor(request: SocketRequest, result = SocketResponseResultTypes.fail, payload?: any) {
        this.uid = getUuid();
        this.request_uid = request ? request.uid : undefined;
        this.request_type = request ? request.type : undefined;
        this.result = result;
        this.payload = payload;
    }

}


export enum SocketResponseResultTypes {
    file_related_error = "File Related Error",
    bad_parameters = "Bad Parameters",
    fail = "Fail",


    success = "Success",


    unknown = "Unknown Result",
    unknown_request = "Unknown Request",
    unknown_error = "Unknown Error"

}
