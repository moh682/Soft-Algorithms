/**
 * ? Linked list: is a recursive data structure that is either empty or a reference to a node having a generic item and reference to a linked list
 * ? Node: is an abstract entity that might hold any kind of data
 *
 * ? Why use LinkedList: Because adding to the start and the end can be log(1) since we are not looping over an Array
 */
class Node<T> {
  private item: T = undefined;
  private next: Node<T> = undefined;
  public constructor(item?: T) {
    this.item = item;
  }
  public setItem(item: T) {
    this.item = item;
  }
  public getItem(): T {
    return this.item;
  }
  public setNextNode(node: Node<T>) {
    this.next = node;
  }
  public getNextNode(): Node<T> {
    return this.next;
  }
}

interface LinkedList<T> {
  rootNode: Node<T>;
  size: number;
  getLast: () => Node<T>;
  getFirst: () => Node<T>;
  addLast: (data: T) => void;
  addFirst: (add: T) => void;
  removeFirst: () => void;
  removeLast: () => void;
  getSize: () => number;
  print: () => void;
  toArray: () => T[];
}

class LinkedList<T> {
  public rootNode: Node<T> = undefined;
  public size: number = 0;

  constructor(list?: T[]) {
    let i = list.length - 1;
    while (i >= 0) {
      this.addFirst(list[i]);
      i--;
    }
  }
}

LinkedList.prototype.toArray = function <T>(): T[] {
  const arr: T[] = [];
  let node: Node<any> = this.rootNode;
  while (node !== undefined) {
    arr.push(node.getItem());
    node = node.getNextNode();
  }
  return arr;
};

LinkedList.prototype.getSize = function (): number {
  return this.size;
};

LinkedList.prototype.getLast = function <T>(): Node<T> {
  let node: Node<any> = this.rootNode;
  while (node !== undefined) {
    if (node.getNextNode() === undefined) break;
    node = node.getNextNode();
  }
  return node;
};

LinkedList.prototype.getFirst = function <T>(): Node<T> {
  return this.rootNode;
};

LinkedList.prototype.addLast = function (data): void {
  this.size++;
  let currentNode: Node<any> = this.rootNode;
  let previousNode: Node<any> = undefined;

  while (currentNode !== undefined) {
    if (currentNode.getNextNode() === undefined) {
      const node = new Node(data);
      currentNode.setNextNode(node);
      break;
    }
    previousNode = currentNode;
    currentNode = currentNode.getNextNode();
  }
};

LinkedList.prototype.addFirst = function (data): void {
  this.size++;
  let first = this.rootNode;
  if (first === undefined) {
    this.rootNode = new Node(data);
    return;
  } else {
    let temp = new Node(data);
    temp.setNextNode(first);
    this.rootNode = temp;
  }
};

LinkedList.prototype.removeFirst = function (): void {
  const first = this.rootNode;
  const second = first.getNextNode();
  this.rootNode = second;
};

LinkedList.prototype.print = function (): void {
  let node: Node<any> = this.rootNode;
  console.log(this.rootNode);
  console.log('size:', this.size);
  while (node !== undefined) {
    console.log(node.getItem());
    node = node.getNextNode();
  }
};

export { LinkedList };
