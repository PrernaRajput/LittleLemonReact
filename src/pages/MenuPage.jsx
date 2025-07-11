import React, { useState } from 'react';
import MenuItem from '../components/MenuItem';
import '../styles/MenuPage.scss';
import { useCart } from '../utils/CartContext';
import { toast } from 'react-toastify';

const initialMenu = [
    {
        id: 1,
        name: 'Greek Salad',
        description: 'Fresh lettuce, tomatoes, olives, and feta cheese.',
        price: 250,
        image: '/assets/images/greekSalad.jpg',
        category: 'Salads',
        rating: 4,
        reviews: 21,
    },
    {
        id: 2,
        name: 'Pasta Primavera',
        description: 'Classic Italian pasta with seasonal veggies.',
        price: 320,
        image: '/assets/images/pasta.jpg',
        category: 'Mains',
        rating: 5,
        reviews: 42,
    },
    {
        id: 3,
        name: 'Calamari',
        description: 'Crispy golden fried squid rings.',
        price: 280,
        image: '/assets/images/calamari.jpg',
        category: 'Starters',
        rating: 3,
        reviews: 10,
    },
    {
        id: 4,
        name: 'Falafel Wrap',
        description: 'Crispy falafel in pita with veggies and tahini.',
        price: 230,
        image: '/assets/images/falafel.jpg',
        category: 'Wraps',
        rating: 5,
        reviews: 30,
    },
];

const MenuPage = () => {
    const [menuItems] = useState( initialMenu );
    const [category, setCategory] = useState( 'All' );
    const { addToCart } = useCart();
    const filteredItems =
        category === 'All'
            ? menuItems
            : menuItems.filter( ( item ) => item.category === category );


    const handleAddToCart = ( item ) => {
        addToCart( { ...item, quantity: 1 } );
        toast.success( `${item.name} added to cart!` );
    };

    const categories = ['All', ...new Set( menuItems.map( ( item ) => item.category ) )];

    return (
        <div className="menu-page" role="main" aria-label="Menu Page">
            <h2>Our Menu</h2>
            <div className="menu-filters" role="tablist">
                {categories.map( ( cat ) => (
                    <button
                        key={cat}
                        onClick={() => setCategory( cat )}
                        className={category === cat ? 'active' : ''}
                        role="tab"
                        aria-selected={category === cat}
                    >
                        {cat}
                    </button>
                ) )}
            </div>
            <div className="menu-list">
                {filteredItems.map( ( item ) => (
                    <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart} />
                ) )}
            </div>
        </div>
    );
};

export default MenuPage;
