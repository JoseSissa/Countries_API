import { API_URL } from "./settings";

export function searchCountries ({ country }) {
    console.log({ country });
    const API_URL_FIXED = country === '' 
                            ? `${API_URL}/all` 
                            : `${API_URL}/name/${country}`
    return (
        fetch(API_URL_FIXED)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                const data = res.map(elem => {
                    const name = elem.name.common
                    const flags = elem.flags
                    const population = elem.population
                    const region = elem.region
                    const capital = elem.capital ? elem.capital[0] : "Without Capital"
                    return { capital, flags, name, population, region }
                })
                return data
            })
    );
}