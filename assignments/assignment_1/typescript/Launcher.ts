import * as fs from 'fs';
import { UnionFindDefault } from './UnionFind';

// (async () => {
// 	const smallFile: string = await fs.readFileSync(__dirname + '/resources/TinyUF.txt', 'utf8'); // LargeUF MediumUF TinyUF
// 	const size: number = Number(smallFile.split('\n')[0]);
// 	let values: number[][] = smallFile.split('\n').map(value => {
// 		if (!/\s/.test(value)) return undefined;
// 		if (value === '') return undefined;
// 		const value1 = value.split(' ')[0];
// 		const value2 = value.split(' ')[1];
// 		return [Number(value1), Number(value2)];
// 	});
// 	values = values.filter(v => v !== undefined);

// 	// Runs the union find
// 	let unionFind = new UnionFind(size, values);
// 	unionFind.run();
// })();

function start() {
  const array = [1, 2, 3, 4, 5, 6, 7];

  const uf = new UnionFindDefault(array);
  uf.print();

  uf.union(1, 2);
  uf.print();
  uf.union(3, 4);
  uf.print();
  uf.union(5, 6);
  uf.print();
  uf.union(0, 2);
  uf.print();
}

start();
