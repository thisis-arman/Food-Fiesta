// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxnuYsbZ0UQLmuMzKuMsdju_oSYHijenw",
  authDomain: "foodfiesta-a1523.firebaseapp.com",
  projectId: "foodfiesta-a1523",
  storageBucket: "foodfiesta-a1523.appspot.com",
  messagingSenderId: "158183990412",
  appId: "1:158183990412:web:5ddaeba240d42711ce87a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;