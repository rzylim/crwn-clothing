import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDyy2CVpQXJggrArxqSaAKa8JNFk2MmDkg",
  authDomain: "crwn-db-rzylim.firebaseapp.com",
  databaseURL: "https://crwn-db-rzylim.firebaseio.com",
  projectId: "crwn-db-rzylim",
  storageBucket: "crwn-db-rzylim.appspot.com",
  messagingSenderId: "66875920967",
  appId: "1:66875920967:web:6db104e2d132eca5b21762"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
