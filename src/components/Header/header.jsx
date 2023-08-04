import React, { useCallback, useState } from 'react';
import './header.css'
import { useCountries } from '../../hooks/useCountries';



export function Header({ search, updateSearch }) {

    
    const { countries, getCountries, loading } = useCountries()

    const darkMode = () => {
        console.log('Dark mode');
    }

    // Como en cada render se crea un nuevo debounce entonces hay que usar el useCallback
    // const debounceGetCountries = useCallback(
    //     debounce(({ search }) => {
    //         getCountries({ search })
    //         // setRenderCountries(listCountries)
    //     }, 500)
    //     , []
    // )

    const handleChange = (e) => {
        const newSearch = e.target.value
        updateSearch(newSearch)
        // debounceGetCountries({ search: newSearch })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Envío del form', e);
    }

    const handleContinent = (e) => {
        console.log('Select', e.target.value);
    }

    return ( 
        <header>
            <div className='header_title'>
                <div>
                    <h3>Where in the world?</h3>
                    <button className='dark_mode_button' onClick={darkMode}>
                        <img src="../../../public/icons/dark-mode-white.svg" alt="Icon dark mode" />
                        Dark mode
                    </button>
                </div>
            </div>

            <div className='filters'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="searchCountry" className='searchCountry'>
                        <input onChange={handleChange} value={search} id='searchCountry' placeholder='Search for a country' type="text" />
                        <button className='searchCountry-button' type='submit'>
                            <img src="../../../public/icons/search-white.svg" className='searchIcon' alt="Search icon" />
                        </button>
                    </label>

                    <select onChange={handleContinent} placeholder="Filter by region" >
                        <option value="all">All</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>

                </form>
            </div>

            
        </header>
    );
}
