import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyASAjvH2sjYkPq-tIH3mgqxrNFXfiQJBQY",
  authDomain: "crwn-db-3b616.firebaseapp.com",
  databaseURL: "https://crwn-db-3b616.firebaseio.com",
  projectId: "crwn-db-3b616",
  storageBucket: "",
  messagingSenderId: "49041898746",
  appId: "1:49041898746:web:32d7fbc0a6738ebfe21d43",
  measurementId: "G-0R3Z0BG78M"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

/* const providerFacebook = new firebase.auth.FacebookAuthProvider();
providerFacebook.setCustomParameters({ prompt: "select_account" });
export const signInWithFacebook = () => auth.signInWithPopup(providerFacebook); */

export default firebase;
