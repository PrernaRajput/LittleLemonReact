import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Little Lemon React/i);
  expect(linkElement).toBeInTheDocument();
});