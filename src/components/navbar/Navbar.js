import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <button className='nav_list'>
        <Link to="/" className='nav_link'>Home</Link>
      </button>
      <button className='nav_list'>
        <Link to="/about" className='nav_link'>About</Link>
      </button>
    </div>
  )
}

export default Navbar
