
import * as colors from 'colors';

interface IUnionFind {
  union(p: number, q: number): void;
  find(p: number): number;
  connected(p: number, q: number): boolean;
  count(): number;
}

export class UnionFind implements IUnionFind {
  private pointSets: number[] = [];
  private sizeOfUnion: number = undefined;
  private valuesToUnify: number[][] = undefined;


  public constructor(sizeOfUnion: number, valuesAsArray: number[][]) {

    console.log(`size: ${colors.green(String(sizeOfUnion))}`);
    console.log(`Times to unify: ${colors.green(String(valuesAsArray.length))}`)

    this.sizeOfUnion = sizeOfUnion;
    this.valuesToUnify = valuesAsArray;
    for (let i = 0; i < sizeOfUnion; i++) {
      this.pointSets[i] = i
    }
  }

  public run(): void {
    console.time();

    for (let i = 0; i < this.valuesToUnify.length; i++) {
      this.union(this.valuesToUnify[i][0], this.valuesToUnify[i][1]);
    }

    console.table(this.pointSets)
    console.timeEnd()
  }

  // Unify point2 to point1
  public union(point1: number, point2: number): void {
    const p1 = this.find(point1);
    const p2 = this.find(point2)
    for (let i = 0; i < this.sizeOfUnion; i++) {
      if (this.find(i) === p2) this.pointSets[i] = p1;
    }
  }

  public find(index: number): number {
    return this.pointSets[index]
  }

  public connected(p: number, q: number): boolean {
    return this.find(p) === this.find(q);
  }

  public count(): number {
    return this.sizeOfUnion;
  }

  public printArray(): string {
    return `array: ${this.pointSets}`;
  }
}