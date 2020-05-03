/**
 * ? DATA:
 * --	Routes:
 * -- 	Airline_code;
 * --		Source_code;
 * --		Destination_code;
 * --		Distance;
 * --		Time;
 * ?	Airports:
 * !		Code;
 * !		Name;
 * !		Country;
 * !		Latitude;
 * !		Longitude;
 * ? 	Airlines:
 * --		Code;
 * --		Name;
 * --		Country;
 * ?	Aircrafts:
 * !		Code;
 * !		Name;
 * !		Category;
 */

class Route {
  public airline: string = undefined;
  public source: string = undefined;
  public destination: string = undefined;
  public distance: number = undefined;
  public time: number = undefined;

  constructor(airline: string, source: string, destination: string, distance: number, time: number) {
    this.airline = airline;
    this.source = source;
    this.destination = destination;
    this.distance = distance;
    this.time = time;
  }
}

class Airport {
  private name: string = undefined;
  private code: string = undefined;
  private country: string = undefined;
  private longitude: string = undefined;
  private latitude: string = undefined;
  private routes: Map<string, Route> = new Map();

  constructor(name: string, code: string, country: string, longitude: string, latitude: string) {
    this.name = name;
    this.code = code;
    this.country = country;
    this.longitude = longitude;
    this.latitude = latitude;
  }

  public addRoute = (code: string, route: Route): void => {
    this.routes.set(code, route);
  };
  public getRoutes = (): IterableIterator<Route> => {
    return this.routes.values();
  };
  public setName = (name): void => {
    this.name = name;
  };
  public setCode = (code): void => {
    this.code = code;
  };
  public setCountry = (country): void => {
    this.country = country;
  };
  public setLongitude = (longitude): void => {
    this.longitude = longitude;
  };
  public setlatitude = (latitude): void => {
    this.latitude = latitude;
  };
  public getLongitude = (): string => {
    return this.longitude;
  };
  public getlatitude = (): string => {
    return this.latitude;
  };
  public getName = (): string => {
    return this.name;
  };
  public getCode = (): string => {
    return this.code;
  };
  public getCountry = (): string => {
    return this.country;
  };
}

export { Airport, Route };
