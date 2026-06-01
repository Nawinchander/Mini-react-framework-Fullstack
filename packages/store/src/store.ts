export class Store<T> {
  private state: T;
  private listeners: Function[] = [];

  constructor(initialState: T) {
    this.state = initialState;
  }

  getState() {
    return this.state;
  }

  setState(newState: Partial<T>) {
    this.state = {
      ...this.state,
      ...newState
    };

    this.listeners.forEach((listener) => listener());
  }

  subscribe(listener: Function) {
    this.listeners.push(listener);
  }
}