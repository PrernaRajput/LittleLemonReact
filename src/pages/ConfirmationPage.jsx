import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/ConfirmationPage.scss';
import DeliveryTracker from '../components/DeliveryTracker';

const stages = ['Preparing', 'Out for Delivery', 'Delivered'];

const ConfirmationPage = () => {
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStageIndex((prev) => (prev < stages.length - 1 ? prev + 1 : prev));
    }, 2000); // advance every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="confirmation-page" role="main" aria-label="Order Confirmation Page">
      <motion.div
        className="confirmation-box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2>🎉 Order Confirmed!</h2>
        <p>Your meal is on the way.</p>

        <div className="tracker">
          <DeliveryTracker />
        </div>
      </motion.div>
    </div>
  );
};

export default ConfirmationPage;
