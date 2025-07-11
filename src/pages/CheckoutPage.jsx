import React, { useState } from 'react';
import { useCart } from '../utils/CartContext';
import { useNavigate } from 'react-router-dom';
import '../styles/CheckoutPage.scss';
import { toast } from 'react-toastify';

const CheckoutPage = () => {
    const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
    const [coupon, setCoupon] = useState( '' );
    const [discount, setDiscount] = useState( 0 );
    const navigate = useNavigate();

    const handleCouponApply = () => {
        if ( coupon.toLowerCase() === 'lemon10' ) {
            setDiscount( 0.1 );
            toast.success( 'Coupon applied! 10% discount.' );
        } else {
            toast.error( 'Invalid coupon code!' );
            setDiscount( 0 );
        }
    };

    const total = cart.reduce( ( acc, item ) => acc + item.price * item.quantity, 0 );
    const discountedTotal = total - total * discount;

    const handleConfirm = () => {
        clearCart();
        navigate( '/confirmation' );
    };

    return (
        <div className="checkout-page" role="main" aria-label="Checkout Page">
            <h2>Checkout</h2>

            <div className="progress-bar">
                <span className="active">Cart</span>
                <span>➝</span>
                <span>Info</span>
                <span>➝</span>
                <span>Confirm</span>
            </div>

            <ul className="cart-items">
                {cart.map( ( item ) => (
                    <li key={item.id} aria-label={`Cart item ${item.name}`}>
                        <div>
                            <strong>{item.name}</strong> — ₹{item.price} ×
                            <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={( e ) =>
                                    updateQuantity( item.id, Number( e.target.value ) )
                                }
                            />
                        </div>
                        <button onClick={() => removeFromCart( item.id )}>Remove</button>
                    </li>
                ) )}
            </ul>

            <div className="coupon-section">
                <label htmlFor="coupon">Have a coupon?</label>
                <input
                    id="coupon"
                    type="text"
                    value={coupon}
                    onChange={( e ) => setCoupon( e.target.value )}
                />
                <button onClick={handleCouponApply}>Apply</button>
            </div>

            <h3>Total: ₹{discountedTotal.toFixed( 2 )}</h3>

            <button onClick={handleConfirm} className="confirm-button">
                Confirm & Pay
            </button>
        </div>
    );
};

export default CheckoutPage;
