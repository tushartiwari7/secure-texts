import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyC9SJuqmRoa8y7r4qqONVY4JE7Ge7A40oU",
    authDomain: "collegeminorproject.firebaseapp.com",
    projectId: "collegeminorproject",
    storageBucket: "collegeminorproject.appspot.com",
    messagingSenderId: "1062715950592",
    appId: "1:1062715950592:web:30980631b062583c557ae5"
  };

const provider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};