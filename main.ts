import { Library } from './src/index';

const client = new Library({
  apiKey: 'TEST',
  baseUrl: 'https://api.{region}.onebusaway.org',
  region: 'pugetsound',
});

client.agencyWithCoverage.getAgenciesWithCoverage().then((response) => {
  console.log(!response);
});
