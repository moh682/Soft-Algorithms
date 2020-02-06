// const dots = [
//   10,
//   4, 3,
//   3, 8,
//   6, 5,
//   9, 4,
//   2, 1,
//   8, 9,
//   5, 0,
//   7, 2,
//   6, 1,
//   1, 0,
//   6, 7,
// ]

// interface IUnionFind {
//   union(p: number, q: number): void;
//   find(p: number): number;
//   connected(p: number, q: number): boolean;
//   count(): number;
// }

// class UnionFind implements IUnionFind {
//   private _count: number;
//   private pointSets: number[];
//   public constructor(count: number) {
//     this._count = count;
//     this.pointSets = [];
//     for (let i = 0; i < count; i++) { this.pointSets.push(n); }
//   }

//   union(p: number, q: number): void {
//     const setOfp = this.pointSets[p];
//     const setOfq = this.pointSets[q];
//     this.pointSets = this.pointSets.map((n: number, i: number) => {
//       return this.pointSets[i] === setOfp ? this.pointSets[i] = setOfq : n
//     });
//     this._count--;
//     // for (let i = 0; i < this.n; i++) {
//     //   if(this.pointSets[i] === setOfp) this.pointSets[i] = setOfq
//     // }
//   }

//   find(p: number): number {
//     return this.pointSets[p];
//   }

//   connected(p: number, q: number): boolean {
//     return this.pointSets[p] === this.pointSets[q];
//   }

//   count(): number {
//     throw new Error("Method not implemented.");
//   }
// }


const dots = [
  1, 0,
  4, 3,
  3, 8,
  6, 5,
  9, 4,
  2, 1,
  8, 9,
  5, 0,
  7, 2,
  6, 1,
  1, 0,
  6, 7,
]

interface IUnionFind {
  union(p: number, q: number): void;
  find(p: number): number;
  connected(p: number, q: number): boolean;
  count(): number;
}

class UnionFind implements IUnionFind {
  private n: number;
  private pointSets: number[];

  public constructor(n: number) {
    this.n = n;
    this.pointSets = [n];
    for (let i: number = 0; i < n; i++) this.pointSets[i] = i;

  }

  public union(p: number, q: number): void {
    let setOfp: number = this.pointSets[p];
    let setOfq: number = this.pointSets[q];
    for (let i: number = 0; i < this.pointSets.length; i++) {
      if (this.pointSets[i] == setOfp) this.pointSets[i] = setOfq;
      this.n--;
    }
  }

  public find(p: number): number {
    return this.pointSets[p];
  }

  public connected(p: number, q: number): boolean {
    return this.find(p) == this.find(q);
  }

  public count(): number {
    return this.n;
  }
}

const getTimeOfFunction = async (callback: Function) => {
  const timeNow = Date.now();
  await callback();
  return (Date.now() - timeNow);
}

// UnionFind.prototype.UnionFind(100);
let ojago = new UnionFind(100);

(async () => {
  console.log("Union = " + ojago.union(8, 10));
  console.log("Find = " + ojago.find(8));
  console.log("Connected = " + ojago.connected(1, 1));
  console.log("Count = " + ojago.count());
  console.log("Count = " + await getTimeOfFunction(() => ojago.find(8)));
})();