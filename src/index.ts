// Example usage
import { OneBusAwayAPIClient } from './apis/agencyWithCoverage/v1';

const apiKey = 'TEST';
const outputFormat = 'xml';
const client = new OneBusAwayAPIClient(apiKey, outputFormat);

client.getAgenciesWithCoverage().then((agencies) => {
  console.log(agencies);
});
