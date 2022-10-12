import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCZApyUuZDfol4xx_r6F9IXQ9HcCIp8drw",
  authDomain: "chat-app-8d2aa.firebaseapp.com",
  databaseURL: "https://chat-app-8d2aa-default-rtdb.firebaseio.com",
  projectId: "chat-app-8d2aa",
  storageBucket: "chat-app-8d2aa.appspot.com",
  messagingSenderId: "1085265556287",
  appId: "1:1085265556287:web:2ea1894524c5d3dda4d98a",
  measurementId: "G-3MSR8TQ4TZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
const analytics = getAnalytics(app);