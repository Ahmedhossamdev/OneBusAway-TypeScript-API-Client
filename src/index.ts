import { OneBusAwayAPIClient } from './api/OneBusAwayAPIClient';

const apiKey = 'TEST';
const outputFormat = 'json';

// const client = new OneBusAwayAPIClient(apiKey, outputFormat);

// client.agency.getAgencyDetails('1').then((agency) => {
//   console.log(agency);
// });

const client = new OneBusAwayAPIClient(apiKey, outputFormat);

client.agencyWithCoverage.getAgenciesWithCoverage().then((agencies) => {
  console.log(agencies.data);
});
