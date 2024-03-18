import { OneBusAwayAPIClient } from './api/OneBusAwayAPIClient';

const apiKey = 'TEST';
const outputFormat = 'xml';

const client = new OneBusAwayAPIClient(apiKey, outputFormat);

client.agency.getAgencyDetails('1').then((agency) => {
  console.log(agency);
});
