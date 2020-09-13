// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFuOTE34f5v6chEWPQElt1enwpbpzFvBE",
  authDomain: "instagram-reels-clone-4e695.firebaseapp.com",
  databaseURL: "https://instagram-reels-clone-4e695.firebaseio.com",
  projectId: "instagram-reels-clone-4e695",
  storageBucket: "instagram-reels-clone-4e695.appspot.com",
  messagingSenderId: "66895048831",
  appId: "1:66895048831:web:0ecddb6bd2009502910f4a",
  measurementId: "G-3G02C18YW4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
