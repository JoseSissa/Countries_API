import React from 'react';
import './header.css'

function Header() {

    const darkMode = () => {
        console.log('Dark mode');
    }
    const searchCountry = (e) => {
        console.log(e.target.value);
    }

    return ( 
        <header>
            <div className='header_title'>
                <h3>where in the world?</h3>
                <button className='dark_mode_button' onClick={darkMode}>Dark mode</button>
            </div>
            <input onChange={searchCountry} placeholder='Search for a country' type="text" />
        </header>
    );
}

export default Header;