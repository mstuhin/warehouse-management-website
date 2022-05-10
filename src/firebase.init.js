// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCi72y-jEGpkhEeAG3XeJs18v9ArWRdsAc",
    authDomain: "hero-warehouse.firebaseapp.com",
    projectId: "hero-warehouse",
    storageBucket: "hero-warehouse.appspot.com",
    messagingSenderId: "572245253829",
    appId: "1:572245253829:web:d12617f55d1e826bd59aac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;