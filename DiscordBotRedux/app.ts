
import { bot } from './src/bot'
import { initializeState } from './src/store'
import { DefaultActions } from './src/actions';
import { MessageEventData } from './src/models';
let store = initializeState();
store.subscribe(() => console.log(store.getState()))

bot.on('ready', function () {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function (user, userID, channelID, message, event) {
    function say(payload: MessageEventData): DefaultActions.Say {
        return {
            type: DefaultActions.ActionTypes.SAY,
            payload: payload
        }
    }
    if (user !== "Baby Buttler")
        store.dispatch(say({ user, userID, channelID, message, event: "" }));
});
