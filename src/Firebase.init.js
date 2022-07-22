// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2dNY9CSjyl6BjBaCuQz9LwBOAi3xJpTw",
  authDomain: "e-shop-45905.firebaseapp.com",
  projectId: "e-shop-45905",
  storageBucket: "e-shop-45905.appspot.com",
  messagingSenderId: "1007698866267",
  appId: "1:1007698866267:web:3f8a7314ea7a24c2868f7e",
  measurementId: "G-G9ZK0WSRY8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
