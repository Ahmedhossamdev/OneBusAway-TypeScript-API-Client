import axiosInstance from '../../utils/errorHandler';

import { AgencyResponse } from './AgencyInterfaces';
import { parseXML } from '../../utils/xmlParser';

export class AgencyApiClient {
  private apiKey: string;
  private apiUrl: string;
  private outputFormat: string;

  constructor(apiKey: string, outputFormat: string) {
    this.apiKey = apiKey;
    this.apiUrl = 'https://api.pugetsound.onebusaway.org/api/where/agency';
    this.outputFormat = outputFormat;
  }

  async getAgencyDetails(agencyId: string): Promise<AgencyResponse> {
    const url = `${this.apiUrl}/${agencyId}.${this.outputFormat}?key=${this.apiKey}`;

    const response = await axiosInstance.get(url);

    let agencyData: AgencyResponse;

    if (this.outputFormat === 'xml') {
      agencyData = await parseXML<AgencyResponse>(response.data);
    } else {
      agencyData = response.data;
    }

    return agencyData;
  }
}
