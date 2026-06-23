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
import Cart from './pages/Cart';
import Footer from "./components/Footer";

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
      <Route path="/cart" element={<Cart />} />
      

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

    <section className="bg-gray-100 py-16 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-green-700 mb-6">
      About Us
    </h2>

    <p className="text-gray-700 text-lg leading-8">
      Welcome to WanderWay Tours & Travels! We are passionate about helping
      travelers discover the beauty of the world through unforgettable journeys.
      Whether you're planning a relaxing vacation, an adventurous getaway, a
      family holiday, or a romantic trip, we are here to make your travel
      experience smooth, enjoyable, and memorable.
    </p>

    <div className="grid md:grid-cols-3 gap-6 mt-10">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-bold text-xl mb-2">Affordable Tours</h3>
        <p>Best travel packages at reasonable prices.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-bold text-xl mb-2">Trusted Service</h3>
        <p>Reliable booking and excellent customer support.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-bold text-xl mb-2">Memorable Trips</h3>
        <p>Create unforgettable memories with your loved ones.</p>
      </div>
    </div>
  </div>
</section>
    
    <Footer/>
   </BrowserRouter>
  </>
}

export default App
