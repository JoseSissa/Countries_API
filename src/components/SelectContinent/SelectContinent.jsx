import { useState, useEffect } from 'react';
import { API_URL, REGION_API_URL } from '../../services/settings';

export function SelectContinent({ setAllCountry }) {

    const [region, setRegion] = useState('all');

    useEffect(() => {
        if(region === 'all') {
            fetch(API_URL)
              .then(res => res.json())
              .then(res => setAllCountry(res))
        } else {
            fetch(`${REGION_API_URL}/${region}`)
              .then(res => res.json())
              .then(res => setAllCountry(res))
        }
      }, [region]);

    const handleRegion = (e) => {
        setRegion(e.target.value)
    }

    return ( 
        <select onChange={handleRegion} placeholder="Filter by region" >
            <option value="all">All</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    );
}
