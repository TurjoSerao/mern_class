// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOeSf9cO0Fd8C27sT_USqAAmq8STlMnWU",
  authDomain: "class-1964f.firebaseapp.com",
  projectId: "class-1964f",
  storageBucket: "class-1964f.firebasestorage.app",
  messagingSenderId: "629040431074",
  appId: "1:629040431074:web:b4d5c4ccec7c268cc783bb",
  measurementId: "G-F1N82SXV05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);