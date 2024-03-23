import { Base } from '../base';
import { IStopResponse } from './types';

const resourceName = 'stop';

/***
 * Stop API
 *
 * The Stop API provides access to information about stops, which are physical locations where vehicles pick up or drop off passengers.
 *
 * @class
 * @classdesc Stop API class to access the Stop API
 * @extends Base
 * @param {string} apiKey - API key to access the APIs
 * @param {string} baseUrl - Base URL for the API
 * @param {string} region - Region for the API
 *
 * @error
 *
 * This Api return null if stop id not found
 */
export class Stop extends Base {
  getStopById(id: string) {
    return this.request<IStopResponse>(`/${resourceName}/${id}`);
  }
}
