import {getAuth} from "firebase/auth";
import {initializeApp, getApps} from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  databaseUrl: process.env.FIREBASE_DATABASE_URL
};

const apps = getApps();

const firebaseApp = !apps.length ? initializeApp(firebaseConfig) : apps[0];

export const auth = getAuth(firebaseApp);
