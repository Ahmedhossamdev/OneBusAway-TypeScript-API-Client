import { AgencyApiClient } from './AgencyApi/AgencyApi';
import { AgencyApiWithCoverage } from './AgencyWithCoverageApi/AgencyWithCoverageApi';

export class OneBusAwayAPIClient {
  public agency: AgencyApiClient;
  public agencyWithCoverage: AgencyApiWithCoverage;
  // By default, the output format is 'json'
  constructor(apiKey: string, outputFormat: string = 'json') {
    this.agency = new AgencyApiClient(apiKey, outputFormat);
    this.agencyWithCoverage = new AgencyApiWithCoverage(apiKey, outputFormat);
  }
}
