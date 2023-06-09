// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId, 
  storageBucket: import.meta.env.VITE_storageBucket, 
  messagingSenderId:import.meta.env. VITE_messagingSenderId,  
  appId:  import.meta.env.VITE_appId


//   apiKey: "AIzaSyC8dEyoaE8ma_2gfO-EbEysP9sywW8mFYo",
//   authDomain: "mindful-bliss.firebaseapp.com",
//   projectId: "mindful-bliss",
//   storageBucket: "mindful-bliss.appspot.com",
//   messagingSenderId: "67441135818",
//   appId: "1:67441135818:web:02c5fb3feb6653a86ae433"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;