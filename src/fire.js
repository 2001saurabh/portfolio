import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCc6q1seCG9LhTJT9SX2QehAbxURLMssMw",
  authDomain: "contact-form-8124b.firebaseapp.com",
  projectId: "contact-form-8124b",
  storageBucket: "contact-form-8124b.appspot.com",
  messagingSenderId: "762553666821",
  appId: "1:762553666821:web:f39a303c1cc68d33eb7b6c",
});

var db = firebaseApp.firestore();
export { db };
