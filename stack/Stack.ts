interface IStack<T> {
  push(element: T): void
  pop(): T;
  top(): T;
  isEmpty(): boolean;
  length(): number;
}

export class Stack<T> implements IStack<T> {
  #store: T[] = [];

  push(el: any) {
    this.#store.push(el);
  }

  pop(): T {
    const el = this.#store.pop();

    if (el === undefined) {
      throw new Error('Stack is empty');
    }

    return el;
  }

  top(): T {
    const el = this.#store.at(-1);

    if (el === undefined) {
      throw new Error('Stack is empty');
    }

    return el;
  }

  isEmpty(): boolean {
    return !this.#store.length;
  }

  length(): number {
    return this.#store.length;
  }
}
