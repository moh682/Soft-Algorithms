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

class Airport {
  private name: string = undefined;
  private code: string = undefined;
  private country: string = undefined;
  private longitude: string = undefined;
  private latitude: string = undefined;
  private routes: Map<string, Airport> = new Map();

  constructor(name: string, code: string, country: string, longitude: string, latitude: string) {
    this.name = name;
    this.code = code;
    this.country = country;
    this.longitude = longitude;
    this.latitude = latitude;
  }

  public addRoute = (airport: Airport): void => {
    this.routes.set(airport.code, airport);
  };
  public getRoutes = (): Map<string, Airport> => {
    return this.routes;
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

export { Airport };
