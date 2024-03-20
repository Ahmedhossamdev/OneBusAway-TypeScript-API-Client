import { AgencyEntry } from '../apis/agency/agencyTypes';
import { RouteEntry, StopEntry } from '../apis/stop/stopTypes';

export interface ApiResponse {
  text?: string;
  version?: number;
  code?: number;
  currentTime?: number;
}

export interface References {
  agencies: AgencyEntry[];
  routes: RouteEntry[];
  situations: any[];
  stopTimes: any[];
  stops: StopEntry[];
  trips: any[];
}
