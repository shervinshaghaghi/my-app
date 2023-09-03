import React, { useState, useEffect } from "react";
import { fetchAPI, submitAPI } from "./Api";

function BookingForm({ onBookingSuccess }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const [availableTimes, setAvailableTimes] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    // Custom validation logic
    const isValid =
      formData.date !== "" &&
      formData.time !== "" &&
      formData.guests !== "" &&
      formData.guests >= 1; // Additional validation for guests

    setIsFormValid(isValid);
  };

  useEffect(() => {
    validateForm(); // Validate the form whenever inputs change
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitAPI(formData);
      if (response === true) {
        onBookingSuccess();
      } else {
        console.error("Booking failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const fetchAvailableTimes = async (selectedDate) => {
    try {
      const times = await fetchAPI(selectedDate);
      setAvailableTimes(times);
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  };

  useEffect(() => {
    if (formData.date) {
      fetchAvailableTimes(formData.date);
    }
  }, [formData.date]);

  return (
    <div>
      <h2>Reservation Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="guests">Number of Guests:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
            min="1"
          />
        </div>
        <div>
          <label htmlFor="occasion">Occasion:</label>
          <input
            type="text"
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" disabled={!isFormValid}>
            Submit Reservation
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
