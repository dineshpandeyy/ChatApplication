import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA8MbpixiyqoOvpCdZLSs-_Is_IThExLHc",
  authDomain: "chat-96b7b.firebaseapp.com",
  projectId: "chat-96b7b",
  storageBucket: "chat-96b7b.appspot.com",
  messagingSenderId: "917661759340",
  appId: "1:917661759340:web:43ce3cc87afe232d7da549"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();