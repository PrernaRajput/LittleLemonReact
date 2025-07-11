import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  test('renders form fields and submits with valid data', async () => {
    const handleSubmit = jest.fn();

    render(<BookingForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Date/i), {
      target: { value: '2025-08-01' },
    });
    fireEvent.change(screen.getByLabelText(/Time/i), {
      target: { value: '19:00' },
    });
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), {
      target: { value: 2 },
    });
    fireEvent.change(screen.getByLabelText(/City/i), {
      target: { value: 'New York' },
    });
    fireEvent.change(screen.getByLabelText(/Postal Code/i), {
      target: { value: '10001' },
    });

    fireEvent.click(screen.getByText(/Reserve/i));

    expect(handleSubmit).toHaveBeenCalled();
  });
});
