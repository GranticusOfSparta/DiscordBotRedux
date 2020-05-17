"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Maybe {
    static just(a) {
        return new Just(a);
    }
    get value() {
        throw new Error('This getter should never get called!');
    }
    static nothing() {
        return new Nothing();
    }
    static fromNullable(a) {
        return a !== null && a !== undefined ? Maybe.just(a) : Maybe.nothing();
    }
    static of(a) {
        return Maybe.just(a);
    }
    get isNothing() {
        return false;
    }
    get isJust() {
        return false;
    }
    getOrElse(other) {
        throw new Error('This method should never be called!');
    }
    map(f) {
        throw new Error('This method should never be called!');
    }
    filter(f) {
        throw new Error('This method should never be called!');
    }
    chain(f) {
        throw new Error('This method should never be called!');
    }
}
exports.Maybe = Maybe;
class Just extends Maybe {
    constructor(value) {
        super();
        this._value = value;
    }
    get isJust() {
        return true;
    }
    get value() {
        return this._value;
    }
    map(f) {
        return Maybe.fromNullable(f(this._value));
    }
    getOrElse(other) {
        return this._value;
    }
    filter(f) {
        return Maybe.fromNullable(f(this._value) ? this._value : null);
    }
    chain(f) {
        return f(this.value);
    }
}
class Nothing extends Maybe {
    get isNothing() {
        return true;
    }
    map(f) {
        return Maybe.nothing();
    }
    get value() {
        throw new TypeError(`Can't extract the value of a Nothing.`);
    }
    getOrElse(other) {
        return other;
    }
    filter(f) {
        return Maybe.nothing();
    }
    chain(f) {
        return Maybe.nothing();
    }
}
//# sourceMappingURL=maybe.monad.js.map