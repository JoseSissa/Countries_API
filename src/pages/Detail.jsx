import { useState, useEffect } from 'react'
import { Header } from "../components/Header/Header"
import { useSingleCountry } from '../hooks/useSingleCountry'

export function Detail({ params }) {

    const { singleCountry, loading, getCountry } = useSingleCountry()
    console.log(singleCountry);

    useEffect(() => {
        console.log('use effect', params.name);
        getCountry({ country: params.name })
    }, []);

    return (
        <section>
            <Header />
            {
                loading
                    ? <p>Cargando ...</p>
                    : 
                    <div>
                        <button>&lt;- Back</button>
                        <p>Render</p>
                        <img src={singleCountry.flag} alt={`Flag of ${singleCountry.name}`} />
                        <p>{singleCountry.name}</p>
                        <p>{singleCountry.nativeName}</p>
                        <p>{singleCountry.population}</p>
                        <p>{singleCountry.region}</p>
                        <p>{singleCountry.subRegion}</p>
                        <p>{singleCountry.capital}</p>
                        <p>{singleCountry.topLevelDomain}</p>
                        {/* <p>{singleCountry.currency}</p> */}
                        {/* <p>{singleCountry.laguages}</p> */}
                    </div>
            }
        </section>
    )
}