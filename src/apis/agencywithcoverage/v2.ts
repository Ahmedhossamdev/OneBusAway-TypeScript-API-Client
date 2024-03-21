import { ApiResponse } from 'src/common/api-repsonse';
import { Base } from '../base';
import { IAgenciesWithCoverageResponse } from './types';

const resourceName = 'agencies-with-coverage';

export class AgencyWithCoverage extends Base {
  getAgenciesWithCoverage(): Promise<IAgenciesWithCoverageResponse> {
    return this.request(`/${resourceName}`);
  }
}
