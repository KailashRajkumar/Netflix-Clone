
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "",
  authDomain: "react-netflix-clone-e201c.firebaseapp.com",
  projectId: "react-netflix-clone-e201c",
  storageBucket: "react-netflix-clone-e201c.appspot.com",
  messagingSenderId: "957196377424",
  appId: "1:957196377424:web:c528e613d2d74b4f762055",
  measurementId: "G-GS3DWMGPZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
