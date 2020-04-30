import { LinkedList } from './LinkedList';

function start() {
  const ll = new LinkedList(['a', 'b', 'c', 'd']);
  console.log(ll);
  ll.print();
  const last = ll.getLast();
  console.log(last);
  ll.addFirst('aa');
  ll.print();
  ll.addLast('dd');
  ll.print();
}
start();
