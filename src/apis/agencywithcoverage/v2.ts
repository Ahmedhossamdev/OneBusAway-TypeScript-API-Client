import axios from 'axios';
import { AgenciesWithCoverageResponse, AgencyWithCoverage } from './coverageTypes';
import { ApiError } from '../../utils/errorHandler';

export class AgencyWithCoverageApi {
  private readonly apiUrl: string;
  private readonly apiKey: string;

  constructor(apiUrl: string, apiKey: string) {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
  }

  async getAgenciesWithCoverage(): Promise<AgenciesWithCoverageResponse | null> {
    const url = `${this.apiUrl}.json?key=${this.apiKey}`;

    const response = await axios.get(url);
    if (response === null) {
      return null;
    }
    if (response.data?.code >= 400) {
      throw new ApiError(response.data.code, response.data.text, response.data.version, response.data.currentTime);
    }

    const flattenedList: AgencyWithCoverage[] = response.data.data.list.flat();

    const processedList: AgencyWithCoverage[] = flattenedList.map((item: any) => {
      return {
        agencyId: item.agencyId,
        lat: item.lat,
        latSpan: item.latSpan,
        lon: item.lon,
        lonSpan: item.lonSpan,
      };
    });

    response.data.data.list = processedList;

    return response.data;
  }
}
