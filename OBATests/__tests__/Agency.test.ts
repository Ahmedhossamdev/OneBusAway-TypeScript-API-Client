// Agency.test.ts

const path = require('path');
const fs = require('fs');
import { TestClass } from './../testClass';

describe('AgencyModelOperationTests', () => {
  let test: TestClass;

  beforeAll(() => {
    const data = fs.readFileSync(path.resolve(__dirname, './fixtures/agency_1.json'), 'utf8');
    test = new TestClass('https://www.example.com', 'TEST');
    test.setupNock('/api/where/agency/1.json?key=TEST', data);
  });

  beforeEach(() => {
    test.setupClient('test');
  });

  it('should load agency successfully', async () => {
    const response = await test.client.agency.getAgencyById('1');

    const agency = response.data;

    expect(agency.entry.id).toBe('1');
    expect(agency.entry.name).toBe('Metro Transit');
    expect(agency.entry.url).toBe('http://metro.kingcounty.gov');
  });
});
