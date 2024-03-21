import { Base } from '../base';
import { ITripResponse } from './types';

/***
 *
 * Trip API
 *
 * Get details of a specific trip by id.
 *
 * @class
 * @classdesc Trip API class to access the Trip API
 * @extends Base
 * @param {string} apiKey - API key to access the APIs
 * @param {string} baseUrl - Base URL for the API
 *
 *
 * @error
 *
 * This Api return json if trip id not found
 * {
 *  code: 404,
 *  version: 2,
 *  text: "The requested resource was not found."
 *  currentTime: 1572020000
 * }
 *
 *
 */

const resourceName = 'trip';
export class Trip extends Base {
  getTripById(id: string): Promise<ITripResponse> {
    return this.request(`/${resourceName}/${id}`);
  }
}
