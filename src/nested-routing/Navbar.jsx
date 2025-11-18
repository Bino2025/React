import { NavLink } from 'react-router-dom';
import './Navbar.css';

import React, { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () => setMenuOpen(!menuOpen);



  return (
    <nav>
      {/* logo */}

      <NavLink to='/' className='logo'>Mywebsite</NavLink>

      {/* Hamburger Menu */}

      <div className="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* nav links */}
      <ul className={menuOpen ? "show" : ""}>

        {/* Homepage */}
        <li>
            <NavLink to='/' className={({isActive})}>

            </NavLink>
        </li>
      </ul>
      
    </nav>
  )
}

export default Navbar
