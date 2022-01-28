import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBH0nYj-Tfxpyx_UK1Ar1WS5SfR_MEJF6M",
    authDomain: "smpcba-734e8.firebaseapp.com",
    projectId: "smpcba-734e8",
    storageBucket: "smpcba-734e8.appspot.com",
    messagingSenderId: "1047826657542",
    appId: "1:1047826657542:web:f3963ebfa8b3b1c016ae87",
    measurementId: "G-E1N5NE527Q"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();