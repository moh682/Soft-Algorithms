// ? This is an api for an undirected graph
export class Graph {
  constructor(vertices: number) {}

  public getNumberOfVertices(): number {}
  public getNumberOfEdges(): number {}

  public addEdge(v1: number, v2: number): void {}
  public getAllConnectionsTo(v: number): int[] {}
  public toString(): void {}
}
