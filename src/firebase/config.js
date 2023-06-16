import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDU5vGdgDTB6FCQdxIUOaw5p3ONgatN2G0",
  authDomain: "myfinance-40fba.firebaseapp.com",
  projectId: "myfinance-40fba",
  storageBucket: "myfinance-40fba.appspot.com",
  messagingSenderId: "186891688298",
  appId: "1:186891688298:web:8b68ad1ec542ab4d9a6d13",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth,timestamp };
