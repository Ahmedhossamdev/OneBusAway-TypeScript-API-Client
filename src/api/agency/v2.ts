import { ApiResponse } from '../../common/api-repsonse';
import axiosInstance from '../../utils/errorHandler';
import { AgencyResponse } from './agencyTypes';

export class AgencyApi {
  private apiKey: string;
  private apiUrl: string;

  constructor(apiUrl: string, apiKey: string) {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
  }

  async getAgencyDetails(agencyId: string): Promise<AgencyResponse> {
    try {
      //api.pugetsound.onebusaway.org/api/where/agency/1.json?key=TEST
      const url = `${this.apiUrl}/${agencyId}.json?key=${this.apiKey}`;
      const response = await axiosInstance.get(url);
      return response.data as AgencyResponse;
    } catch (error: any) {
      return error;
    }
  }
}
