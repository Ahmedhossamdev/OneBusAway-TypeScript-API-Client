import { Base } from '../base';
import { ITripDetailsResponse } from './types';

/***
 * Trip Details API
 *
 * The Trip Details API provides access to information about trips, which are a sequence of two or more stops that occur at specific times.
 *
 * @class
 * @classdesc Trip Details API class to access the Trip Details API
 * @extends Base
 *
 * @param {string} apiKey - API key to access the APIs
 * @param {string} baseUrl - Base URL for the API
 * @param {string} region - Region for the API
 *
 * @error
 *
 * This Api return json if trip id not found
 *
 * {
 *  code: 404,
 *  version: 2,
 *  text: "The requested resource was not found."
 *  currentTime: 1572020000
 * }
 *
 */
const resourceName = 'trip-details';
export class TripDetails extends Base {
  getTripDetailsById(id: string): Promise<ITripDetailsResponse> {
    return this.request(`/${resourceName}/${id}`);
  }
}
