// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Rf70BoXlF9Y9OuGfGpHxYkZzEIaxLWg",
  authDomain: "pwaproyecto.firebaseapp.com",
  projectId: "pwaproyecto",
  storageBucket: "pwaproyecto.appspot.com",
  messagingSenderId: "976591203473",
  appId: "1:976591203473:web:8b188be689e110dfdba330"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);