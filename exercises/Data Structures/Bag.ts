interface Bag<T> {
  add: (item: T) => void;
  isEmpty: () => boolean;
  getSize: () => number;
}

class Bag<T> {
  private bag: Array<T> = [];
  private size: number = 0;
  constructor(list?: Array<T>) {
    if (list) {
      for (let i = 0; i < list.length; i++) {
        this.add(list[i]);
      }
    }
  }
  [Symbol.iterator]() {
    return this.bag.values();
  }
}

Bag.prototype.add = function <T>(item: T): void {
  this.size++;
  this.bag.push(item);
};

Bag.prototype.isEmpty = function (): boolean {
  return this.bag.length > 0 ? false : true;
};

Bag.prototype.getSize = function (): number {
  return this.size;
};

export { Bag };
