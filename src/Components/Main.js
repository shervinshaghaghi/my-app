// Main.js
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import Menu from "./Menu";
import About from "./About";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { submitAPI } from "./Api"; // Import the submitAPI function

// ... other code ...

function Main() {
  const navigate = useNavigate();

  // ...

  const submitForm = async (formData) => {
    try {
      const response = await submitAPI(formData); // Use the imported submitAPI function
      if (response === true) {
        navigate("/confirmed");
      } else {
        console.error("Booking failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // ...

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/BookingPage"
          element={<BookingPage submitForm={submitForm} />}
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
