import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSmkJOvCM4LcRXp4ZTecpGLfXglgB5IdA",
  authDomain: "rn-project-995e0.firebaseapp.com",
  projectId: "rn-project-995e0",
  storageBucket: "rn-project-995e0.appspot.com",
  messagingSenderId: "90736400794",
  appId: "1:90736400794:web:b103a3ea1c89e920940223",
  measurementId: "G-758388F9BX",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
