import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDF3H1cCbpBdGWmNepFrn9yWKK4ssS-UIY",
  authDomain: "facebook-clone-a47a8.firebaseapp.com",
  databaseURL: "https://facebook-clone-a47a8.firebaseio.com",
  projectId: "facebook-clone-a47a8",
  storageBucket: "facebook-clone-a47a8.appspot.com",
  messagingSenderId: "976515970359",
  appId: "1:976515970359:web:7514ed3a0a448eeb94d6b2",
  measurementId: "G-V4F3HVXR66",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
