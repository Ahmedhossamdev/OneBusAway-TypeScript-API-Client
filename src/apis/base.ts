import 'isomorphic-unfetch';
import { mapReferences } from './../utlis/referenceUtils';
import { logRequestInfo } from './../utlis/logger';
require('dotenv').config();

/***
 * Base class for all API classes
 * @param config
 * @param config.apiKey - API key for OneBusAway
 * @param config.baseUrl - Base URL for the API
 * @param config.region - Region for the API
 */
type Config = {
  apiKey: string;
  baseUrl: string;
  region: string;
};

export abstract class Base {
  private apiKey: string;
  private baseUrl: string;
  private region: string;

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || 'https://api.onebusaway.org';
    this.region = config.region;
  }

  protected async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    // TODO: This is temporary, we shoud refactor this after we agree on the final implementation
    let url = `${this.baseUrl.replace('{region}', this.region)}/api/where${endpoint}.json?key=${this.apiKey}`;

    // if (process.env.NODE_ENV === 'production') {
    //   url = `${this.baseUrl.replace('{region}', this.region)}/api/where${endpoint}.json?key=${this.apiKey}`;
    // } else {
    //   url = `${this.baseUrl}/api/where${endpoint}.json?key=${this.apiKey}`;
    // }
    logRequestInfo(url);
    const config = {
      ...options,
    };

    // TODO: Verify if this is the correct way to handle the response
    // TODOl remove refactor from here

    return fetch(url, config).then(async (response) => {
      const data = await response.json();
      // TODO: Refactor
      // const mappedList = mapReferences(data.data.list, data.data.references);
      // data.data.list = mappedList;
      if (data != null) {
        return data;
      } else {
        return null;
      }
    });
  }
}
