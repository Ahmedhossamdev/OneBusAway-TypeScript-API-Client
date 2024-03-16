import axios from 'axios';
import xml2js from 'xml2js';

interface AgencyWithCoverage {
  agencyId: string;
  lat: number;
  lon: number;
  latSpan: number;
  lonSpan: number;
  agencyName: string;
}

export class OneBusAwayAPIClient {
  private apiUrl: string;
  private apiKey: string;
  private outputFormat: string;

  constructor(apiKey: string, outputFormat: string = 'json') {
    this.apiUrl = 'http://api.pugetsound.onebusaway.org';
    this.apiKey = apiKey;
    this.outputFormat = outputFormat;
  }

  async getAgenciesWithCoverage(): Promise<AgencyWithCoverage[]> {
    const url = `${this.apiUrl}/api/where/agencies-with-coverage.${this.outputFormat}?key=${this.apiKey}`;

    try {
      const response = await axios.get(url);

      if (response.status !== 200) {
        throw new Error('Failed to fetch data from OneBusAway API');
      }

      let responseData;
      if (this.outputFormat === 'xml') {
        responseData = await this.parseXmlResponse(response.data);
      } else {
        responseData = response.data;
      }

      const agenciesList = this.extractAgenciesList(responseData);
      const agencyReferences = this.extractAgencyReferences(responseData);

      const agencyData: AgencyWithCoverage[] = agenciesList.map((item: any) => ({
        agencyId: item.agencyId,
        lat: item.lat,
        lon: item.lon,
        latSpan: item.latSpan,
        lonSpan: item.lonSpan,
        agencyName: agencyReferences[item.agencyId] || 'Unknown',
      }));

      return agencyData;
    } catch (error) {
      throw new Error(`Error fetching data from OneBusAway API: ${(error as any).message}`);
    }
  }

  private async parseXmlResponse(xmlData: string): Promise<any> {
    return new Promise((resolve, reject) => {
      xml2js.parseString(xmlData, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  private extractAgenciesList(responseData: any): any[] {
    return this.outputFormat === 'xml' ? responseData.response.data[0].list[0].agencyWithCoverage : responseData.data.list;
  }

  private extractAgencyReferences(responseData: any): Record<string, string> {
    return this.outputFormat === 'xml' ? this.extractAgencyReferencesFromXml(responseData) : this.extractAgencyReferencesFromJson(responseData);
  }

  private extractAgencyReferencesFromXml(responseData: any): Record<string, string> {
    const agencies = responseData.response.data[0].references[0].agencies[0].agency;
    return agencies.reduce((acc: Record<string, string>, agency: any) => {
      acc[agency.id[0]] = agency.name[0];
      return acc;
    }, {});
  }

  private extractAgencyReferencesFromJson(responseData: any): Record<string, string> {
    return responseData.data.references.agencies.reduce((acc: Record<string, string>, agency: any) => {
      acc[agency.id] = agency.name;
      return acc;
    }, {});
  }
}
