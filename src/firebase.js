// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB49M_EnjIqPnD6rgER2D2li1wlg7nXcM0",
    authDomain: "e-commerce-2027a.firebaseapp.com",
    projectId: "e-commerce-2027a",
    storageBucket: "e-commerce-2027a.appspot.com",
    messagingSenderId: "346641569115",
    appId: "1:346641569115:web:42a138ba50a58634db767e",
    measurementId: "G-61TWL86WDJ"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

