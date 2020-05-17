"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const default_1 = require("./default");
const flat_combine_reducers_1 = __importDefault(require("flat-combine-reducers"));
let rootReducers = flat_combine_reducers_1.default([...default_1.defaultReducers]);
exports.rootReducers = rootReducers;
//# sourceMappingURL=index.js.map