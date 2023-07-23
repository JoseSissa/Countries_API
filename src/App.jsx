import { useState, useEffect } from 'react'
import './App.css'

import { Header } from './components/Header/Header.jsx'
import { SearchCountry } from './components/SearchCountry/SearchCountry'
import { SelectContinent } from './components/SelectContinent/SelectContinent.jsx'
import { Card } from './components/Card/Card.jsx'

function App() {

  const [allCountry, setAllCountry] = useState([]);
  // const [renderCountries, setRenderCountries] = useState([]);

  console.log(allCountry);

  return (
    <main className="App">
      <Header />
      <SearchCountry setAllCountry={setAllCountry} />
      <SelectContinent setAllCountry={setAllCountry} />
      <article className='countries_content'>
        {
          allCountry.map((elem, i) => {
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
