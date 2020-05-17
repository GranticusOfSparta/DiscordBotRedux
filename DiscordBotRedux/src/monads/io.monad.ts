export class IO<T = void> {
  private constructor(private effect: () => T) {}

  static of<V>(a: V) {
    return new IO(() => a);
  }

  static from<V>(fn: () => V) {
    return new IO(fn);
  }

  map<V>(fn: (args: T) => V) {
    const self = this;
    return new IO(() => fn(self.effect()));
  }

  chain<V>(fn: (args: T) => V) {
    return fn(this.effect());
  }

  run() {
    return this.effect();
  }
}
