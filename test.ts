import { Library } from './src/index';

const client = new Library({
  apiKey: 'TEST',
  baseUrl: 'https://api.pugetsound.onebusaway.org/api/where',
  region: 'pugetsound',
});

// client.trip.getTripById('1_6054254551').then((response) => {
//   if (!response?.data) console.log(response);
//   else console.log(response.data?.references);
// });

// client.agency.getAgencyById('1321321321').then((response) => {
//   if (!response?.data) console.log(response);
//   else console.log(response.data);
// });

// client.agencyWithCoverage.getAgenciesWithCoverage().then((response) => {
//   console.log(response.data);
// });

// client.stop.getStopById('1_754031').then((response) => {
//   if (response) console.log(response?.data?.entry);
// });

client.tripDetails.getTripDetailsById('1_562510385').then((response) => {
  if (!response?.data) console.log(response);
  else console.log(response.data.entry.schedule);
});
