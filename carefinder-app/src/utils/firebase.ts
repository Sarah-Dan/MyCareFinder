// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiJLQPbYiezQAyy2WasUXDJCcfGKMq6UY",
  authDomain: "mycarefinder.firebaseapp.com",
  projectId: "mycarefinder",
  storageBucket: "mycarefinder.appspot.com",
  messagingSenderId: "143700674088",
  appId: "1:143700674088:web:7b35309f6a386440ecd71d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {
  app,
  provider,
  auth,
  signInWithRedirect,
   
}