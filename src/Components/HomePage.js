import React from 'react';
import Header from '../Components/Header.js';
import Nav from '../Components/Nav.js';
import Specials from '../Components/Specials.js';
import Explanations from '../Components/Explanations.js';
import Footer from '../Components/Footer.js';

const specialCourses = [
  { id: 1, title: 'Course A', description: 'Special course for today.' },
  { id: 2, title: 'Course B', description: 'Another special course for today.' },
  // ... more special courses
];


function HomePage() {
  return (
    <>
      <Header />
      <Nav />
      {/* Your homepage content */}
      <Specials specialCourses={specialCourses} />
      <Explanations />
      <Footer />
    </>
  );
}

export default HomePage;
