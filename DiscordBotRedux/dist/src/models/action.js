"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export interface Action<T = any> {
//     type: string,
//     payload?: T
// }
class Action {
    constructor(type, payload) {
        this.type = type;
        this.payload = payload;
    }
}
exports.Action = Action;
//# sourceMappingURL=action.js.map