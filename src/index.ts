import { OneBusAwayAPIClient } from './api/onebusawayclient';

const apiKey = 'TEST';
const region = 'pugetsound';

const client = new OneBusAwayAPIClient(apiKey, region);

client.agencyWithCoverage.getAgenciesWithCoverage().then((response) => {
  console.log(response);
});
