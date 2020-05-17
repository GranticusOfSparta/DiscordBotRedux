import { Client } from "discord.io";
import * as config from '../auth.json';

// Initialize Discord Bot
const bot = new Client({
    token: config.token,
    autorun: true
});

export { bot }