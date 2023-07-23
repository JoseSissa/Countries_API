import React from 'react';

export function SelectContinent({ allCountry, setRenderCountries }) {

    const handleRegion = (e) => {
        let filter = []
        const continent = e.target.value

        if(continent === 'all') {
            filter = allCountry
        } else if(continent === 'Africa') {
            filter = allCountry.filter(elem => {
                return (
                    elem.region === continent
                )
            })
        } else if(continent === 'Americas') {
            filter = allCountry.filter(elem => {
                return (
                    elem.region === continent
                )
            })
        } else if(continent === 'Asia') {
            filter = allCountry.filter(elem => {
                return (
                    elem.region === continent
                )
            })
        } else if(continent === 'Europe') {
            filter = allCountry.filter(elem => {
                return (
                    elem.region === continent
                )
            })
        } else if (continent === 'Oceania') {
            filter = allCountry.filter(elem => {
                return (
                    elem.region === continent
                )
            })
        }
        setRenderCountries(filter)
    }

    return ( 
        <select onChange={handleRegion} placeholder="Filter by region" >
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    );
}
