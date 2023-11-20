import { initializeApp } from "firebase/app";
import  { getAuth }  from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5iRruXbY_DmyOehSt1Wq0CCle0zbqysA",
  authDomain: "rick-and-morty-characters-app.firebaseapp.com",
  projectId: "rick-and-morty-characters-app",
  storageBucket: "rick-and-morty-characters-app.appspot.com",
  messagingSenderId: "939824269041",
  appId: "1:939824269041:web:53e15dbff7959e221a0b50",
  measurementId: "G-6BH6LG7LY2"
};
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)