import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPAye6S8Mrx5A0ZmvjDAYeaKW6L4YTh1k",
  authDomain: "whatsapp-clone-1d0b2.firebaseapp.com",
  projectId: "whatsapp-clone-1d0b2",
  storageBucket: "whatsapp-clone-1d0b2.appspot.com",
  messagingSenderId: "707577234345",
  appId: "1:707577234345:web:0709b9a19e914158883ab8",
  measurementId: "G-X3Y6HKXZYT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
