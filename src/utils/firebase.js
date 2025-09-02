// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaK7ZpId16EGFlYEre-iD40gOYSqrchKM",
  authDomain: "netflixai-92a26.firebaseapp.com",
  projectId: "netflixai-92a26",
  storageBucket: "netflixai-92a26.firebasestorage.app",
  messagingSenderId: "198494100446",
  appId: "1:198494100446:web:32447687f0c57732b29b4f",
  measurementId: "G-HP003BNCKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
