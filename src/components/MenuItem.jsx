import React from 'react';
import { motion } from 'framer-motion';
import '../styles/MenuItem.scss';

const MenuItem = ({ item, onAddToCart }) => {
  return (
    <motion.div
      className="menu-item"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      role="article"
      aria-label={`Menu item ${item.name}`}
      tabIndex="0"
    >
      <img src={item.image} alt={item.name} />
      <div className="menu-info">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <strong>₹{item.price}</strong>
        <div className="rating">
          {'⭐'.repeat(item.rating)} ({item.reviews} reviews)
        </div>
        <button onClick={() => onAddToCart(item)} aria-label={`Add ${item.name} to cart`}>
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default MenuItem;
