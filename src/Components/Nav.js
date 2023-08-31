import React from 'react';
import '../Styles.css';

function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/specials">Specials</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;