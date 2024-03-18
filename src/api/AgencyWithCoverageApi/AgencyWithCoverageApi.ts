import axios from 'axios';
import { parseXML } from './../../utils/xmlParser';
import { AgenciesWithCoverageResponse, AgencyWithCoverage } from './AgencyWithCoverageInterfaces';

export class AgencyApiWithCoverage {
  private readonly apiUrl: string;
  private readonly apiKey: string;
  private readonly outputFormat: string;

  constructor(apiKey: string, outputFormat: string) {
    this.apiUrl = 'https://api.pugetsound.onebusaway.org/api/where/agencies-with-coverage';
    this.apiKey = apiKey;
    this.outputFormat = outputFormat;
  }
  async getAgenciesWithCoverage(): Promise<AgenciesWithCoverageResponse> {
    const url = `${this.apiUrl}.${this.outputFormat}?key=${this.apiKey}`;

    try {
      const response = await axios.get(url);

      let data;
      if (this.outputFormat === 'xml') {
        data = await parseXML<AgenciesWithCoverageResponse>(response.data);
      } else {
        data = response.data;
      }

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
    } catch (error) {
      throw new Error(`Error fetching agencies with coverage: ${(error as Error).message}`);
    }
  }
}
