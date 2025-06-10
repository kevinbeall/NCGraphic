import { IntercallDevice } from "../../misc/device";

export enum AppActionType {
    // save_local = "save_local",
    save_remote = "save_remote",
    updateNursecallLayerVisibility = "updateNursecallLayerVisibility",
    checkForDuplicates = "checkForDuplicates",
}
export interface IAppAction {
    action_type: AppActionType;
    payload?: any;
}

