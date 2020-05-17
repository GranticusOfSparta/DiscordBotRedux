"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_observable_1 = require("redux-observable");
const actions_1 = require("../actions");
const operators_1 = require("rxjs/operators");
const bot_1 = require("../bot");
exports.sayEpic = (action$, store$, dependencies) => {
    return action$.pipe(redux_observable_1.ofType(actions_1.DefaultActions.ActionTypes.SAY), operators_1.tap((action) => {
        bot_1.bot.sendMessage({
            to: action.payload.channelID,
            message: action.payload.message
        });
    }), operators_1.map(() => {
        return { type: actions_1.DefaultActions.ActionTypes.SAY_SUCCESS };
    })
    // filter(() => false)
    );
};
exports.defaultEpics = [exports.sayEpic];
//# sourceMappingURL=default.js.map