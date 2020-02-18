import * as fs from 'fs';
import { UnionFind } from './UnionFind';

(async () => {
  const smallFile: string = await fs.readFileSync(__dirname + '/resources/tinyUF.txt', 'utf8');
  const size: number = Number(smallFile.split("\n")[0]);
  let values: number[][] = smallFile.split("\n").map(
    (value) => {
      if (!/\s/.test(value)) return undefined;
      if (value === "") return undefined;
      const value1 = value.split(' ')[0];
      const value2 = value.split(' ')[1];
      return [Number(value1), Number(value2)];
    })
  values = values.filter(v => v !== undefined)

  // Runs the union find
  let unionFind = new UnionFind(size, values);
  unionFind.run();

})();