# OneBusAway TypeScript API Client

Welcome to the OneBusAway TypeScript API Client repository! This TypeScript client is designed to provide a seamless interaction with the OneBusAawy API. It offers support for various endpoints and response formats, making it easier to integrate OneBusAway API into your TypeScript projects.

## Installation

You can install the OneBusAway TypeScript API Client via npm:

```bash
npm install onebusaway-api-client
```

Alternatively, you can clone the repository to your local machine:

```bash
git clone https://github.com/Ahmedhossamdev/OneBusAway-TypeScript-API-Client.git
```

For client testing in main.ts file!

```bash
npm start
```

For Unit Testing!

```bash
npm test or npm t
```

## Usage

Once installed, you can import the Library class and create a new instance of the client with your API key and base URL:

.env file shoud look like this

```typescript
NODE_ENV:
```

```typescript
import { Library } from 'onebusaway-api-client';

const client = new Library({
  apiKey: 'TEST',
  baseUrl: 'https://api.{region}.onebusaway.org',
  region: 'pugetsound',
});

client.agency.getAgencyById('1').then((response) => {
  console.log(response.data);
});
```
