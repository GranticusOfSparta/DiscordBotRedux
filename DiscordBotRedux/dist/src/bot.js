"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_io_1 = require("discord.io");
const config = __importStar(require("../auth.json"));
// Initialize Discord Bot
const bot = new discord_io_1.Client({
    token: config.token,
    autorun: true
});
exports.bot = bot;
//# sourceMappingURL=bot.js.map