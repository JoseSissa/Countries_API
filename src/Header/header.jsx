import React from 'react';
import './header.css'

export function Header() {

    const darkMode = () => {
        console.log('Dark mode');
    }

    return ( 
        <header>
            <div className='header_title'>
                <h3>Where in the world?</h3>
                <button className='dark_mode_button' onClick={darkMode}>Dark mode</button>
            </div>
            
        </header>
    );
}
