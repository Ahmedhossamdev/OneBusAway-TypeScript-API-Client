import { AgencyApiClient } from './AgencyApi/AgencyApi';
import { AgencyApiWithCoverage } from './AgencyWithCoverageApi/AgencyWithCoverageApi';

export class OneBusAwayAPIClient {
  public agency: AgencyApiClient;
  public agencyWithCoverage: AgencyApiWithCoverage;

  constructor(apiKey: string) {
    this.agency = new AgencyApiClient(apiKey);
    this.agencyWithCoverage = new AgencyApiWithCoverage(apiKey);
  }
}
