// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-blog-3e72d.firebaseapp.com",
  projectId: "next-blog-3e72d",
  storageBucket: "next-blog-3e72d.firebasestorage.app",
  messagingSenderId: "179445529086",
  appId: "1:179445529086:web:238fd8886c6c15f23fe8af"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);