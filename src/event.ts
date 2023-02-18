
export abstract class Event<T> {
  readonly type: string
  readonly target: T
  readonly timeStamp: number = Date.now()

  constructor(element: T) {
    this.type = this.constructor.name
    this.target = element
    this.timeStamp = Date.now()
  }
}

export class ChangeEvent<T> extends Event<T> {}

export class SelectEvent<T> extends Event<T> {}

export type ChangeEventHandler<T> = { (event: ChangeEvent<T>): void }
export type SelectEventHandler<T> = { (event: SelectEvent<T>): void }