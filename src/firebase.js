// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, OAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBvBiJQPYbNFAxmSj-qNFRSHYEvPVxRn6M",
  authDomain: "techknots-lms-80b9f.firebaseapp.com",
  projectId: "techknots-lms-80b9f",
  storageBucket: "techknots-lms-80b9f.firebasestorage.app",
  messagingSenderId: "71232085619",
  appId: "1:71232085619:web:0e6eb5ff65c23dd0af5406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const appleProvider = new OAuthProvider("apple.com");

// Exports
export { auth, googleProvider, githubProvider, appleProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword };
