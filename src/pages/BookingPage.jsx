import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import { motion } from 'framer-motion';

const BookingPage = () => {
  const [confirmed, setConfirmed] = useState(false);
  const [details, setDetails] = useState(null);

  const handleBookingSubmit = (data) => {
    setConfirmed(true);
    setDetails(data);
    console.log("Booking Data:", data);

    // Simulate sending a confirmation email/SMS
    setTimeout(() => {
      console.log(`Confirmation email sent to ${data.email}`);
    }, 1000);
  };

  if (confirmed) {
    return (
      <motion.div
        className="confirmation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2>Reservation Confirmed 🎉</h2>
        <p>Thank you, <strong>{details.name}</strong>!</p>
        <p>We’ve reserved a table for you on <strong>{details.date}</strong> at <strong>{details.time}</strong>.</p>
        <p>A confirmation email has been sent to <strong>{details.email}</strong>.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="booking-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <BookingForm onSubmit={handleBookingSubmit} />
    </motion.div>
  );
};

export default BookingPage;
