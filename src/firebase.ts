import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCxwr0zHYMEMqOLK0d-CgLvEGSMzuHl1po",
  authDomain: "white-stone-b42a0.firebaseapp.com",
  projectId: "white-stone-b42a0",
  storageBucket: "white-stone-b42a0.appspot.com",
  messagingSenderId: "892974370262",
  appId: "1:892974370262:web:f53533b1a3e23c4969e877",
  measurementId: "G-WMDN05P8JS",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
