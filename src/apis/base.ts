import 'isomorphic-unfetch';

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

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || `https://api.${config.region}.onebusaway.org/api/where/`;
  }

  protected async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}.json?key=${this.apiKey}`;
    const config = {
      ...options,
    };

    // TODO: Verify if this is the correct way to handle the response
    return fetch(url, config).then(async (response) => {
      const data = await response.json();

      if (data) {
        return data;
      } else {
        return null;
      }
    });
  }
}
