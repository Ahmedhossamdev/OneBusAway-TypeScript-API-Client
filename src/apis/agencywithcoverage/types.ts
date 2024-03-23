import { IReferences, ApiResponse } from 'src/utlis/api-repsonse';

export interface IAgenciesWithCoverageResponse extends ApiResponse {
  data: {
    limitExceeded: boolean;
    list: IAgencyWithCoverage[];
    references: IReferences;
  };
}

export interface IAgencyWithCoverage {
  agencyId: string;
  lat: number;
  latSpan: number;
  lon: number;
  lonSpan: number;
}

// export interface IAgencyWithCoverage {
//   agencyID: string;
//   agency: IAgencyEntry;
//   region: {
//     center: {
//       latitude: number;
//       longitude: number;
//     };
//     span: {
//       latitudeDelta: number;
//       longitudeDelta: number;
//     };
//   };
//   regionIdentifier?: number;
// }
