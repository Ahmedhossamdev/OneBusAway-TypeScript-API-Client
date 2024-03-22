import { IRouteEntry, IStopEntry } from 'src/apis/stop/types';
import { IAgencyEntry } from '../apis/agency/types';
import { ITripEntry } from 'src/apis/trip/types';

export interface ApiResponse {
  text?: string;
  version?: number;
  code?: number;
  currentTime?: number;
}

export interface References {
  agencies: IAgencyEntry[];
  routes: IRouteEntry[];
  situations: any[];
  stopTimes: any[];
  stops: IStopEntry[];
  trips: ITripEntry[];
}

export interface ILocation {
  lat: number;
  lon: number;
}
