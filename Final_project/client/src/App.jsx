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
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>}> </Route>
      <Route path='/addtour' element={<Addtour/>}> </Route>
      <Route path='/viewtour' element={<Viewtour/>} />
      <Route path='/edittour' element={<Edittour/>} />
    </Routes>
  </BrowserRouter>
  </>
}

export default App
