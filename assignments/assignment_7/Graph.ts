// ? This is an api for an undirected graph

import { Airport, Route } from './Node';

interface Graph {
  getNumberOfAirports: () => number;
  addRoute: (airline: string, source: string, destination: string, distance: number, time: number) => void;
  addAirport: (airport: Airport) => void;
  print: () => void;
  getAirport: (code: string) => Airport;
  getNumberOfRoutes: () => number;
  isConnectedViaAirlineDFS: (source: string, destination: string, airline: string, visited?: Set<string>) => boolean;
  isConnectedViaAirlineBFS: (source: string, destination: string, airline: string) => boolean;
  getConnectedRoutesToAirport: (source: string) => IterableIterator<Route>;
}

class Graph implements Graph {
  private airports: Map<string, Airport> = undefined;
  private size: number = 0;
  private routes: number = 0;
  constructor(airports?: Array<Airport>) {
    this.airports = new Map();
    if (!airports) return;
    for (let i = 0; i < airports.length; i++) {
      this.airports.set(airports[i].getCode(), airports[i]);
    }
  }
}

Graph.prototype.getNumberOfAirports = function (): number {
  return this.size;
};

Graph.prototype.print = function (): void {
  console.log(this.airports);
};

Graph.prototype.addRoute = function (
  airline: string,
  source: string,
  destination: string,
  distance: number,
  time: number,
): void {
  const routeSource: Route = new Route(airline, source, destination, distance, time);
  const routeDestination: Route = new Route(airline, destination, source, distance, time);
  const airportSource: Airport = this.airports.get(source);
  const airportDestination: Airport = this.airports.get(destination);
  airportSource.addRoute(airline + destination, routeSource);
  airportDestination.addRoute(airline + source, routeDestination);
  this.routes++;
};

Graph.prototype.isConnectedViaAirlineDFS = function (
  source: string,
  destination: string,
  airline: string,
  visited = new Set(),
): boolean {
  visited.add(source);
  let isConnected = false;
  let airport: Airport = this.airports.get(source);
  for (const route of airport.getRoutes()) {
    if (airline === route.airline) {
      console.log(route);
      if (destination === route.destination) {
        isConnected = true;
        break;
      }
      if (!visited.has(route.destination)) {
        this.isConnectedViaAirlineDFS(route.destination, destination, airline, visited);
      }
    }
  }
  return isConnected;
};

Graph.prototype.isConnectedViaAirlineBFS = function (source: string, destination: string, airline: string): boolean {
  const visited = new Set<string>();
  const queue = [source];

  while (queue.length > 0) {
    const airport: Airport = this.airports.get(queue.shift());
    let isConnected: boolean = false;
    for (const route of airport.getRoutes()) {
      if (airline === route.airline) {
        console.log(route);
        if (destination === route.destination) {
          isConnected = true;
          break;
        }
        if (!visited.has(route.destination)) {
          visited.add(route.destination);
          queue.push(route.destination);
        }
      }
    }
    return true;
  }
};

Graph.prototype.getConnectedRoutesToAirport = function (code: string): IterableIterator<Route> {
  const airport: Airport = this.airports.get(code);
  return airport.getRoutes();
};

Graph.prototype.addAirport = function (airport: Airport): void {
  this.airports.set(airport.getCode(), airport);
  this.size++;
};
Graph.prototype.getNumberOfRoutes = function (): number {
  return this.routes;
};

Graph.prototype.getAirport = function (code: string): Airport {
  return this.airports.get(code);
};

export { Graph };
