import firebase from 'firebase'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAKqv-fpcxMh8ym-bPjzunnUVzXN2t1HBc",
  authDomain: "onedoctor-fed5a.firebaseapp.com",
  projectId: "onedoctor-fed5a",
  storageBucket: "onedoctor-fed5a.appspot.com",
  messagingSenderId: "89272473709",
  appId: "1:89272473709:web:468d62ae095fb458744764"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const db = firebase.firestore();
