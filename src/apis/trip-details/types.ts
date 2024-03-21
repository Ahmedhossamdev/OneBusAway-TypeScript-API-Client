import { ILocation, References } from 'src/common/api-repsonse';

export interface ITripDetailsResponse {
  data: {
    entry: ITripDetailsEntry;
    references: References;
  };
}

export interface ITripStopTime {
  arrivalTime: number;
  departureTime: number;
  stopId: string;
  distanceAlongTrip: number;
  historicalOccupancy: string;
  stopHeadsign: string;
}

export interface ISchedule {
  timeZone: string;
  stopTimes: ITripStopTime[];
  previousTripId: string;
  nextTripId: string;
}

export interface ITripDetailsEntry {
  tripId: string;
  serviceDate: number;
  frequency: any;
  status: any;
  schedule: ISchedule;
  situationIds: string[];
}

export interface IStatus {
  activeTripId: string;
  blockTripSequence: number;
  closestStop: string;
  closestStopTimeOffset: number;
  distanceAlongTrip: number;
  frequency: null;
  lastKnownDistanceAlongTrip: number;
  lastKnownLocation: ILocation;
  lastKnownOrientation: number;
  lastLocationUpdateTime: number;
  lastUpdateTime: number;
  nextStop: string;
  nextStopTimeOffset: number;
  occupancyCapacity: number;
  occupancyCount: number;
  occupancyStatus: string;
  orientation: number;
  phase: string;
  position: ILocation;
  predicted: boolean;
  scheduleDeviation: number;
  scheduledDistanceAlongTrip: number;
  serviceDate: number;
  situationIds: string[];
  status: string;
  totalDistanceAlongTrip: number;
  vehicleId: string;
}
