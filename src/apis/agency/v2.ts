import { ApiResponse } from '../../common/api-repsonse';
import { ApiError, axiosInstance } from '../../utils/errorHandler';
import { AgencyResponse } from './agencyTypes';

/**
 * The `AgencyApi` class provides methods for interacting with the agency-related endpoints of the OneBusAway API.
 * It requires the base API URL and an API key to be provided upon instantiation.
 *
 * @example
 * const agencyApi = new AgencyApi(apiUrl, apiKey);
 */

export class AgencyApi {
  private apiKey: string;
  private apiUrl: string;

  /**
   * Constructs a new `AgencyApi` instance.
   *
   * @param apiUrl - The base URL of the OneBusAway API.
   * @param apiKey - The API key to use for requests.
   */
  constructor(apiUrl: string, apiKey: string) {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
  }

  /**
   * Fetches details about a specific agency from the OneBusAway API.
   *
   * @param agencyId - The ID of the agency to fetch details for.
   * @returns A Promise that resolves to an `AgencyResponse` object if the request is successful, or `null` if the response is null.
   * @throws Will throw an `ApiError` if the API returns a status code of 400 or above.
   *
   * @example
   * agencyApi.getAgencyDetails('1').then((response) => {
   *   console.log(response);
   * }).catch((error: ApiError) => {
   *   console.error(error);
   * });
   */
  async getAgencyDetails(agencyId: string): Promise<AgencyResponse | null> {
    const url = `${this.apiUrl}/${agencyId}.json?key=${this.apiKey}`;
    const response = await axiosInstance.get(url);

    if (response === null) {
      return null;
    }
    if (response.data?.code >= 400) {
      throw new ApiError(response.data.code, response.data.text, response.data.version, response.data.currentTime);
    }
    return response.data;
  }
}
