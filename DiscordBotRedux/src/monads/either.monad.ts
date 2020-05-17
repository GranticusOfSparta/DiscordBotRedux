/*
 *  An Either monad with Left and Right subclasses
 *  This monad is intended to hold the results of a computation that may fail
 *  and provide additional information about the failure
 *  Left contains a possible error message or throwable exception object
 *  Right contains a successful value
 *
 */

/* Utilities */
import * as R from 'ramda';

export class Either {
  constructor(private _value) {}

  get value() {
    return this._value;
  }

  static left(val) {
    return new Left(val);
  }

  static right(val) {
    return new Right(val);
  }

  static fromNullAble(val) {
    return R.ifElse(R.isNil, Either.left, Either.right)(val);
  }

  static of(val) {
    return Either.right(val);
  }
}

export class Left {
  constructor(private _value) {}

  map(f) {
    return this; // -> no operation performed
  }

  get value() {
    throw new TypeError(`The Either.Left monad lacks a value`);
  }

  getOrElse(other) {
    return other;
  }

  orElse(f) {
    return f(this.value);
  }

  chain(f) {
    return this; // -> no operation performed
  }

  getOrElseThrow(msg) {
    throw new Error(msg);
  }

  filter(f) {
    return this; // -> no operation performed
  }
}

export class Right {
  constructor(private _value) {}

  map(f) {
    return Either.of(f(this._value));
  }

  getOrElse(other) {
    return this._value;
  }

  orElse() {
    return this;
  }

  chain(f) {
    return f(this._value);
  }

  getOrElseThrow(msg) {
    return this._value;
  }

  filter(f) {
    return Either.fromNullAble(f(this._value) ? this._value : null);
  }
}
