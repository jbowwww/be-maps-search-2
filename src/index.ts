import { getPlaceAutocomplete } from './maps-api';
import { MapsDataResult } from './maps-api-data-types';

export type AutoCompleteDetails = Partial<MapsDataResult>;
// { placeId: MapsDataResult["id"]; };
// ^ you could be this specific if you like

export async function getAutoCompleteDetails(address: string): Promise<AutoCompleteDetails[]> {
    // our API client returns the raw results array in the response body from the maps API
    const results = await getPlaceAutocomplete(process.env.TOMTOM_API_KEY ?? "", address);
    // Map propertioes out of the raw API results
    // Add whatever properties you need here and to AutoCompleteDetails, then update the tests too :)
    //  import { MapsDataResult } from './maps-api-data-types';
    // and MapsDataResult's subtypes to get your IDE to show you the available properties of r.
    return results.map(r => ({
        placeId: r.id,
        streetNumber: r.address.streetNumber,
        countryCode: r.address.countryCode,
        country: r.address.country,
        freeformAddress: r.address.freeformAddress,
        municipality: r.address.municipality,
    } as AutoCompleteDetails));
}
