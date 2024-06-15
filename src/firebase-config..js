
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyASIbywImTI0ODFOw7nUzyGPV4qJY_Whs8",
  authDomain: "mobibudget-d3c27.firebaseapp.com",
  projectId: "mobibudget-d3c27",
  storageBucket: "mobibudget-d3c27.appspot.com",
  messagingSenderId: "579682520607",
  appId: "1:579682520607:web:d9c8b9aedb20c86d0ccf2a",
  measurementId: "G-1PBVB6H0H2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
