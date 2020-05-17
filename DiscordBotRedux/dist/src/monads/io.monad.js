"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IO {
    constructor(effect) {
        this.effect = effect;
    }
    static of(a) {
        return new IO(() => a);
    }
    static from(fn) {
        return new IO(fn);
    }
    map(fn) {
        const self = this;
        return new IO(() => fn(self.effect()));
    }
    chain(fn) {
        return fn(this.effect());
    }
    run() {
        return this.effect();
    }
}
exports.IO = IO;
//# sourceMappingURL=io.monad.js.map