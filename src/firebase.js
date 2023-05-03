import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCIGQivevfQmKUEHClN5IlJRXzd7nSgfcc",
    authDomain: "intern-me-5de9f.firebaseapp.com",
    projectId: "intern-me-5de9f",
    storageBucket: "intern-me-5de9f.appspot.com",
    messagingSenderId: "481642103160",
    appId: "1:481642103160:web:144cdde059aaee3658888d"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};