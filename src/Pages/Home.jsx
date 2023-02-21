import React, { useState, useEffect } from 'react';
import SelectRegion from '../components/SelectRegion/selectRegion.jsx'
import Card from '../components/Card/card.jsx'
import getCountries from '../services/getCountries.jsx'

function Home() {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        getCountries()
            .then(data => setCountry(data))
    }, [])

    return (
        <>
            <SelectRegion />
            {
                country.map(elem => {
                    <Card capital={elem.capital} name={elem.name} population={elem.population} region={elem.region}/>
                })
            }
        </>
    );
}

export default Home;