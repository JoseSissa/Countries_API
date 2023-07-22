export function SearchCountry ({ setCountry }) {

    const searchCountry = (e) => {
        setCountry(e.target.value)
    }

    return (
        <div>
            <input onChange={searchCountry} placeholder='Search for a country' type="text" />
        </div>
    )
}