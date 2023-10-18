// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkjwIbP0DcBY2jkhcyY9AUVSTx83NPnxA",
    authDomain: "automotiv-brand-shop.firebaseapp.com",
    projectId: "automotiv-brand-shop",
    storageBucket: "automotiv-brand-shop.appspot.com",
    messagingSenderId: "181340456260",
    appId: "1:181340456260:web:fe41dd88318dfa5f108311"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth