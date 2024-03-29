import React from 'react';
import './card.css'

export function Card({ country }) {
    const { name, flags, capital, population, region } = country

    return ( 
        <article className='card'>
            <header>
                <img className='card_flag' src={`${flags.png}`} alt={flags.alt} />
            </header>
            <div className='card_content'>
                <h3>{name}</h3>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </div>
        </article>
    );
}
