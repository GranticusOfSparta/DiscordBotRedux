"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// Long Version
exports.ofType = (t) => (source) => new rxjs_1.Observable(observer => {
    return source.subscribe({
        next(action) {
            if (action.type === t)
                observer.next(action);
        },
        error(err) { observer.error(err); },
        complete() { observer.complete(); }
    });
});
//# sourceMappingURL=of-type.js.map