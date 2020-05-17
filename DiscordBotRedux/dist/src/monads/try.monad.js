"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Try {
    constructor(val) {
        this._val = val;
    }
    get value() {
        return this._val;
    }
    get isFailure() {
        throw new Error('Implement in subclass!');
    }
    get isSuccess() {
        throw new Error('Implement in subsclass!');
    }
    static of(fn) {
        try {
            return new Success(fn());
        }
        catch (error) {
            return new Failure(error);
        }
    }
    static success(val = null) {
        return new Success(val);
    }
    static fail(val = null) {
        return new Failure(val);
    }
    map(fn) {
        return Try.of(() => fn(this._val));
    }
    onFail(fn) {
        return this;
    }
    getOrElse(fallback) {
        return this._val;
    }
}
exports.Try = Try;
class Success extends Try {
    get isSuccess() {
        return true;
    }
    get isFailure() {
        return false;
    }
    getOrElse(fallback) {
        return this._val;
    }
    getOrElseThrow() {
        return this._val;
    }
    onFail(fn) {
        return this;
    }
}
class Failure extends Try {
    get isSuccess() {
        return false;
    }
    get isFailure() {
        return true;
    }
    map(fn) {
        return new Failure(this.value);
    }
    getOrElse(fallback) {
        return fallback;
    }
    getOrElseThrow() {
        if (this._val !== null) {
            throw this._val;
        }
    }
    onFail(fn) {
        fn(this._val);
        return this;
    }
}
//# sourceMappingURL=try.monad.js.map