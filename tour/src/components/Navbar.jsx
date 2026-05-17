import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return <>
  <haeder className="header">
    <nav className="navbar">
      <h1 className="logo">TOUR & TRAVEL</h1>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        
      </ul>
    </nav>
  </haeder>
  
  </>
  
}

export default Navbar
