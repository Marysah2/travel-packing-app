// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChoAD-BpiPFyjpCjd1AxSGswzmvrEAyL4",
  authDomain: "travel-packing-app-cd646.firebaseapp.com",
  projectId: "travel-packing-app-cd646",
  storageBucket: "travel-packing-app-cd646.firebasestorage.app",
  messagingSenderId: "771964499889",
  appId: "1:771964499889:web:4c48793ecd09d919e96f90",
  measurementId: "G-C4RYB1TJ73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const googleProvider = new app.auth.GoogleAuthProvider();
export default app;