"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["MAP_TO_ACTION"] = "[default] MAP_TO_ACTION";
    ActionTypes["MAP_TO_ACTION_SUCCESS"] = "[default] MAP_TO_ACTION_SUCCESS";
    ActionTypes["MAP_TO_ACTION_FAILURE"] = "[default] MAP_TO_ACTION_FAILURE";
    ActionTypes["CMD_EXECUTION_ERROR"] = "[default] CMD_EXECUTION_ERROR";
    ActionTypes["SAY"] = "[default] SAY";
    ActionTypes["SAY_SUCCESS"] = "[default] SAY_SUCCESS";
})(ActionTypes = exports.ActionTypes || (exports.ActionTypes = {}));
class MapToAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.MAP_TO_ACTION;
    }
}
exports.MapToAction = MapToAction;
class MapToActionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.MAP_TO_ACTION_SUCCESS;
    }
}
exports.MapToActionSuccess = MapToActionSuccess;
class MapToActionFailure {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.MAP_TO_ACTION_FAILURE;
    }
}
exports.MapToActionFailure = MapToActionFailure;
class Say {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.SAY;
    }
}
exports.Say = Say;
class SaySuccess {
    constructor() {
        this.type = ActionTypes.SAY_SUCCESS;
    }
}
exports.SaySuccess = SaySuccess;
class CMDExecutionError {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.CMD_EXECUTION_ERROR;
    }
}
exports.CMDExecutionError = CMDExecutionError;
//# sourceMappingURL=default.js.map