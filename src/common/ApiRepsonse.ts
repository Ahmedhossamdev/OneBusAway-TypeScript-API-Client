import { AgencyEntry, AgencyResponse } from '../api/AgencyApi/agency-interfaces';

export interface ApiResponse {
  text: string;
  version: number;
  code: number;
  currentTime: number;
}

export interface References {
  agencies: AgencyEntry[];
  routes: any[];
  situations: any[];
  stopTimes: any[];
  stops: any[];
  trips: any[];
}
