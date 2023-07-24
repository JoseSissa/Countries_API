import { useState, useEffect } from 'react'
import './App.css'

import { Header } from './components/Header/Header.jsx'
import { Card } from './components/Card/Card.jsx'

import { API_URL } from './services/settings'

function App() {

  const [allCountry, setAllCountry] = useState([]);
  const [renderCountries, setRenderCountries] = useState([]);

  useEffect(() => {
    console.log('RENDER');
      fetch(API_URL)
        .then(res => res.json())
        .then(res => {
          setRenderCountries(res)
          setAllCountry(res)
        })
  }, [])

  return (
    <main className="App">
      <Header 
        allCountry={allCountry}
        renderCountries={renderCountries}
        setRenderCountries={setRenderCountries}
      />
      <section className='countries_content'>
        {
          renderCountries.map((elem, i) => {
            return (
              <Card country={elem} key={`${elem.capital}${i}`}/>
            )
          })
        }
      </section>
    </main>
  )
}

export default App
