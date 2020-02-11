// import * as fs from 'fs';

interface IUnionFind {
  union(p: number, q: number): void;
  find(p: number): number;
  connected(p: number, q: number): boolean;
  count(): number;
}

class UnionFind implements IUnionFind {
  private pointSets: number[] = [];
  private _count: number = undefined;

  public constructor(n: number) {
    this._count = n;
    for (let i = 0; i < n; i++) {
      this.pointSets[i] = i
    }
  }

  public union(p: number, q: number): void {
    const p_value = this.find(p);
    const q_value = this.find(q);
    this.pointSets[q] = this.pointSets[p];
    for (let i: number = 0; i < this.pointSets.length; i++) {
      if (this.find[i] === p_value) {
        this.pointSets[i] = q_value;
      }
      this._count--;
    }
  }

  public find(p: number): number {
    return this.pointSets[p]
  }

  public connected(p: number, q: number): boolean {
    return this.find(p) === this.find(q);
  }


  public count(): number {
    return this._count;
  }

  public printArray(): string {
    return `array: ${this.pointSets}`;
  }
}

(async () => {
  // const smallFile: string = await fs.readFileSync(__dirname + '/resources/tinyUF.txt', 'utf8');
  // const array = smallFile.split(/\s/);
  // array.pop();
  // try {
  //   var numbers = array.map(n => Number(n));
  // } catch (ex) {
  // }

  let unionFind = new UnionFind(10);

  await unionFind.union(4, 1);
  console.log(unionFind.printArray());
  await unionFind.union(2, 3);
  console.log(unionFind.printArray());
  await unionFind.union(1, 4);
  console.log(unionFind.printArray());
  await unionFind.union(1, 9);
  console.log(unionFind.printArray());
  await unionFind.union(5, 3);
  console.log(unionFind.printArray());
  await unionFind.union(7, 6);
  console.log(unionFind.printArray());
  await unionFind.union(0, 2);
  console.log(unionFind.printArray());
  await unionFind.union(5, 4);
  console.log(unionFind.printArray());
})();