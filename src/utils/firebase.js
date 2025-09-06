// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyNjvNKilart908fNq6MZK6Gm5mOJBThY",
  authDomain: "react-movie-app-f2504.firebaseapp.com",
  projectId: "react-movie-app-f2504",
  storageBucket: "react-movie-app-f2504.firebasestorage.app",
  messagingSenderId: "775656936608",
  appId: "1:775656936608:web:1fd1623981dbf7e00265c5",
  measurementId: "G-889EBRBH9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
