import firebase from 'firebase/app'
import '@firebase/firestore'
import '@firebase/functions'
import '@firebase/storage'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)
else firebase.app()

console.log(firebaseConfig)

export const db: firebase.firestore.Firestore = firebase.firestore()
export const firebaseFunction: firebase.functions.Functions =
  firebase.functions()
export const storage: firebase.storage.Storage = firebase.storage()
