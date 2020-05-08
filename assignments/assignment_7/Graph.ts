// ? This is an api for an undirected graph

import { Airport, Route } from './Node';
import { array } from 'prop-types';

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
  findShortestPathDjistra: (
    source: string,
    destination: string,
    visited?: Set<string>,
    visitedDistance?: Map<string, number>,
  ) => IterableIterator<string>;
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

Graph.prototype.findShortestPathDjistra = function (
  source: string,
  endGoal: string,
  visitedList?: Set<string>,
  distanceToVisitedList?: Map<string, number>,
): IterableIterator<string> {
  visitedList.add(source);
	if (distanceToVisitedList.size === 0) distanceToVisitedList.set(source, 0);
	
	if(source === endGoal) {
		return visitedList.values();
	}

  const airport: Airport = this.airports.get(source);

  let fastestDestination: string = undefined;
  let currentFastest: number;
  for (const route of airport.getRoutes()) {
    // get previous calculated distance
    const previousCalculatedDistance = distanceToVisitedList.get(route.destination);

    // check if we have visited the route destination before
    const hasVisited = visitedList.has(route.destination);

    // Distance calculated up till now
    const sourceDistance = distanceToVisitedList.get(source);
		let distanceFromCurrentAirport: number = sourceDistance + route.distance;
		
		if(previousCalculatedDistance) {
      // Check if current distance to the destination is faster then previous calculated distance
      if (distanceFromCurrentAirport < previousCalculatedDistance) {
        // override the previous calculated distance with the faster one
        distanceToVisitedList.set(route.destination, distanceFromCurrentAirport);
			}
		}else {
			if (!hasVisited) {
				// IF the destination was visited before
	
				// Set the combined distance to the destination airport
				distanceToVisitedList.set(route.destination, route.distance + sourceDistance);
	
				// Check if the its the first route
				if (!currentFastest) {
					// if it is the first route add the route to the fastest
					currentFastest = distanceFromCurrentAirport;
					fastestDestination = route.destination;
				} else {
					// Check if the routes are the fastest of all the routes of the airport and assign them properly
					currentFastest = distanceFromCurrentAirport < currentFastest ? distanceFromCurrentAirport : currentFastest;
					fastestDestination = distanceFromCurrentAirport < currentFastest ? route.destination : fastestDestination;
				}
		}
  }

  return this.findShortestPathDjistra(fastestDestination, endGoal, visitedList, distanceToVisitedList);

  // visited = visited || new Array<string>();
  // if(visited.length === 0) visited.push(source)
  // visitedDistance = visitedDistance || new Map().set(source, 0);
  // array.length
  // const resultRoute: Array<Route> = new Array();

  // const getShortestRoute = function (airport: Airport): [string, number] {
  //   let temp: number;
  // 	let shortestAiportName: string;
  //   for (let route of airport.getRoutes()) {
  //     temp = temp || route.distance;
  // 		shortestAiportName = shortestAiportName || route.destination;
  // 		if(visited.has(airport.getCode())){
  // 			visitedDistance[1]
  // 		}
  //     if (route.distance < temp) {
  //       temp = route.distance;
  //     }
  //   }
  //   return [shortestAiportName, temp];
  // };

  // const currentAirport = this.airports.get(source);
  // const [airportName, distance] = getShortestRoute(currentAirport);

  // if()
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
