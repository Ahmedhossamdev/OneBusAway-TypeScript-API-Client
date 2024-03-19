import axios from 'axios';
import { AgenciesWithCoverageResponse, AgencyWithCoverage } from './coverageTypes';

export class AgencyWithCoverageApi {
  private readonly apiUrl: string;
  private readonly apiKey: string;

  constructor(apiUrl: string, apiKey: string) {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
  }

  async getAgenciesWithCoverage(): Promise<AgenciesWithCoverageResponse> {
    const url = `${this.apiUrl}.json?key=${this.apiKey}`;

    const response = await axios.get(url);

    const data = response.data;

    const flattenedList: AgencyWithCoverage[] = data.data.list.flat();

    const processedList: AgencyWithCoverage[] = flattenedList.map((item: any) => {
      return {
        agencyId: item.agencyId,
        lat: item.lat,
        latSpan: item.latSpan,
        lon: item.lon,
        lonSpan: item.lonSpan,
      };
    });

    data.data.list = processedList;

    return data;
  }
}
