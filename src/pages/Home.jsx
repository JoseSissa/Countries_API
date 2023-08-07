import { useState, useEffect, useCallback } from 'react'
import { useCountries } from '../hooks/useCountries.js'

import debounce from "just-debounce-it";

import { Link } from 'wouter'
import { Card } from '../components/Card/Card.jsx'
import { Header } from '../components/Header/Header.jsx'

export function Home() {

    const [search, updateSearch] = useState('')
    const [continent, updateContinent] = useState('')
    const { countries, getCountries, loading } = useCountries()

    // Como en cada render se crea un nuevo debounce entonces hay que usar el useCallback
    const debounceGetCountries = useCallback(
        debounce(({ search, continent }) => {
            getCountries({ search, continent })
        }, 350)
        , []
    )

    useEffect(() => {    
        debounceGetCountries({ search, continent })
    }, [search, continent]);

    return (
        <>
            <Header
                search={search}
                updateSearch={updateSearch}
                updateContinent={updateContinent}
                viewFilter={true} 
            />

            <section className='countries_content'>
                {
                loading 
                    ? <p>Cargando ...</p>
                    : countries.map((elem, i) => {
                        return (
                            <Link href={`/detail/${elem.name}`} key={`${elem.capital}${i}`}>
                                <a>
                                    <Card country={elem} />
                                </a>
                            </Link>
                        )
                    })
                }
            </section>
        </>
    )
}