```html
<p align="center">
  <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="150" />
</p>

<h3 align="center">OneBusAway API Client</h3>
<p align="center">A TypeScript client for the OneBusAway API.</p>
<p></p>
```

## Installation

To install the library, use the following command:

```bash
npm install onebusaway-api-client
```

Alternatively, you can clone the repository to your local machine:

```bash
git clone https://github.com/Ahmedhossamdev/OneBusGo-TypeScript-API-Client.git
```

For client testing in main.ts file!

```bash
npm start
```

For Unit Testing!

```bash
npm t
```

## Usage

---

Once installed, you can import the Library class and create a new instance of the client with your API key and base URL:

.env file shoud look like this

```bash
NODE_ENV:
```

```typescript
import { Library } from 'onebusaway-api-client';

const client = new Library({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'YOUR_BASE_URL',
});
```

```typescript
client.agency.getAgencyById('1').then((response) => {
  console.log(response.data);
});
```
