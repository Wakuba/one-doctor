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
  updateProfile,
} from 'firebase/auth'
import {
  doc,
  setDoc,
  getDoc,
  DocumentSnapshot,
  DocumentData,
} from 'firebase/firestore'

//Types
import { LogInData, SignUpData, UserAdditionalData } from './types'
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
      getUserAdditionalData(odUser)
      setIsLoading(false)
    })
    return () => unsubscribe()
  }, [])

  //set a user infomation to a document in firesotre when signing up
  const createUser = (userInfoOnFierstore: any) => {
    setDoc(doc(db, 'od_users', userInfoOnFierstore.uid), userInfoOnFierstore)
    getUserAdditionalData(userInfoOnFierstore)
  }

  //clear the auth state
  const clearAuthState = () => {
    setOdUser(null)
    setIsLoading(true)
  }

  // get additional data we cannot get from firebase auth.
  const getUserAdditionalData = async (odUser: User) => {
    const docSnap = await getDoc(doc(db, 'od_users', odUser.uid))
    if (docSnap.exists()) {
      const doc = docSnap.data()
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

  const signUp = async ({ name, email, password }: SignUpData) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const odUser = userCredential.user
        setOdUser(odUser)
        updateProfile(odUser, {displayName: name})
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
        getUserAdditionalData(odUser)
        console.log(userAdditionalData)
        return userCredential.user
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log('errorCode', errorCode)
        console.log('errorMessage', errorMessage)
      })

  const logOut = async () => await signOut(auth).then(() => clearAuthState())

  return {
    odUser,
    userAdditionalData,
    isLoading,
    signUp,
    logIn,
    logOut,
  }
}

export const useRequiredAuth = () => {
  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!auth.odUser) {
      router.push('/LogIn')
    }
  }, [auth, router])

  return auth
}
