"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = require("./src/bot");
const store_1 = require("./src/store");
const actions_1 = require("./src/actions");
let store = store_1.initializeState();
store.subscribe(() => console.log(store.getState()));
bot_1.bot.on('ready', function () {
    console.log('Logged in as %s - %s\n', bot_1.bot.username, bot_1.bot.id);
});
bot_1.bot.on('message', function (user, userID, channelID, message, event) {
    function say(payload) {
        return {
            type: actions_1.DefaultActions.ActionTypes.SAY,
            payload: payload
        };
    }
    if (user !== "Baby Buttler")
        store.dispatch(say({ user, userID, channelID, message, event: "" }));
});
//# sourceMappingURL=app.js.map