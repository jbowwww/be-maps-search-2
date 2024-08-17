import axios from "axios";
import { DataType, DataResultsType } from "./maps-api-data-types";

// https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search
export async function getPlaceAutocomplete(key: string, address: string): Promise<DataResultsType> {
    const raw = await axios.get<DataType>(
        `https://api.tomtom.com/search/2/search/${address}.json'`,
        {
            params: {
                key,
                limit: 100,
            },
        },
    );
    return raw.data.results;
}
