import React from 'react';
import '../Styles.css';
import { Link } from 'react-router-dom';

function Explanations() {
  return (
    <main>
      <section className="hero">
        <img src="https://ik.imagekit.io/zenius/Coursera/html-css/little-lemon-pizzas_v269Oq2LM.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674426273890" alt="Restaurant Image" />
        <h1>Little Lemon Restaurant</h1>
        <p>Delicious Italian food in the heart of the city</p>
        <Link to="BookingPage">
          <button>Reserve a Table</button>
          </Link>
      </section>
    </main>
  );
}

export default Explanations;