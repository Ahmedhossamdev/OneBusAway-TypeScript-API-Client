import { Library } from './src/index';

const client = new Library({
  apiKey: 'TEST',
  baseUrl: 'https://api.{region}.onebusaway.org',
  region: 'pugetsound',
});

client.agencyWithCoverage.getAgenciesWithCoverage().then((response) => {
  console.log(response?.data);
});

// client.agency.getAgencyById('1321321321').then((response) => {
//   if (!response?.data) console.log(response);
//   else console.log(response.data);
// });

// client.stop.getStopById('1_754031').then((response) => {
//   if (response) console.log(response?.data?.entry);
// });

// client.tripDetails.getTripDetailsById('1_562510385').then((response) => {
//   if (!response?.data) console.log(response);
//   else console.log(response.data.entry.schedule);
// });
