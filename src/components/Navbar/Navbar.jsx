import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => (
  <nav className='app_navbar'>
    <div className='app_navbar-logo'>
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className='app_navbar-links'>
      <li className='p_opensans'><a href='#home'>Home</a></li>
      <li className='p_opensans'><a href='#home'>About</a></li>
      <li className='p_opensans'><a href='#home'>Menu</a></li>
      <li className='p_opensans'><a href='#home'>Awards</a></li>
      <li className='p_opensans'><a href='#home'>Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
