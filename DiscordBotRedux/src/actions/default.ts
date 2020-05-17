import { MessageEventData } from '../models';
import { Action } from 'redux';

export enum ActionTypes {
    MAP_TO_ACTION = "[default] MAP_TO_ACTION",
    MAP_TO_ACTION_SUCCESS = "[default] MAP_TO_ACTION_SUCCESS",
    MAP_TO_ACTION_FAILURE = "[default] MAP_TO_ACTION_FAILURE",
    CMD_EXECUTION_ERROR = "[default] CMD_EXECUTION_ERROR",

    SAY = "[default] SAY",
    SAY_SUCCESS = "[default] SAY_SUCCESS"

}
export class MapToAction implements Action {
    readonly type = ActionTypes.MAP_TO_ACTION;
    constructor(public payload: MessageEventData) {

    }
}

export class MapToActionSuccess implements Action {
    readonly type = ActionTypes.MAP_TO_ACTION_SUCCESS;
    constructor(public payload: MessageEventData) { }
}

export class MapToActionFailure implements Action {
    readonly type = ActionTypes.MAP_TO_ACTION_FAILURE;
    constructor(public payload: MessageEventData) { }
}

export class Say implements Action {
    readonly type = ActionTypes.SAY;
    constructor(public payload: MessageEventData) { }
}
export class SaySuccess implements Action {
    readonly type = ActionTypes.SAY_SUCCESS;
}

export class CMDExecutionError implements Action {
    readonly type = ActionTypes.CMD_EXECUTION_ERROR;
    constructor(public payload: any) { }
}

export type All =
    | Say
    | SaySuccess
