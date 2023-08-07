import { API_URL_COUNTRY } from "./settings";

export function searchSingleCountry({ country }) {
    return (
        fetch(`${API_URL_COUNTRY}/${country}`)
            .then(res => res.json())
            .then(res => {
                return {
                    flag: res[0].flags.svg,
                    name: res[0].name.common,
                    nativeName: res[0].name.official,
                    population: res[0].population,
                    region: res[0].region,
                    subRegion: res[0].subregion,
                    capital: res[0].capital[0],
                    topLevelDomain: res[0].tld[0],
                    currency: res[0].currencies,
                    laguages: res[0].languages
                }
            })
        )
}
