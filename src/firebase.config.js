import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqLjH6m9wSmpWBqAJUBoxjbtssPMlk_1I",
  authDomain: "react-house-marketplace-69b21.firebaseapp.com",
  projectId: "react-house-marketplace-69b21",
  storageBucket: "react-house-marketplace-69b21.appspot.com",
  messagingSenderId: "809732551242",
  appId: "1:809732551242:web:a445dd8bfd344e04b4ecb3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()