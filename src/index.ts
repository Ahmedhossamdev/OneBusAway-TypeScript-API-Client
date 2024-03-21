import { Agency } from './apis/agency/v2';
import { AgencyWithCoverage } from './apis/agencywithcoverage/v2';
import { Stop } from './apis/stop/v2';
import { TripDetails } from './apis/trip-details/v2';
import { Trip } from './apis/trip/v2';

/***
 * Library class
 * @class
 * @classdesc Library class to access all the APIs
 * @param {string} apiKey - API key to access the APIs
 * @param {string} baseUrl - Base URL for the API
 * @param {string} region - Region for the API
 *
 *
 * @example
 * const client = new Library({
 * apiKey: 'TEST'
 * baseUrl: 'https://api.pugetsound.onebusaway.org/api/where',
 * region: 'pugetsound',
 * });
 *
 * client.agency.getAgencyById('1').then((response) => {
 *  console.log(response.data);
 * });
 *
 */
export class Library {
  agency: Agency;
  agencyWithCoverage: AgencyWithCoverage;
  stop: Stop;
  trip: Trip;
  tripDetails: TripDetails;

  constructor(config: { apiKey: string; baseUrl: string; region: string }) {
    this.agency = new Agency(config);
    this.agencyWithCoverage = new AgencyWithCoverage(config);
    this.stop = new Stop(config);
    this.trip = new Trip(config);
    this.tripDetails = new TripDetails(config);
  }
}
