import { useState, useEffect, useCallback } from 'react'
import debounce from "just-debounce-it";
import './App.css'

import { Header } from './components/Header/Header.jsx'
import { Card } from './components/Card/Card.jsx'
import { useCountries } from './hooks/useCountries.js'

function App() {

  const { countries, getCountries, loading } = useCountries()
  const [search, updateSearch] = useState('')


  // Como en cada render se crea un nuevo debounce entonces hay que usar el useCallback
  const debounceGetCountries = useCallback(
    debounce(({ search }) => {
        getCountries({ search })
    }, 350)
    , []
  )

  useEffect(() => {    
    debounceGetCountries({ search })
  }, [search]);

  return (
    <main className="App">
      <Header search={search} updateSearch={updateSearch} />
      <section className='countries_content'>
        {
          loading 
            ? <p>Cargando ...</p>
            : countries.map((elem, i) => {
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
