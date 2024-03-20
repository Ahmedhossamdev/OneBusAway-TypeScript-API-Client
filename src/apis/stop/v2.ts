import axios from 'axios';
import { StopResponse } from './stopTypes';
import { ApiError, axiosInstance } from '../../utils/errorHandler';

/**
 * The `StopApi` class provides methods for interacting with the stop-related endpoints of the OneBusAway API.
 * It requires the base API URL and an API key to be provided upon instantiation.
 *
 * @example
 * const stopApi = new StopApi(apiUrl, apiKey);
 */
export class StopApi {
  private readonly apiUrl: string;
  private readonly apiKey: string;

  /**
   * Constructs a new `StopApi` instance.
   *
   * @param apiUrl - The base URL of the OneBusAway API.
   * @param apiKey - The API key to use for requests.
   */
  constructor(apiUrl: string, apiKey: string) {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
  }

  /**
   * Fetches details about a specific stop from the OneBusAway API.
   *
   * @param stopId - The ID of the stop to fetch details for.
   * @returns A Promise that resolves to a `StopResponse` object if the request is successful, or `null` if the response is null.
   * @throws Will throw an `ApiError` if the API returns a status code of 400 or above.
   *
   * @example
   * stopApi.getStopDetails('1_75403').then((response) => {
   *   console.log(response);
   * }).catch((error: ApiError) => {
   *   console.error(error);
   * });
   */
  async getStopDetails(stopId: string): Promise<StopResponse | null> {
    const url = `${this.apiUrl}/${stopId}.json?key=${this.apiKey}`;

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
