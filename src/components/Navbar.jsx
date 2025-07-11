import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { useCart } from '../utils/CartContext';
import '../styles/Navbar.scss';

const Navbar = () => {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">🍋 Little Lemon</Link>
      </div>

      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation menu">
        ☰
      </button>

      <div className={`nav-center ${open ? 'open' : ''}`}>
        <Link to="/" onClick={() => setOpen(false)}>Menu</Link>
        <Link to="/booking" onClick={() => setOpen(false)}>Booking</Link>
        <Link to="/checkout" onClick={() => setOpen(false)}>Checkout ({cart.length})</Link>
        <Link to="/admin" onClick={() => setOpen(false)}>Admin</Link>
        <Link to="/auth" onClick={() => setOpen(false)}>Login</Link>
      </div>

      <div className="nav-right">
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
