// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFfe3K5gJ5csoyi_SXPkz1o-BVT2TaD7M",
  authDomain: "auth-context-dfd87.firebaseapp.com",
  projectId: "auth-context-dfd87",
  storageBucket: "auth-context-dfd87.firebasestorage.app",
  messagingSenderId: "1008073622462",
  appId: "1:1008073622462:web:ed6cbc9bf4580a849aefef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
