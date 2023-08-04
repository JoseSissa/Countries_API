import { useState } from 'react'
import { searchCountries } from "../services/searchCountries";


export function useCountries() {

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [, setError] = useState(null);

    const getCountries = async ({ search = '' }) => {
        console.log(search);
        try {
            setLoading(true)
            const listCountries = await searchCountries({ country: search })
            setCountries(listCountries)
        } catch (error) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    return { countries, getCountries, loading }
    // Retornar lista de los paises
}
