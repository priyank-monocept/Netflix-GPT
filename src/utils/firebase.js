// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPgCQ_rAJSLA7fVqSg2oLKuswoov0D0sA",
  authDomain: "netflixgpt-a5042.firebaseapp.com",
  projectId: "netflixgpt-a5042",
  storageBucket: "netflixgpt-a5042.appspot.com",
  messagingSenderId: "63200846616",
  appId: "1:63200846616:web:518ea08df6f556caa2746d",
  measurementId: "G-7J9KE228DS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


export const auth = getAuth(app);
