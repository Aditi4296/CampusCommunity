import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBpE6WZzf0nj4AedfPSvV2cLTMZqd4VYFw",
    authDomain: "community-742ec.firebaseapp.com",
    projectId: "community-742ec",
    storageBucket: "community-742ec.appspot.com",
    messagingSenderId: "46800622611",
    appId: "1:46800622611:web:a4c0cfd934414a3bbe1be6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
