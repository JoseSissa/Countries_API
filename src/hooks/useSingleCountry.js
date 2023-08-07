import { useState } from "react";
import { searchSingleCountry } from "../services/searchSingleCountry";

export function useSingleCountry() {
    const [singleCountry, setCountry] = useState([]);
    const [loading, setLoading] = useState(false);
    const [, setError] = useState(null);

    const getCountry = async ({ country }) => {
        console.log('Use single country', country);
        try {
            setLoading(true)
            const singleCountry = await searchSingleCountry({ country })
            setCountry(singleCountry)
        } catch (error) {
            console.log(error);
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { singleCountry, loading, getCountry }
}