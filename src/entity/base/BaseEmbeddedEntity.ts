export class BaseEmbeddedEntity<T> {
  static create<T>(props: T) {
    return new this(props);
  }

  constructor(props: T) {
    Object.assign(this, props)
  }
}
