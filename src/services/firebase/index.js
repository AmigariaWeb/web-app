
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDEKXVUhPmKnfhYUaejzXpAZoT3b2We3kM",
  authDomain: "amigaria-app.firebaseapp.com",
  projectId: "amigaria-app",
  storageBucket: "amigaria-app.appspot.com",
  messagingSenderId: "209321818212",
  appId: "1:209321818212:web:c58fe08483486f71884771"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

