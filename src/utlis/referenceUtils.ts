import { IAgencyEntry } from 'src/apis/agency/types';
import { IReferences } from './api-repsonse';

// This Function is used to map agency.id with References.agencies.id
// TODO: Refactor this function to use a more descriptive name
// TODO: Optimize this function to use a more efficient algorithm o(n) max o(n * lon(n))
export function mapReferences<T extends { agencyId: string; agency: IAgencyEntry }>(list: T[], references: IReferences): T[] {
  const agencyLookup = references.agencies.reduce((lookup, agency) => {
    lookup[agency.id] = agency;
    return lookup;
  }, {});

  return list
    .map((item) => {
      const matchedAgency = agencyLookup[item.agencyId];
      return {
        ...item,
        agencyID: item.agencyId,
        agency: matchedAgency || item.agency,
      };
    })
    .map(({ agencyId, ...item }) => item) as T[];
}
