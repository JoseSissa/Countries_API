import { useState } from 'react'
import { searchCountries } from "../services/searchCountries";


export function useCountries() {

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [, setError] = useState(null);

    const getCountries = async ({ search = '', continent = '' }) => {
        try {
            setLoading(true)
            const listCountries = await searchCountries({ country: search, continent })
            setCountries(listCountries)
        } catch (error) {
            console.log(error);
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { countries, getCountries, loading }
    // Retornar lista de los paises
}
