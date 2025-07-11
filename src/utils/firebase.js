// Firebase Web SDK v9 Modular
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'mock-api-key',
  authDomain: 'mock-auth.firebaseapp.com',
  projectId: 'little-lemon-mock',
  storageBucket: 'mock.appspot.com',
  messagingSenderId: '1234567890',
  appId: 'mock-app-id'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
