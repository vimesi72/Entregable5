
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRouters from './components/ProtectedRouters'

import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokedexInfo from './pages/PokedexInfo'


function App() {

  const trainer = useSelector(state => state.trainer)
  console.log(trainer)

  return (
    <div className="App ">

      <Routes>
        <Route path='/' element={<Home />} />

        {/* Rutas Protegidas*/}
        <Route element={<ProtectedRouters />} >
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokedexInfo />} />
        </Route>
      </Routes>


    </div>
  )
}

export default App
