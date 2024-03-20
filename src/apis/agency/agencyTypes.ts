import { ApiResponse, References } from '../../common/api-repsonse';

export interface AgencyResponse extends ApiResponse {
  data: {
    entry: AgencyEntry;
    references: References;
  };
}

export interface AgencyEntry {
  disclaimer: string;
  email: string;
  fareUrl: string;
  id: string;
  lang: string;
  name: string;
  phone: string;
  privateService: boolean;
  timezone: string;
  url: string;
}
