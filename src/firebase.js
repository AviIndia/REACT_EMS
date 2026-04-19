// Import the functions you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your config
const firebaseConfig = {
  apiKey: "AIzaSyA-Vy8lprOF3r0wMk_dnM73Asr5_Pc-mwA",
  authDomain: "emstest-bb1da.firebaseapp.com",
  projectId: "emstest-bb1da",
  storageBucket: "emstest-bb1da.firebasestorage.app",
  messagingSenderId: "511014203161",
  appId: "1:511014203161:web:1428310dee36c13c3cdf88",
  measurementId: "G-H3PM6ZCLRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔥 Firestore DB
export const db = getFirestore(app);