//Library
import { useEffect, useState } from 'react'

//Firebase
import { auth, db } from '../lib/firebase/firebase.config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  UserInfo,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth'
import {
  doc,
  setDoc,
  getDoc,
  DocumentSnapshot,
  DocumentData,
} from 'firebase/firestore'

//Types
import {
  LogInData,
  OdUserContext,
  SignUpData,
  UserAdditionalData,
} from './types'
import { useAuth } from './context'
import { useRouter } from 'next/router'

//Responsibility : serve the context of user authe infomation
export const useAuthProvider = () => {
  const [odUser, setOdUser] = useState<User | null>(null)
  const [userAdditionalData, setUserAdditionalData] =
    useState<UserAdditionalData>({ uid: '', name: '', email: '', password: '' })
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (odUser) => {
      if (!odUser) {
        setOdUser(null)
        setIsLoading(false)
        return
      }
      setIsLoading(true)
      setOdUser(odUser)
      getUserAdditionalData(odUser.uid)
      setIsLoading(false)
    })
    return () => unsubscribe()
  }, [])

  //set a user infomation to a document in firesotre when signing up
  const createUser = (userInfoOnFierstore: UserAdditionalData) => {
    setDoc(doc(db, 'od_users', userInfoOnFierstore.uid), userInfoOnFierstore)
    getUserAdditionalData(userInfoOnFierstore.uid)
  }

  //clear the auth state
  const clearAuthState = () => {
    setOdUser(null)
    setIsLoading(true)
  }

  // get additional data we cannot get from firebase auth.
  const getUserAdditionalData = async (uid: UserInfo['uid']): Promise<void> => {
    const docSnap: DocumentSnapshot = await getDoc(doc(db, 'od_users', uid))
    if (docSnap.exists()) {
      const doc: DocumentData = docSnap.data()
      console.log(doc)
      setUserAdditionalData({
        uid: doc.uid,
        name: doc.name,
        email: doc.email,
        password: doc.password,
      })
      console.log('userAddti', userAdditionalData)
    } else {
      console.log('No such a document')
    }
  }

  const signUp = async ({
    name,
    email,
    password,
  }: SignUpData): Promise<void> => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const odUser = userCredential.user
        setOdUser(odUser)
        updateProfile(odUser, { displayName: name })
        return createUser({ uid: odUser.uid, name, email, password })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log('errorCode', errorCode)
        console.log('errorMessage', errorMessage)
      })
    // if (odUser) updateProfile(odUser, { displayName: name })
  }

  const logIn = async ({ email, password }: LogInData): Promise<void | User> =>
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const odUser = userCredential.user
        setOdUser(odUser)
        getUserAdditionalData(odUser.uid)
        console.log(userAdditionalData)
        return userCredential.user
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log('errorCode', errorCode)
        console.log('errorMessage', errorMessage)
      })

  const logOut = async (): Promise<void> =>
    await signOut(auth).then(() => clearAuthState())

  const sendPasswordResetEmailToUser = async (email: string): Promise<void> =>
    await sendPasswordResetEmail(auth, email)
      .then((response) => {
        return response
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log('errorCode', errorCode)
        console.log('errorMessage', errorMessage)
      })

  return {
    odUser,
    userAdditionalData,
    isLoading,
    signUp,
    logIn,
    logOut,
    sendPasswordResetEmailToUser,
  }
}

export const useRequiredAuth = (): OdUserContext => {
  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!auth.odUser) {
      router.push('/LogIn')
    }
  }, [auth, router])

  return auth
}
