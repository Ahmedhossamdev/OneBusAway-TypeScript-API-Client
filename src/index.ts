import { OneBusAwayAPIClient } from './api/OneBusAwayAPIClient';

const apiKey = 'TEST';

const client = new OneBusAwayAPIClient(apiKey);

client.agencyWithCoverage.getAgenciesWithCoverage().then((response) => {
  console.log(response);
});
