import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzMGCF-vXEjKJmWwf21lPyNvLUK5XZRKk",
  authDomain: "login-register-d0d94.firebaseapp.com",
  projectId: "login-register-d0d94",
  storageBucket: "login-register-d0d94.firebasestorage.app",
  messagingSenderId: "975160147546",
  appId: "1:975160147546:web:cabddab080e6259ce8e263"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth