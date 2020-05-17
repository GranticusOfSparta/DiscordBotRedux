export class Try<T> {
  protected _val: T;

  get value() {
    return this._val;
  }

  get isFailure(): boolean {
    throw new Error('Implement in subclass!');
  }

  get isSuccess(): boolean {
    throw new Error('Implement in subsclass!');
  }

  constructor(val) {
    this._val = val;
  }

  static of<U>(fn: () => U) {
    try {
      return new Success<U>(fn());
    } catch (error) {
      return new Failure<U>(error);
    }
  }

  static success<U>(val: U = null): Try<U> {
    return new Success<U>(val);
  }

  static fail<U>(val: U = null): Try<U> {
    return new Failure<U>(val);
  }

  map<U>(fn: (any) => U): Try<U> {
    return Try.of(() => fn(this._val));
  }

  onFail(fn: (any) => void): Try<T> {
    return this;
  }

  getOrElse(fallback: T): T {
    return this._val;
  }
}

class Success<T> extends Try<T> {
  get isSuccess() {
    return true;
  }
  get isFailure() {
    return false;
  }
  getOrElse(fallback: T) {
    return this._val;
  }

  getOrElseThrow() {
    return this._val;
  }

  onFail(fn: (any) => void): Try<T> {
    return this;
  }
}

class Failure<T> extends Try<T> {
  get isSuccess() {
    return false;
  }
  get isFailure() {
    return true;
  }
  map<U>(fn: (any) => U): Try<U> {
    return new Failure<U>(this.value);
  }
  getOrElse(fallback: T) {
    return fallback;
  }
  getOrElseThrow() {
    if (this._val !== null) {
      throw this._val;
    }
  }
  onFail(fn: (any) => void): Try<T> {
    fn(this._val);
    return this;
  }
}
