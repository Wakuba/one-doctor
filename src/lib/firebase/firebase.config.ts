import firebase from 'firebase/app'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.BROWSER_FIREBASE_API_KEY,
  authDomain: process.env.BROWSER_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.BROWSER_FIREBASE_PROJECT_ID,
  storageBucket: process.env.BROWSER_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.BROWSER_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.BROWSER_FIREBASE_APP_ID,
  databaseURL: process.env.BROWSER_FIREBASE_DATABASE_URL,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const db = firebase.firestore();
