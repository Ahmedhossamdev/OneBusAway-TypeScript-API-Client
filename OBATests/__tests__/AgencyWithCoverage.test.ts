// AgencyWithCoverage.test.ts

const path = require('path');
const fs = require('fs');
import { TestClass } from './../testClass';

describe('AgenciesWithCoverageModelOperationTests', () => {
  let test: TestClass;

  beforeAll(() => {
    const data = fs.readFileSync(path.resolve(__dirname, './fixtures/agencies_with_coverage.json'), 'utf8');
    test = new TestClass('https://www.example.com', 'TEST');
    test.setupNock('/api/where/agencies-with-coverage.json?key=TEST', data);
  });

  beforeEach(() => {
    test.setupClient('test');
  });

  // TODO: change the object after we agree on the final implementation
  it('should load agencies with coverage successfully', async () => {
    //
    const response = await test.client.agencyWithCoverage.getAgenciesWithCoverage();

    const agencies = response.data;

    const refAgency = response.data.references.agencies[0];

    expect(agencies.list.length).toBe(11);
    expect(refAgency.id).toBe('98');
    expect(refAgency.name).toBe("Seattle Children's Hospital");
    expect(refAgency.url).toBe('https://www.luum.com/commute/content/shuttles');
  });
});
