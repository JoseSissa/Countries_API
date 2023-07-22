import React from 'react';

export function SelectContinent({ setRegion }) {

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
