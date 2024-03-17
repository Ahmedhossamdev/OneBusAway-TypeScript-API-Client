import axios from 'axios';
import { parseXML } from './../../utils/xmlParser';
import { AgencyResponse } from './AgencyInterfaces';

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

    try {
      const response = await axios.get(url);

      if (response.status === 404) {
        throw new Error('Resource not found');
      }

      if (response.status !== 200) {
        throw new Error('Failed to fetch agency details');
      }

      let agencyData: AgencyResponse;

      if (this.outputFormat === 'xml') {
        agencyData = await parseXML<AgencyResponse>(response.data[0]);
      } else {
        agencyData = response.data;
      }

      return agencyData;
    } catch (error) {
      throw new Error(`Error fetching agency details: ${(error as Error).message}`);
    }
  }
}
