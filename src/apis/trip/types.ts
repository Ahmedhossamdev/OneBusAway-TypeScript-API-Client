import { IReferences, ApiResponse } from 'src/utlis/api-repsonse';

export interface ITripResponse extends ApiResponse {
  data: {
    entry: ITripEntry;
    references: IReferences;
  };
}

export interface ITripEntry {
  blockId: string;
  directionId: string;
  id: string;
  peakOffpeak: number;
  routeId: string;
  routeShortName: string;
  serviceId: string;
  shapeId: string;
  timeZone: string;
  tripHeadsign: string;
  tripShortName: string;
}
