import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import MenuPage from './pages/MenuPage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage';
import AuthPage from './pages/AuthPage';
import AdminDashboard from './pages/AdminDashboard';
import { useCart } from './utils/CartContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import { ToastContainer } from 'react-toastify';
import './App.scss';

function App () {
    const { cart } = useCart();

    return (
        <Router>
            <div className="app">
        <ToastContainer position="top-right" autoClose={3000} />

                <main>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path="/" element={<MenuPage />} />
                            <Route path="/booking" element={<BookingPage />} />
                            <Route path="/checkout" element={<CheckoutPage />} />
                            <Route path="/confirmation" element={<ConfirmationPage />} />
                            <Route path="/auth" element={<AuthPage />} />
                            <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
                        </Route>
                    </Routes>
                </main>

                <footer className="footer">
                    <p>© {new Date().getFullYear()} Little Lemon</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
