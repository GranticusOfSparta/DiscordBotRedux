"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const monads_1 = require("./monads");
function getInitialState() {
    return {
        say: monads_1.Maybe.nothing()
    };
}
exports.getInitialState = getInitialState;
//# sourceMappingURL=initial-state.js.map