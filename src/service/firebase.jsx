// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//ej env import.meta.env.VITE_FIREBASE_API_KEY
const firebaseConfig = {
    apiKey: "AIzaSyDvL7vmesohqq-wTxkldErFjUe2ipIVyV0",
    authDomain: "peralta-coder-flex-73870.firebaseapp.com",
    projectId: "peralta-coder-flex-73870",
    storageBucket: "peralta-coder-flex-73870.firebasestorage.app",
    messagingSenderId: "292728057519",
    appId: "1:292728057519:web:3e48ee884179f3fbaeee5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
