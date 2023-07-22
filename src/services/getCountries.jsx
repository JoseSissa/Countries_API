import { API_URL } from './settings.js'

function getCountries() {
    return (
        fetch(API_URL)
            .then(res => res.json())
            .then(res => {
                const data = res.map(elem => {
                    const name = elem.name.official
                    const population = elem.population
                    const region = elem.region
                    const capital = elem.capital ? elem.capital[0] : "Without Capital"
                    return { name, population, region, capital }
                })
                return data
            })
    );
}

export default getCountries;