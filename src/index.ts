import { OneBusAwayAPIClient } from './apis/onebusawayclient';
import { ApiError } from './utils/errorHandler';

const apiKey = 'TEST';
const region = 'pugetsound';

const client = new OneBusAwayAPIClient(apiKey, region);

// The Right id is 1
client.agency
  .getAgencyDetails('1')
  .then((response) => {
    console.log(response);
  })
  .catch((error: ApiError) => {
    console.error(error);
  });

// The Right id is 1_7

client.stop
  .getStopDetails('1_752121403')
  .then((response) => {
    console.log(response);
  })
  .catch((error: ApiError) => {
    console.error(error);
  });
