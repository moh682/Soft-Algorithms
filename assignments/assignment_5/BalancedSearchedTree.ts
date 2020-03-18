
interface node {
  level: number;
  value: number | string;
  parentIndex: number;
  childIndex?: {
    i1?: number;
    i2?: number;
    i3?: number;
  };
}

export class BalancedSearchTree {

  private array: number[] | string[];

  constructor(array: number[] | string[]) {
    this.array = array;
  }

  public twoThreeSort() {



  }

  public redBlackSort() {

  }

  public avlTreeSort() {

  }

  public twoThreeSearch(value: number | string) {

  }

  public redBlackSearch(value: number | string) {

  }

  public avlTreeSearch(value: number | string) {

  }

}