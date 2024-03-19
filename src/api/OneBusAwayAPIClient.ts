import { AgencyApiClient } from './AgencyApi/agency';
import { AgencyApiWithCoverage } from './AgencyWithCoverageApi/agency-with-coverage';

export class OneBusAwayAPIClient {
  public agency: AgencyApiClient;
  public agencyWithCoverage: AgencyApiWithCoverage;

  constructor(apiKey: string) {
    this.agency = new AgencyApiClient(apiKey);
    this.agencyWithCoverage = new AgencyApiWithCoverage(apiKey);
  }
}
