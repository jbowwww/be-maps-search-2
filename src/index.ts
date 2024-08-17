import { getPlaceAutocomplete } from './maps-api'

export async function getAutoCompleteDetails(address: any): Promise<any> {
    // our API client returns the raw results array in the response body from the maps API
    const results = await getPlaceAutocomplete(process.env.TOMTOM_API_KEY ?? "", address);
    // map results to a structure to suit us
    return results.map((r: { id: any; }) => ({ placeId: r.id }));
}
