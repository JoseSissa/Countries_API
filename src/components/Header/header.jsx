import React from 'react';
import { Link } from 'wouter'
import './header.css'



export function Header({ search, updateSearch, updateContinent, viewFilter = false }) {

    const darkMode = () => {
        console.log('Dark mode');
    }

    const handleChange = (e) => {
        updateSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Envío del form', e);
    }

    const handleContinent = (e) => {
        updateContinent(e.target.value)
    }

    return ( 
        <header>
            <div className='header_title'>
                <div>
                    <Link href='/'><h3>Where in the world?</h3></Link>
                    <button className='dark_mode_button' onClick={darkMode}>
                        <img src="../../../public/icons/dark-mode-white.svg" alt="Icon dark mode" />
                        Dark mode
                    </button>
                </div>
            </div>

            {
                viewFilter
                    ?
                        <div className='filters'>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="searchCountry" className='searchCountry'>
                                    <img src="../../../public/icons/search-white.svg" className='searchIcon' alt="Search icon" />
                                    <input onChange={handleChange} value={search} id='searchCountry' placeholder='Search for a country' type="text" />
                                </label>

                                <select onChange={handleContinent} placeholder="Filter by region" >
                                    <option value="">All</option>
                                    <option value="Africa">Africa</option>
                                    <option value="Americas">America</option>
                                    <option value="Asia">Asia</option>
                                    <option value="Europe">Europe</option>
                                    <option value="Oceania">Oceania</option>
                                </select>

                            </form>
                        </div>
                    :   false
            }

            
        </header>
    );
}
