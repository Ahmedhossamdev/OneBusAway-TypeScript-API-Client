import { References, ApiResponse } from 'src/utlis/api-repsonse';

export interface IAgencyResponse extends ApiResponse {
  data: {
    entry: IAgencyEntry;
    references: References;
  };
}

export interface IAgencyEntry {
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
