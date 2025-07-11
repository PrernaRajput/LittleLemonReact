import React, { useEffect, useState } from 'react';
import '../styles/AdminDashboard.scss';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate fetch from localStorage (or replace with API later)
    const mockBookings = JSON.parse(localStorage.getItem('mockBookings')) || [
      {
        name: 'John Doe',
        email: 'john@example.com',
        date: '2025-07-21',
        time: '18:30',
        guests: 2,
        city: 'Delhi',
        postalCode: '110001',
      },
    ];

    const mockOrders = JSON.parse(localStorage.getItem('mockOrders')) || [
      {
        id: 101,
        customer: 'Jane Smith',
        items: ['Greek Salad', 'Pasta Primavera'],
        total: 570,
      },
    ];

    setBookings(mockBookings);
    setOrders(mockOrders);
  }, []);

  return (
    <div className="admin-dashboard" role="main" aria-label="Admin Dashboard">
      <h2>🧑‍💼 Admin Dashboard</h2>

      <section>
        <h3>📅 Bookings</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th><th>Email</th><th>Date</th><th>Time</th><th>Guests</th><th>City</th><th>Postal Code</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, idx) => (
              <tr key={idx}>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{b.date}</td>
                <td>{b.time}</td>
                <td>{b.guests}</td>
                <td>{b.city}</td>
                <td>{b.postalCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h3>🍽 Orders</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th><th>Customer</th><th>Items</th><th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.customer}</td>
                <td>{o.items.join(', ')}</td>
                <td>₹{o.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminDashboard;
