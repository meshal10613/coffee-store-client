// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmuwn8dAfO1VzSn_lzfrg40lnNuy9lB5c",
    authDomain: "coffee-store-app-9d742.firebaseapp.com",
    projectId: "coffee-store-app-9d742",
    storageBucket: "coffee-store-app-9d742.firebasestorage.app",
    messagingSenderId: "139729413874",
    appId: "1:139729413874:web:0c0e94c7dca869be1bd26b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);