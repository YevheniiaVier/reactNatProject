import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCDDfKA6QQTLmXxi2GVS88TlUoCYZ_chfA",
  authDomain: "react-native-project-d88fe.firebaseapp.com",
  projectId: "react-native-project-d88fe",
  storageBucket: "react-native-project-d88fe.appspot.com",
  messagingSenderId: "713966345466",
  appId: "1:713966345466:web:fc8896651aea96f550bd43",
  measurementId: "G-9FSXG8JB3L",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
