import { ApiResponse, References } from '../../common/api-repsonse';

export interface StopResponse extends ApiResponse {
  data: {
    entry: StopEntry;
    references: References;
  };
}

export interface StopEntry {
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

export interface RouteEntry {
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
