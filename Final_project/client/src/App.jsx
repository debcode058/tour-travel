import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Addtour from './pages/Addtour'
import Viewtour from './pages/Viewtour'
import Edittour from './pages/Edittour'
import Navbar from './components/Navbar'
const App = () => {
  return <>
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/add/:id' element={<Addtour/>}> </Route>
      <Route path='/view/:id' element={<Viewtour/>}> </Route>
      <Route path='/edit/:id' element={<Edittour/>}> </Route>
    </Routes>
  </BrowserRouter>
  </>
}

export default App
