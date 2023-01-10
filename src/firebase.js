import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqKoQuKKuh1vHEYa9wrz1JJVFAbH2geCg",
  authDomain: "newcity-312.firebaseapp.com",
  projectId: "newcity-312",
  storageBucket: "newcity-312.appspot.com",
  messagingSenderId: "401093399472",
  appId: "1:401093399472:web:e2bc178fdab4597d07bc75",
  measurementId: "G-1FHVP7Q9KP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
