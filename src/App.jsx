import { useState } from 'react'
import './App.css'

import Header from './Header/Header.jsx'
import SelectRegion from './SelectRegion/selectRegion.jsx'
import Card from './Card/card.jsx'

function App() {

  return (
    <div className="App">
      <Header />
      <SelectRegion />
      <Card />
      
    </div>
  )
}

export default App
