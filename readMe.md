🍋 Little Lemon React App
A fully functional and accessible React web application for the fictional restaurant Little Lemon, featuring booking, menu browsing, checkout, delivery tracking, and admin dashboard.

Features
Booking Form with validation (react-hook-form + Yup)

Geolocation-based autofill (City & Postal Code)

Browsable Menu with category filters and customer reviews

Checkout Flow:

Cart management with localStorage persistence

Multi-step progress bar

Apply coupon codes

Order Confirmation and Mock Email/SMS Confirmation

Delivery Tracker: Preparing → Out for Delivery → Delivered (with animation)

Dark Mode Toggle with useContext + localStorage

Login/Signup Authentication (Simulated with Firebase)

Admin Dashboard to view all orders/bookings

Accessibility (ARIA roles, keyboard nav, semantic HTML)

Mobile Responsive Design using Sass

Smooth Animations with Framer Motion

Unit Testing using Jest + React Testing Library

Lighthouse Optimized (90+ score on Performance, SEO, Accessibility)

📦 Project Structure
csharp
Copy
Edit
little-lemon/
├── public/
├── src/
│ ├── assets/ # Images & media
│ ├── components/ # Reusable components
│ ├── pages/ # Routes: Booking, Menu, Checkout, etc.
│ ├── utils/ # Helper functions (auth, cart, geolocation)
│ ├── App.js
│ ├── App.scss
│ ├── index.js
│ └── index.css
├── package.json
├── App.test.js
└── README.md
🧪 Testing
Run unit tests for:

Booking Form Validation

Menu Filtering

Reservation Logic

bash
Copy
Edit
npm test
🛠️ Setup Instructions
Install Dependencies

bash
Copy
Edit
npm install
Run the App

bash
Copy
Edit
npm start
Run Tests

bash
Copy
Edit
npm test
Firebase Auth Setup (Mock)
You can simulate login/signup with Firebase. Replace the firebaseConfig in utils/firebase.js with your Firebase project's config if needed.

Deployment
This app is ready for deployment:

Host on Vercel or Netlify

Set environment variables if using Firebase

Lighthouse optimization score: 90+

Admin Access
Use /admin route to access the mock Admin Dashboard showing all reservations/orders.
