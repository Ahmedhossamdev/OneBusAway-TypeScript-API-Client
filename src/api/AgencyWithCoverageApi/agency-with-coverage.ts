import axios from 'axios';
import { AgenciesWithCoverageResponse, AgencyWithCoverage } from './agency-with-coverage-interfaces';

export class AgencyApiWithCoverage {
  private readonly apiUrl: string;
  private readonly apiKey: string;

  constructor(apiKey: string) {
    this.apiUrl = 'https://api.pugetsound.onebusaway.org/api/where/agencies-with-coverage';
    this.apiKey = apiKey;
  }
  async getAgenciesWithCoverage(): Promise<AgenciesWithCoverageResponse> {
    const url = `${this.apiUrl}.json?key=${this.apiKey}`;

    let data = null;

    const response = await axios.get(url);

    if (response.status === 404) {
      data = response.data;
    }

    data = response.data;

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
