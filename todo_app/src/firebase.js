import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC1FSgih3fvYIMTqtVHviqg_jgFS69ZkhI",
    authDomain: "todo-app-mestromoon.firebaseapp.com",
    databaseURL: "https://todo-app-mestromoon.firebaseio.com",
    projectId: "todo-app-mestromoon",
    storageBucket: "todo-app-mestromoon.appspot.com",
    messagingSenderId: "413454138512",
    appId: "1:413454138512:web:29e0083f0b20906d656c15",
    measurementId: "G-4MWNTT6YHH"
});

const db = firebaseApp.firestore();
export default db;