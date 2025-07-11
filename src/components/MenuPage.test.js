import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MenuPage from './MenuPage';
import { CartProvider } from '../utils/CartContext';

test('filters menu items by category', () => {
  render(
    <CartProvider>
      <MenuPage />
    </CartProvider>
  );

  // Click on "Salads"
  fireEvent.click(screen.getByRole('tab', { name: /Salads/i }));

  const item = screen.getByLabelText(/Menu item Greek Salad/i);
  expect(item).toBeInTheDocument();

  // Should not find other categories now
  expect(screen.queryByLabelText(/Menu item Pasta Primavera/i)).toBeNull();
});
