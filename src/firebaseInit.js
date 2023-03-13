// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs7vR_U8qWrW4lVHQxbceVCv2wObUriko",
  authDomain: "fir-e3690.firebaseapp.com",
  projectId: "fir-e3690",
  storageBucket: "fir-e3690.appspot.com",
  messagingSenderId: "499181151781",
  appId: "1:499181151781:web:56417dd68a4493637ac1cc",
  measurementId: "G-S0XS0L451Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);