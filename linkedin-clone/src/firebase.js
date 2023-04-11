import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1ZcpJTPo6WY64ZVh1j5BZWdXZQOmZFLA",
    authDomain: "my-linkedin-clone-985b6.firebaseapp.com",
    projectId: "my-linkedin-clone-985b6",
    storageBucket: "my-linkedin-clone-985b6.appspot.com",
    messagingSenderId: "422407514011",
    appId: "1:422407514011:web:322fde6a3d116d3f52a33e",
    measurementId: "G-JSSSK6LRBH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db }