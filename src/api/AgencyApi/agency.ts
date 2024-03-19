import { ApiResponse } from '../../common/ApiRepsonse';
import axiosInstance from '../../utils/errorHandler';
import { AgencyResponse } from './agency-interfaces';

export class AgencyApiClient {
  private apiKey: string;
  private apiUrl: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.apiUrl = 'https://api.pugetsound.onebusaway.org/api/where/agency';
  }

  async getAgencyDetails(agencyId: string): Promise<AgencyResponse> {
    try {
      const url = `${this.apiUrl}/${agencyId}.json?key=${this.apiKey}`;
      const response = await axiosInstance.get(url);
      return response.data as AgencyResponse;
    } catch (error: any) {
      return error;
    }
  }
}
