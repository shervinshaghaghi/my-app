import React from 'react';
import logo from '../Assets/Little-Lemon.png';
import '../Styles.css';

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" />
       <h1>Welcome to your Little Lemon restaurant!</h1>
      {/* Your header content */}
    </header>
  );
}

export default Header;