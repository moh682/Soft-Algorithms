interface Queue<T> {
  enqueue: (item: T) => void;
  dequeue: () => void;
  isEmpty: () => boolean;
  getSize: () => number;
}

class Queue<T> {
  private queue: Array<T> = [];
  private size: number = 0;
  constructor(list?: Array<T>) {
    if (list) {
      for (let i = 0; i < list.length; i++) {
        this.enqueue(list[i]);
      }
    }
  }
  [Symbol.iterator]() {
    return this.queue.values();
  }
}

Queue.prototype.enqueue = function <T>(item: T): void {};
