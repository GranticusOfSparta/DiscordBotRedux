
import { bot } from './src/bot'
import { initializeState } from './src/store'
import { DefaultActions } from './src/actions';
import { MessageEventData } from './src/models';
import { Say } from './src/actions/default';
import * as consoleGroup from 'console-group';

consoleGroup.install();

let store = initializeState();

bot.on('ready', function () {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function (user, userID, channelID, message, event) {
    debugger;
    if (user !== "Baby Buttler")
        store.dispatch(Object.create(new Say({ user, userID, channelID, message, event: "" })));
});
