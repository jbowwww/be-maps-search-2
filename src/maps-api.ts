import axios from "axios";

// https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search
export async function getPlaceAutocomplete(key: string, address: string) {
    const raw = await axios.get(
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
