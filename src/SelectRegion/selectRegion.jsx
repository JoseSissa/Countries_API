import React from 'react';

function SelectRegion() {

    const selectRegion = (e) => {
        console.log(e.target.value);
    }

    return ( 
        <select onChange={selectRegion} placeholder="Filter by region" >
            <option value="all">All</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
     );
}

export default SelectRegion;