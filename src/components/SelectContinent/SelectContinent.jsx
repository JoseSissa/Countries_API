import React from 'react';

export function SelectContinent({ allCountry, setRenderCountries }) {

    const handleRegion = (e) => {
        let filter = []
        if(e.target.value === 'all') {
            filter = allCountry
        } else if(e.target.value === 'africa') {
            filter = allCountry.filter(elem => {
                return (
                    elem.region === 'Africa'
                )
            })
        } else if(e.target.value === 'america') {
            filter = allCountry.filter(elem => {
                return (
                    elem.region === 'Americas'
                )
            })
        } else if(e.target.value === 'asia') {
            filter = allCountry.filter(elem => {
                return (
                    elem.region === 'Asia'
                )
            })
        } else if(e.target.value === 'europe') {
            filter = allCountry.filter(elem => {
                return (
                    elem.region === 'Europe'
                )
            })
        } else if (e.target.value === 'oceania') {
            filter = allCountry.filter(elem => {
                return (
                    elem.region === 'Oceania'
                )
            })
        }
        setRenderCountries(filter)
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
