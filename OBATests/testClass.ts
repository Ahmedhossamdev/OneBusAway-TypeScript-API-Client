// testClass.ts
import { Library } from '../src/index';
const nock = require('nock');
const fs = require('fs');
const path = require('path');

export class TestClass {
  client: Library;
  baseUrl: string;
  apiKey: string;

  constructor(baseUrl: string, apiKey: string) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  setupNock(endpoint: string, data: any) {
    nock(this.baseUrl).get(endpoint).reply(200, data);
  }

  setupClient(region: string) {
    this.client = new Library({
      apiKey: this.apiKey,
      baseUrl: this.baseUrl,
      region: region,
    });
  }
}
