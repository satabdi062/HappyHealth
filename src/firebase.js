import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseSettings = {
  apiKey: "AIzaSyCEqJPJlEeQigEI4DTXL6saIsVRTZM7ti4",
  authDomain: "happyhealth-d6073.firebaseapp.com",
  projectId: "happyhealth-d6073",
  storageBucket: "happyhealth-d6073.appspot.com",
  messagingSenderId: "39590172876",
  appId: "1:39590172876:web:5dff22502f90c98a190a69",
  measurementId: "G-TEGWZB93SC"
};

let app = !firebase.apps.length
  ? firebase.initializeApp(firebaseSettings)
  : firebase.app();

const firestore = app.firestore();

export const database = {
  exercises: firestore.collection("exercises"),
  workouts: firestore.collection("workouts"),
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};

export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default app;
