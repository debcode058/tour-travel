import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Addtour from './pages/Addtour'
import Viewtour from './pages/Viewtour'
import Edittour from './pages/Edittour'
import Navbar from "./components/Navbar"
import {useAuth} from "./context/AuthContext"
import { Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
function AdminRoute({children}) {
  const {user} = useAuth();
  if(!user){
    return <Navigate to="/login" />;
  }
  if(user.role !== "admin"){
    return <Navigate to="/home"/>;
  }
  return children;
}
const App = () => {
  return <>
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home />} />

      <Route path="/register" element={<Register />} />

      <Route path="/login" element={<Login />} />

     <Route
        path="/addtour"
        element={
        <AdminRoute>
        <Addtour />
        </AdminRoute>
    }
   />

    <Route
    path="/view/:id"
    element={<Viewtour />}
    />

    <Route
    path="/edit/:id"
    element={
      <AdminRoute>
        <Edittour />
      </AdminRoute>
    }
   />
    </Routes>
   </BrowserRouter>
  </>
}

export default App
