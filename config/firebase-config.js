// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyD75hOEkFY22VEjzm3uoLABOG22Tdd2mXU',
  authDomain: 'artmateur-app.firebaseapp.com',
  projectId: 'artmateur-app',
  storageBucket: 'artmateur-app.firebasestorage.app',
  messagingSenderId: '888337343159',
  appId: '1:888337343159:web:99d5abb5d7e1f678e86332',
  databaseURL:
    'https://artmateur-app-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
