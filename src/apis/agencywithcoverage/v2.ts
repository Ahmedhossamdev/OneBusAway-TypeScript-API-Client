import { Base } from '../base';
import { IAgenciesWithCoverageResponse } from './types';

const resourceName = 'agencies-with-coverage';

export class AgencyWithCoverage extends Base {
  getAgenciesWithCoverage() {
    return this.request<IAgenciesWithCoverageResponse>(`/${resourceName}`);
  }
}
