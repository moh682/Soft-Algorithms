// ? This is an api for an undirected graph

import { Airport } from './Node';

interface Graph {
  getNumberOfAirports: () => number;
  addRoute: (v: Airport, w: Airport) => void;
}

class Graph implements Graph {
  private airports: Map<string, Airport> = undefined;
  private size: number = 0;
  private routes: number = 0;
  constructor(airports?: Array<Airport>) {
    if (!airports) this.airports = new Map();
    this.airports = new Map();
    for (let i = 0; i < airports.length; i++) {
      this.airports.set(airports[i].getCode(), airports[i]);
    }
  }
}

Graph.prototype.addRoute = function (v: Airport, w: Airport): void {
  const airportV: Airport = this.airports.get(v.getCode());
  const airportW: Airport = this.airports.get(w.getCode());
  airportV.addRoute(airportW);
  airportW.addRoute(airportV);
};
