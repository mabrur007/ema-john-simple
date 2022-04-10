// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGLO9n3okbyUvxk3A97j6fUsAoyhuFmVk",
  authDomain: "ema-john-simple-6fc40.firebaseapp.com",
  projectId: "ema-john-simple-6fc40",
  storageBucket: "ema-john-simple-6fc40.appspot.com",
  messagingSenderId: "552764044203",
  appId: "1:552764044203:web:9df0203b558694214498ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;