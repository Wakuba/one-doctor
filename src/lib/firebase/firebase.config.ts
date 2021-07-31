import firebase from 'firebase/app'
import '@firebase/firestore'
import '@firebase/functions'
import '@firebase/storage'

const firebaseConfig = {
	apiKey: process.env.BROWSER_FIREBASE_API_KEY,
	authDomain: process.env.BROWSER_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.BROWSER_FIREBASE_PROJECT_ID,
	storageBucket: process.env.BROWSER_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.BROWSER_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.BROWSER_FIREBASE_APP_ID,
	measurementId: process.env.BROWSER_FIREBASE_MEASUREMENT_ID,
}

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
} else {
	firebase.app()
}

export const db: firebase.firestore.Firestore = firebase.firestore()
export const firebaseFunction: firebase.functions.Functions =
	firebase.functions()
export const storage: firebase.storage.Storage = firebase.storage()
