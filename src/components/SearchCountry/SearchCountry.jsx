export function SearchCountry ({ setAllCountry }) {

    const searchCountry = (e) => {
        setAllCountry(e.target.value)
    }

    return (
        <div>
            <input onChange={searchCountry} placeholder='Search for a country' type="text" />
        </div>
    )
}