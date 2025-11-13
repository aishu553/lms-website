// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, OAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "hhggiu",
  authDomain: "bhhhghg",
  projectId: "bhhvhv"
  storageBucket: "gbvhgyyg",
  messagingSenderId: "hhbhb",
  appId: "nbhjbhbh"
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
