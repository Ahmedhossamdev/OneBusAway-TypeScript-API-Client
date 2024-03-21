import { ApiResponse, References } from 'src/common/api-repsonse';

export interface ITripResponse extends ApiResponse {
  data: {
    entry: ITripEntry;
    references: References;
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
