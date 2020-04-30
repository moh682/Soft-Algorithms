import { Char } from './Interfaces';
import { modes } from 'react-transition-group/SwitchTransition';

class Node {
  public sub: string = undefined;
  public childNodes: Node[] = [];
}

class SuffixTree {
  private node: Node;

  public constructor() {
    this.node = new Node();
  }

  // ? loop the letters in the string
  // ? if the letter exist continue
  // ? else add the letter the its parent letter
  // ? repeat
  // ? In the end add $ sign

  public add(str: string, node?: Node): void {
    if (!node) node = this.node;

    // if (node.childNodes.length === 0) {
    //   const temp = new Node();
    //   temp.sub = str;
    //   node.childNodes.push(temp);
    //   return;
    // }

    let letterIndex = 0;
    let n = 0;
    let newNode: Node = this.node;
    while (letterIndex < str.length) {
      const letter = str[letterIndex];

      const temp = new Node();
      temp.sub = letter;
      newNode.childNodes.push(temp);
      newNode = temp;

      // if(node.childNodes.length === 0) {
      // 	const temp = new Node();
      // 	temp.sub = letter;
      // }

      // for (let childrenIndex = 0; childrenIndex < node.childNodes.length; childrenIndex++) {
      //   let s = node.childNodes[childrenIndex];
      //   if (s.sub === letter) {
      //   }
      // }
      letterIndex++;
    }

    // while (i < str.length) {
    //   const letter : Char = str[i] as Char;
    // 	const children = this.nodes[i].childNodes;
    // 	while(n2.childNodes.length !== 0){
    // 		for (let j = 0; j < children.length; j++) {
    // 			const node = children[j];
    // 			if(node.sub === )

    // 		}
    // 	}
    // 	i++;
    // }
  }

  /**
   * ? Check for the string in the children of the node
   * @param node Node that have children we are checking in
   * @param str String that needs to be compared
   * @return If value exist return index else return undefined
   */
  private checkNodeInChildren(node: Node, str: string): number {
    const children = node.childNodes;
    if (children.length === 0) return undefined; // ? If nothing is inside the array return undefined
    for (let i = 0; i < children.length; i++) {
      if (children[i].sub === str) return i;
    }
    return undefined; // ? No Nodes are equal str
  }

  public visualize(): void {
    if (this.node.childNodes.length === 0) {
      console.log('<empty>');
      return;
    }
    this.visualize_f();
  }

  private visualize_f(node?: Node): void {
    if (!node) {
    }
    const children = node?.childNodes || this.node.childNodes;
    if (children.length > 0) {
      console.log('└─');
      let i = 0;
      while (i < children.length) {
        if (i === 0) {
          console.log('| ' + children[i].sub);
          continue;
        } else {
        }
        i++;
      }

      for (let i = 0; i < children.length; i++) {
        node = children[i];
        this.visualize_f(node);
        return;
      }
    }
  }

  // System.out.print(pre + "└─");
  // visualize_f(children.get(children.size() - 1), pre + "  ");
  // System.out.print(pre + "├─");
  // 		visualize_f(c, pre + "│ ");
}

// find the first node
// Check next index if the char exist
// if exist move to next else save the char
// repeat
// end with '$'

const content = ['bear', 'bell', 'bid', 'bull', 'buy', 'sell', 'stock', 'stop'];

const suffix = new SuffixTree();
suffix.add(content[0]);

suffix.visualize();
