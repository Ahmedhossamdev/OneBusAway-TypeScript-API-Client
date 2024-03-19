import { OneBusAwayAPIClient } from './api/oneBusAwayApiClient';

const apiKey = 'TEST';

const client = new OneBusAwayAPIClient(apiKey);

client.agency.getAgencyDetails('1').then((response) => {
  console.log(response);
});
