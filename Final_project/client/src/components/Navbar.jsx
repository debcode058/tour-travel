import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useAuth} from "../context/AuthContext"

const Navbar = () => {
const {user,logout} = useAuth();
const navigate = useNavigate();



const handleLogout = ()=> {
  logout();
  navigate("/login");
}


  return <>
  <div className='bg-gray-700 shadow'>
    <div className='flex justify-between  p-4 container items-center mx-auto'>
        <Link to="/" className='text-white font-bold text-2xl mx-6'>Tour&Travel</Link>
        <div className='flex gap-3 text-white font-semibold text-lg '>
             <Link to="/home" className='hover:text-sky-400'>Home</Link>
              <Link to="/cart" className='hover:text-sky-400'>Cart</Link>
             {user?.role === "admin" &&(
              <Link to="/addtour" className='hover:text-sky-400'>AddTour</Link>
             )}
              {!user ? (
                <>
                  <Link to="/login" className='hover:text-sky-400'>Login</Link>
                  <Link to="/register" className='hover:text-sky-400'>Register</Link>
               </>
              ) : (
                <>
                <span className='bg-white px-4 py-2 rounded-full text-black font-bold'>
                  {user.name} - {user.role}
                </span>
                <button onClick={handleLogout} className='bg-red-500 px-4 py-2 rounded-full text-white font-bold hover:bg-red-600'>
                  Logout
                </button>
                </>

              )}

        </div>
    </div>
  </div>
  
  
  </>
}

export default Navbar
