import { getPlaceAutocomplete } from './maps-api';
import { DataResultType } from './maps-api-data-types';

export type AutoCompleteDetails = { placeId: DataResultType["id"]; };

export async function getAutoCompleteDetails(address: string): Promise<AutoCompleteDetails[]> {
    // our API client returns the raw results array in the response body from the maps API
    const results = await getPlaceAutocomplete(process.env.TOMTOM_API_KEY ?? "", address);
    // map results to a structure to suit us
    return results.map(r => ({ placeId: r.id }));
}
