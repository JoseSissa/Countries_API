import { useState } from 'react'
import { Route, useLocation } from "wouter";
import './App.css'

import Header from './components/Header/Header.jsx'
import Home from './Pages/Home.jsx'

function App() {

  return (
    <div className="App">
      <Header />

      <Route path="/" component={Home} />
      
    </div>
  )
}

export default App
