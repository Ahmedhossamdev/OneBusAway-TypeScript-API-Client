# OneBusGo TypeScript API Client

Welcome to the OneBusGo TypeScript API Client repository! This client is designed to provide seamless interaction with the OneBusGo API, offering support for various endpoints and response formats.

## Installation

To get started with the OneBusGo TypeScript API Client, you can install it via npm:

```bash
npm install onebusaway-api-client



Alternatively, you can clone the repository to your local machine:

git clone https://github.com/Ahmedhossamdev/OneBusGo-TypeScript-API-Client.git


Usage
Once installed, you can import the Library class and create a new instance of the client with your API key and base URL:

import { Library } from 'onebusaway-api-client';

const client = new Library({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'YOUR_BASE_URL',
});



You can then utilize the client to access various endpoints. Here's an example of how to fetch agency details by ID:


client.agency.getAgencyById('1').then((response) => {
  console.log(response.data);
});


