// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa7gK08lyJxL6braEBOA_uLiCSU22wzv8",
  authDomain: "hr-bot-auth.firebaseapp.com",
  projectId: "hr-bot-auth",
  storageBucket: "hr-bot-auth.appspot.com",
  messagingSenderId: "1008316402051",
  appId: "1:1008316402051:web:d0a2b023c18d5a24e08eb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app);

export default app;