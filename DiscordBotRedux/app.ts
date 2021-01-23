
import { bot } from './src/bot'
import { initializeState } from './src/store'
import { Say, MapToAction } from './src/actions/default';
import * as consoleGroup from 'console-group';

consoleGroup.install();

let store = initializeState();

bot.on('ready', function () {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function (user, userID, channelID, message, event) {
    const entryPhrase = /^hey\s+baby\s+(.+)/
    const messageBreakdown = entryPhrase.exec(message);
    if (user !== "Baby Buttler" && messageBreakdown && messageBreakdown.length > 1)
        store.dispatch(Object.create(new MapToAction({ user, userID, channelID, message: messageBreakdown[1], event: "" })));
});
