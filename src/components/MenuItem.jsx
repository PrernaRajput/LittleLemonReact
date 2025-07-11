import React from 'react';
import { motion } from 'framer-motion';
import '../styles/MenuItem.scss';

const MenuItem = ({ item, onAddToCart }) => {
  return (
    <motion.div
      className="menu-item"
      role="group"
      aria-label={`Menu item: ${item.name}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <img src={item.image} alt={item.name} className="menu-image" />
      <div className="menu-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="menu-meta">
          <span className="price">₹{item.price}</span>
          <button
            onClick={() => onAddToCart(item)}
            aria-label={`Add ${item.name} to cart`}
          >
            Add to Cart
          </button>
        </div>
        <p className="rating" aria-label={`Rated ${item.rating} stars by ${item.reviews} reviewers`}>
          ⭐ {item.rating} ({item.reviews})
        </p>
      </div>
    </motion.div>
  );
};

export default MenuItem;
