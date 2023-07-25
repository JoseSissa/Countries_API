import React, { useState } from 'react';
import './header.css'

export function Header({ allCountry, setRenderCountries }) {

    const [searchCountryText, setSearchCountryText] = useState('');
    const [searchContinent, setSearchContinent] = useState('all');

    const filterForContinent = ({ continent, listOfCountries }) => {
        let result = []
        if(continent === 'all') {
            result = listOfCountries
        } else if(continent === 'Africa') {
            result = listOfCountries.filter(elem => {
                return (
                    elem.region === continent
                )
            })
        } else if(continent === 'Americas') {
            result = listOfCountries.filter(elem => {
                return (
                    elem.region === continent
                )
            })
        } else if(continent === 'Asia') {
            result = listOfCountries.filter(elem => {
                return (
                    elem.region === continent
                )
            })
        } else if(continent === 'Europe') {
            result = listOfCountries.filter(elem => {
                return (
                    elem.region === continent
                )
            })
        } else if (continent === 'Oceania') {
            result = listOfCountries.filter(elem => {
                return (
                    elem.region === continent
                )
            })
        }
        return result
    }
    const filterForNameCountry = ({ country, listOfCountries }) => {
        let result = []
        if (country.toLowerCase() === '') {
            return listOfCountries
        }else {
            result = listOfCountries.filter(elem => {
                const nameOfCountry = elem.name.official.toLowerCase()
                return (
                    nameOfCountry.includes(country)
                )
            })
        }
        return result
    }

    const searchCountry = (e) => {
        const country = e.target.value.toLowerCase();
        setSearchCountryText(e.target.value.toLowerCase())

        let filter = []
        
        if(searchContinent == 'all') {
            filter = filterForNameCountry({ country, listOfCountries: allCountry })
        }else {
            let filterByContinent = filterForContinent({ continent: searchContinent, listOfCountries: allCountry })
            filter = filterForNameCountry({ country, listOfCountries: filterByContinent })
        }
        setRenderCountries(filter)
    }
    const handleContinent = (e) => {
        let filter = []
        setSearchContinent(e.target.value)
        const continent = e.target.value

        if(searchCountryText == '') {
            filter = filterForContinent({ continent, listOfCountries: allCountry })
        } else {
            const filterByText = filterForNameCountry({ country: searchCountryText, listOfCountries: allCountry })
            filter = filterForContinent({ continent, listOfCountries: filterByText })
        }
        setRenderCountries(filter)
    }

    const darkMode = () => {
        console.log('Dark mode');
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
                <label htmlFor="searchCountry" className='searchCountry'>
                    <img src="../../../public/icons/search-white.svg" className='searchIcon' alt="Search icon" />
                    <input onChange={searchCountry} id='searchCountry' placeholder='Search for a country' type="text" />
                </label>

                <select onChange={handleContinent} placeholder="Filter by region" >
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>

            
        </header>
    );
}
