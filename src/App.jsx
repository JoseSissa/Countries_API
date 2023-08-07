import { Route } from "wouter";

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';

import './App.css'


function App() {

  

  return (
    <main className="App">      

      <Route path="/">
        <Home />
      </Route>

      <Route path='/detail/:name' component={Detail} />

    </main>
  )
}

export default App
