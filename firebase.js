// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCHmTIRQvOHqoO0OYPCg7ERGiXqXt-uEtE',
  authDomain: 'disney-plus-clone-a2e08.firebaseapp.com',
  projectId: 'disney-plus-clone-a2e08',
  storageBucket: 'disney-plus-clone-a2e08.appspot.com',
  messagingSenderId: '872091262609',
  appId: '1:872091262609:web:b7c508d18f5a479a50a930',
  measurementId: 'G-B3J3S6LFDR',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
