import { AgencyApi } from './agency/v2';
import { AgencyWithCoverageApi } from './agencywithcoverage/v2';
import { StopApi } from './stop/v2';

export class OneBusAwayAPIClient {
  public agency: AgencyApi;
  public agencyWithCoverage: AgencyWithCoverageApi;
  public stop: StopApi;

  constructor(apiKey: string, region: string) {
    const agencyUrl = `https://api.${region}.onebusaway.org/api/where/agency`;
    const agencyWithCoverageUrl = `https://api.${region}.onebusaway.org/api/where/agencies-with-coverage`;
    const stopUrl = `https://api.${region}.onebusaway.org/api/where/stop`;

    this.agency = new AgencyApi(agencyUrl, apiKey);
    this.agencyWithCoverage = new AgencyWithCoverageApi(agencyWithCoverageUrl, apiKey);
    this.stop = new StopApi(stopUrl, apiKey);
  }
}
