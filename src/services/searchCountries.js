import { API_URL, API_URL_CONTINENT } from "./settings";

export function searchCountries ({ country = '', continent = '' }) {
    
    let API_URL_FIXED = `${API_URL}/all`
    if(country === '' && continent === '') {
        API_URL_FIXED = `${API_URL}/all` 
    }else if(country !== '' && continent === '') {
        API_URL_FIXED = `${API_URL}/name/${country}`
    }else if (country === '' && continent !== '') {
        API_URL_FIXED = `${API_URL_CONTINENT}/${continent}`
    }else if (country !== '' && continent !== '') {
        API_URL_FIXED = `${API_URL_CONTINENT}/${continent}`
    }
    return (
        fetch(API_URL_FIXED)
            .then(res => res.json())
            .then(res => {
                let data = res
                if (country !== '' && continent !== '') {
                    data = res.filter(elem => elem.name.common.toLowerCase().includes(country))
                }
                data = data.map(elem => {
                    const name = elem.name.common
                    const flags = elem.flags
                    const population = elem.population
                    const region = elem.region
                    const capital = elem.capital ? elem.capital[0] : "Without Capital"
                    return { capital, flags, name, population, region, elem }
                })
                return data
            })
    );
}