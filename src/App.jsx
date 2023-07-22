import { useState, useEffect } from 'react'
import './App.css'

import { Header } from './Header/Header.jsx'
import { SelectContinent } from './SelectContinent/SelectContinent.jsx'
import { Card } from './Card/Card.jsx'
import { SearchCountry } from './SearchCountry/SearchCountry'

const COUNTRIES_ENDPOINT_ALL = 'https://restcountries.com/v3.1/all'

function App() {

  const [country, setCountry] = useState([]);
  const [region, setRegion] = useState('all');

  console.log(region);
  console.log(country);

  useEffect(() => {
    fetch(COUNTRIES_ENDPOINT_ALL)
      .then(res => res.json())
      .then(res => setCountry(res))
  }, []);

  return (
    <main className="App">
      <Header />
      <SearchCountry setCountry={setCountry} />
      <SelectContinent setRegion={setRegion} />
      <article className='countries_content'>
        {
          country.map((elem, i) => {
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
