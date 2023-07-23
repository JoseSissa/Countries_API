export function SearchCountry ({ allCountry, renderCountries, setRenderCountries }) {

    const searchCountry = (e) => {
        const country = e.target.value.toLowerCase()
        let filter = []
        
        filter = allCountry.filter(elem => {
            const nameOfCountry = elem.name.official.toLowerCase()
            return (
                nameOfCountry.includes(country)
            )
        })
        setRenderCountries(filter)
    }

    return (
        <div>
            <input onChange={searchCountry} placeholder='Search for a country' type="text" />
        </div>
    )
}