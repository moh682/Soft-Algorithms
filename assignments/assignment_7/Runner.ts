import { Graph } from './Graph';
import { readFileSync } from 'fs';
import { Airport, Route } from './Node';

const graph = new Graph();
function getData() {
  const airportData = readFileSync(__dirname + '/data/airports.txt', 'utf8');
  const routesData = readFileSync(__dirname + '/data/routes.txt', 'utf8');
  airportData.split('\n').forEach(string => {
    const data = string.split(';');
    const airport: Airport = new Airport(data[1], data[0], data[2], data[3], data[4]);
    graph.addAirport(airport);
  });
  console.log(graph.getNumberOfAirports());
  routesData.split('\n').forEach(string => {
    const data: any[] = string.split(';');
    graph.addRoute(data[0], data[1], data[2], data[3], data[4]);
  });
  console.log(graph.getNumberOfRoutes());
}
function start() {
  getData();
  console.log(graph.isConnectedViaAirlineDFS('OSS', 'FRU', 'QH'));
  // console.log(graph.isConnectedViaAirlineBFS('OSS', 'FRU', 'QH'));
  // console.log(graph.getConnectedRoutesToAirport('OSS'));
}
start();
