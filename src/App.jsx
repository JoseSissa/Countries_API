import { useState, useEffect } from 'react'
import './App.css'

import { Header } from './components/Header/Header.jsx'
import { SearchCountry } from './components/SearchCountry/SearchCountry'
import { SelectContinent } from './components/SelectContinent/SelectContinent.jsx'
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
      <Header />
      <SearchCountry 
        allCountry={allCountry}
        renderCountries={renderCountries}
        setRenderCountries={setRenderCountries}
      />
      <SelectContinent 
        allCountry={allCountry}
        renderCountries={renderCountries}
        setRenderCountries={setRenderCountries}
      />
      <article className='countries_content'>
        {
          renderCountries.map((elem, i) => {
            return (
              <Card country={elem} key={`${elem.capital}${i}`}/>
            )
          })
        }
      </article>
    </main>
  )
}

export default App
