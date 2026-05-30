import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return <>
  <div className='bg-green-700 shadow'>
    <div className='flex justify-between  p-4 container items-center mx-auto'>
        <Link to="/" className='text-white font-bold text-2xl mx-6'>Tour&Travel</Link>
        <div className='flex gap-3 text-white font-semibold text-lg '>
             <Link to="/home" className='hover:text-sky-400'>Home</Link>
              <Link to="/addtour" className='hover:text-sky-400'>AddTour</Link>
              <Link to="/viewtour" className='hover:text-sky-400'>ViewTour</Link>
              <Link to="/edittour" className='hover:text-sky-400'>EditTour</Link>

        </div>
    </div>
  </div>
  
  
  </>
}

export default Navbar
