// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9IcB5jaQn8JE8FoYJSiKoAhIOyszJK8M",
  authDomain: "cineshare-app.firebaseapp.com",
  projectId: "cineshare-app",
  storageBucket: "cineshare-app.firebasestorage.app",
  messagingSenderId: "860723621777",
  appId: "1:860723621777:web:b9ce57a527a8b35e2bf430"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);