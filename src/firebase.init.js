// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkwpNR6rOdCfaPPLOp6dDnJFATNJcPD9o",
    authDomain: "simple-firebase-authenti-cda22.firebaseapp.com",
    projectId: "simple-firebase-authenti-cda22",
    storageBucket: "simple-firebase-authenti-cda22.appspot.com",
    messagingSenderId: "294361061306",
    appId: "1:294361061306:web:dbf903582972e7e671ef83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;