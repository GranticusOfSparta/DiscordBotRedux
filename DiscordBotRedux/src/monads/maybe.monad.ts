export class Maybe<T> {
  static just<R>(a: R): Maybe<R> {
    return new Just<R>(a);
  }
  get value(): T {
    throw new Error('This getter should never get called!');
  }

  static nothing<R>(): Maybe<R> {
    return new Nothing<R>();
  }

  static fromNullable<R>(a: R): Maybe<R> {
    return a !== null && a !== undefined ? Maybe.just(a) : Maybe.nothing<R>();
  }

  static of<R>(a: R): Maybe<R> {
    return Maybe.just(a);
  }

  get isNothing() {
    return false;
  }

  get isJust() {
    return false;
  }

  getOrElse(other): T {
    throw new Error('This method should never be called!');
  }

  map<R>(f: (x: T) => R): Maybe<R> {
    throw new Error('This method should never be called!');
  }

  filter(f: (x: T) => boolean): Maybe<T> {
    throw new Error('This method should never be called!');
  }

  chain<R>(f: (x: T) => Maybe<R>): Maybe<R> {
    throw new Error('This method should never be called!');
  }
}

class Just<T> extends Maybe<T> {
  private _value: T;

  constructor(value) {
    super();
    this._value = value;
  }

  get isJust() {
    return true;
  }

  get value(): T {
    return this._value;
  }

  map<R>(f: (x: T) => R): Maybe<R> {
    return Maybe.fromNullable<R>(f(this._value));
  }

  getOrElse(other) {
    return this._value;
  }

  filter(f: (x: T) => boolean): Maybe<T> {
    return Maybe.fromNullable<T>(f(this._value) ? this._value : null);
  }

  chain<R>(f: (x: T) => Maybe<R>): Maybe<R> {
    return f(this.value);
  }
}

class Nothing<T> extends Maybe<T> {
  get isNothing() {
    return true;
  }
  map<R>(f: (x: T) => R): Maybe<R> {
    return Maybe.nothing<R>();
  }
  get value(): T {
    throw new TypeError(`Can't extract the value of a Nothing.`);
  }

  getOrElse(other) {
    return other;
  }

  filter(f: (x: T) => boolean): Maybe<T> {
    return Maybe.nothing<T>();
  }

  chain<R>(f: (x: T) => Maybe<R>): Maybe<R> {
    return Maybe.nothing<R>();
  }
}
