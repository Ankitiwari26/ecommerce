// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJNq_CPfgRUxwU3tKtNHBaLo-ZipgvkiU",
  authDomain: "ecommercewebsite-4f5d5.firebaseapp.com",
  databaseURL:
    "https://ecommercewebsite-4f5d5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecommercewebsite-4f5d5",
  storageBucket: "ecommercewebsite-4f5d5.appspot.com",
  messagingSenderId: "792149087516",
  appId: "1:792149087516:web:1092fb9fbced4aa4e016d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
