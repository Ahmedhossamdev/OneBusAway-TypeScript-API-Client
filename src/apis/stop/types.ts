import { IReferences, ApiResponse } from 'src/utlis/api-repsonse';

export interface IStopResponse extends ApiResponse {
  data: {
    entry: IStopEntry;
    references: IReferences;
  };
}

export interface IStopEntry {
  code: string;
  direction: string;
  id: string;
  lat: number;
  locationType: number;
  lon: number;
  name: string;
  parent: string;
  routeIds: string[];
  staticRouteIds: string[];
  wheelchairBoarding: string;
}

export interface IRouteEntry {
  agencyId: string;
  color: string;
  description: string;
  id: string;
  longName: string | null;
  nullSafeShortName: string;
  shortName: string;
  textColor: string;
  type: number;
  url: string;
}
