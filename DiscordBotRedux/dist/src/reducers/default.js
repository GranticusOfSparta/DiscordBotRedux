"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const monads_1 = require("../monads");
const initial_state_1 = require("../initial-state");
const actions_1 = require("../actions");
function sayReducer(state = initial_state_1.getInitialState(), action) {
    switch (action.type) {
        case actions_1.DefaultActions.ActionTypes.SAY:
            return Object.assign({}, state, { say: monads_1.Maybe.of(action.payload) });
    }
}
exports.defaultReducers = [sayReducer];
//# sourceMappingURL=default.js.map