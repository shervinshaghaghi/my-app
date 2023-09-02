import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css';

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/BookingPage">BookingPage</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
