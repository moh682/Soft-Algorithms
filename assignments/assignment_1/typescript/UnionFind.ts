class Node {
  public parent: Node;
  public value: number;
  public child: Node;
}

// Default UnionFind
export class UnionFindDefault {
  private array: number[] = [];
  private unions: number = 0;

  public constructor(ar: number[]) {
    for (let i = 0; i < ar.length; i++) {
      this.array[i] = ar[i];
      this.unions++;
    }
  }

  public union(point1: number, point2: number): void {
    const v1 = this.array[point1];
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === this.array[point2]) {
        this.array[i] = v1;
      }
    }
    this.unions--;
  }

  public findIndex(number: number): number {
    let index: number;
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === number) {
        index = i;
        break;
      }
    }
    if (index) return index;
  }

  public connected(p: number, q: number): boolean {
    return this.array[p] === this.array[q];
  }

  public getUnions(): number {
    return this.unions;
  }

  public print(): void {
    console.log('array: ', this.array);
    console.log('unions: ', this.unions);
  }
}

export class UnionFindUpdated {
  private array: Node[] = [];
  private unions: number = 0;

  constructor(array: number[]) {
    for (let i = 0; i < array.length; i++) {
      const node: Node = new Node();
      this.array.push(node);
    }
  }

  public getRootOf(n: Node): Node {
    let hasParent: boolean = true;
    let node = n;
    while (hasParent) {
      if (node.parent === undefined) {
        hasParent = false;
        break;
      } else {
        node = node.parent;
      }
    }
    return node;
  }

  public connected(p: number, q: number): boolean {
    return this.array[p] === this.array[q];
  }

  public getUnions(): number {
    return this.unions;
  }

  public print(): void {
    console.log('array: ', this.array);
    console.log('unions: ', this.unions);
  }
}
