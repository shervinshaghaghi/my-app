import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // Import the homepage component
import Menu from './Menu';
import About from './About';
import Contact from './Contact';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Render HomePage as the root route */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes for other pages */}
      </Routes>
    </main>
  );
}

export default Main;
