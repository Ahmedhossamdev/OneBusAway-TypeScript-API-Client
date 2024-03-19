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
    const url = `${this.apiUrl}/${agencyId}.json?key=${this.apiKey}`;

    const response = await axiosInstance.get(url);

    let agencyData: AgencyResponse;

    agencyData = response.data;

    return agencyData;
  }
}
