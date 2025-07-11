import React, { useState } from 'react';
import { auth } from '../utils/firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import '../styles/AuthPage.scss';
import { toast } from 'react-toastify';


const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = async () => {
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success('Signup successful!');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Login successful!');
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="auth-page" role="main" aria-label="Auth Page">
      <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
      <input
        type="email"
        placeholder="Email"
        aria-label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        aria-label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAuth}>
        {isSignup ? 'Create Account' : 'Login'}
      </button>
      <p>
        {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;
