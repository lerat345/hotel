// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfR4KqGfztJ2gzx1SZs3UAYMIb8cDb-w8",
  authDomain: "hotel--firebase-authent.firebaseapp.com",
  projectId: "hotel--firebase-authent",
  storageBucket: "hotel--firebase-authent.appspot.com",
  messagingSenderId: "699093374054",
  appId: "1:699093374054:web:5bf5c8e6f6c7861114c9a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};