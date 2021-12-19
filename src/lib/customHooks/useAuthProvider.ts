//Library
import { useEffect, useState } from 'react'

//Firebase
import { auth, db } from '../firebase/firebase.config'
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
  SignUpDataWithUid,
} from '../types'
import { useAuth } from '../context'
import { useRouter } from 'next/router'

type odUserData = SignUpDataWithUid

//Responsibility : serve the context of user authe infomation
export const useAuthProvider = () => {
  const [odUser, setOdUser] = useState<User | null>(null)
  const [odUserData, setOdUserData] = useState<odUserData>({})
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

  // ユーザーデータのうちfirebase authアカウント作成には必須でないがfiresotreに入れるもの
  const addUserDataOnFirestore = (userInfoOnFierstore: SignUpDataWithUid) => {
    console.log('userinfo', userInfoOnFierstore)
    setDoc(doc(db, 'odUsers', userInfoOnFierstore.uid), userInfoOnFierstore)
    getUserAdditionalData(userInfoOnFierstore.uid)
  }

  //clear the auth state
  const clearAuthState = () => {
    setOdUser(null)
    setIsLoading(true)
  }

  const getUserAdditionalData = async (uid: UserInfo['uid']): Promise<void> => {
    const docSnap: DocumentSnapshot = await getDoc(doc(db, 'odUsers', uid))
    if (docSnap.exists()) {
      const doc: DocumentData = docSnap.data()
      console.log(doc)
      setOdUserData(doc)
      // console.log('userAddti', userAdditionalData)
    } else {
      console.log('No such a document')
    }
  }

  const signUp = (data: SignUpData): void => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const odUser = userCredential.user
        setOdUser(odUser)
        updateProfile(odUser, { displayName: data.name })
        addUserDataOnFirestore({
          uid: userCredential.user.uid,
          ...data,
        })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log('errorCode', errorCode)
        console.log('errorMessage', errorMessage)
      })
    // if (odUser) updateProfile(odUser, { displayName: name })
  }

  const logIn = ({ email, password }: LogInData): Promise<void | User> =>
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const odUser = userCredential.user
        setOdUser(odUser)
        getUserAdditionalData(odUser.uid)
        console.log(odUserData)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log('errorCode', errorCode)
        console.log('errorMessage', errorMessage)
      })

  const logOut = (): Promise<void> => signOut(auth).then(() => clearAuthState())

  const sendPasswordResetEmailToUser = (email: string): Promise<void> =>
    sendPasswordResetEmail(auth, email)
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
    odUserData,
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
