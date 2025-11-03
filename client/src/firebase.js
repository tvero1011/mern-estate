// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-27d63.firebaseapp.com",
  projectId: "mern-estate-27d63",
  storageBucket: "mern-estate-27d63.firebasestorage.app",
  messagingSenderId: "47670236653",
  appId: "1:47670236653:web:35daf798defb74580943e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);