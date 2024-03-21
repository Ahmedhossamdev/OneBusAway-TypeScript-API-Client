import { ApiResponse, References } from '../../common/api-repsonse';

export interface IAgenciesWithCoverageResponse extends ApiResponse {
  data: {
    limitExceeded: boolean;
    list: IAgencyWithCoverage[];
    references: References;
  };
}

export interface IAgencyWithCoverage {
  agencyId: string;
  lat: number;
  latSpan: number;
  lon: number;
  lonSpan: number;
}
