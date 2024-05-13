// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnu5YT93tTD8BsaNK6WaLTZA0JUhsRr_k",
  authDomain: "todolistapp-85f2d.firebaseapp.com",
  projectId: "todolistapp-85f2d",
  storageBucket: "todolistapp-85f2d.appspot.com",
  messagingSenderId: "407783124175",
  appId: "1:407783124175:web:e9e2e18e44672ce7009bba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;