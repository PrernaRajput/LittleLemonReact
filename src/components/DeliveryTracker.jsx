import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/DeliveryTracker.scss';

const DeliveryTracker = () => {
  const [stage, setStage] = useState(0);
  const stages = ['Preparing', 'Out for Delivery', 'Delivered'];

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev < stages.length - 1 ? prev + 1 : prev));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="delivery-tracker" role="status" aria-label="Delivery Tracker">
      {stages.map((label, i) => (
        <motion.div
          key={label}
          className={`stage ${i <= stage ? 'active' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.3 }}
        >
          {label}
        </motion.div>
      ))}
    </div>
  );
};

export default DeliveryTracker;
