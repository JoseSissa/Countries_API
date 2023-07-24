import React from 'react';
import './card.css'

export function Card({ country }) {
    const { name, capital, population, region, flags } = country

    return ( 
        <article className='card'>
            <header>
                <img className='card_flag' src={`${flags.png}`} alt={flags.alt} />
            </header>
            <div className='card_content'>
                <h3>{name.official}</h3>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </div>
        </article>
    );
}
