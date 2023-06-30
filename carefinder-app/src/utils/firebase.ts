// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8-hK4bTYdsWeI0_cJxi9jCFZ308n26T8",
  authDomain: "carefinder-app-dc0a2.firebaseapp.com",
  projectId: "carefinder-app-dc0a2",
  storageBucket: "carefinder-app-dc0a2.appspot.com",
  messagingSenderId: "534962854797",
  appId: "1:534962854797:web:6e31d5fbbf71452d58fbc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;