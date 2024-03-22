import { References, ApiResponse } from 'src/utlis/api-repsonse';

import { Base } from '../base';
import { IAgencyResponse } from './types';

/***
 * Agency API
 *
 * The Agency API provides access to information about transit agencies. The data provided via the Agency API is intended for use in trip planning and related applications.
 *
 * @class
 * @classdesc Agency API class to access the Agency API
 * @extends Base
 * @param {string} apiKey - API key to access the APIs
 * @param {string} baseUrl - Base URL for the API
 * @param {string} region - Region for the API
 *
 * @error
 * This end point return json object if the agency is not found
 *
 * {
 *  code: 404,
 *  version: 2,
 *  text: "The requested resource was not found."
 *  currentTime: 1572020000
 * }
 *
 */

const resourceName = 'agency';
export class Agency extends Base {
  getAgencyById(id: string): Promise<IAgencyResponse> {
    return this.request(`/${resourceName}/${id}`);
  }
}
