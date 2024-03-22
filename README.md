# OneBusGo TypeScript API Client

Welcome to the OneBusGo TypeScript API Client repository! This TypeScript client is designed to provide a seamless interaction with the OneBusGo API. It offers support for various endpoints and response formats, making it easier to integrate OneBusGo API into your TypeScript projects.

## Installation

You can install the OneBusGo TypeScript API Client via npm:

```bash
npm install onebusaway-api-client
```

Alternatively, you can clone the repository to your local machine:

```bash
git clone https://github.com/Ahmedhossamdev/OneBusGo-TypeScript-API-Client.git
```

## Usage
-----
Once installed, you can import the Library class and create a new instance of the client with your API key and base URL:

```typescript
import { Library } from 'onebusaway-api-client';

const client = new Library({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'YOUR_BASE_URL',
});


client.agency.getAgencyById('1').then((response) => {
  console.log(response.data);
});
```

