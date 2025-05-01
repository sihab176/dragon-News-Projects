// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTXth3rkOfTFFdLvgtTyilj04gSQyC-3I",
  authDomain: "dragon-news-project-546f1.firebaseapp.com",
  projectId: "dragon-news-project-546f1",
  storageBucket: "dragon-news-project-546f1.firebasestorage.app",
  messagingSenderId: "466564655961",
  appId: "1:466564655961:web:fcb4982ad0245746c17a48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);