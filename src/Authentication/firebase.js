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

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};