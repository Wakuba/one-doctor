//Library
import { useEffect, useState } from 'react'

//Firebase
import { auth, db } from '../firebase/firebase.config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
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
  LoginDataType,
  odUserDataType,
  SignUpDataTypeForStudentWithUid,
  SignUpDataTypeForStudent,
} from '../types'

//Responsibility : serve the context of user authe infomation
export const useAuthProvider = () => {
  const [odUser, setOdUser] = useState<User | null>(null)
  // odUserDataはアカウント作成には必須では無いユーザー情報
  const [odUserData, setOdUserData] = useState<odUserDataType>({})
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
  const addUserDataOnFirestore = (data: SignUpDataTypeForStudentWithUid) => {
    setDoc(doc(db, 'odUsers', data.uid), data)
    getUserAdditionalData(data.uid)
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
      setOdUserData(doc as odUserDataType)
      console.log('userAdditionalData', doc)
    } else {
      console.log('No such a document')
    }
  }

  const signUp = (data: SignUpDataTypeForStudent): void => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const odUser = userCredential.user
        setOdUser(odUser)
        updateProfile(odUser, { displayName: data.name })
        addUserDataOnFirestore({
          uid: userCredential.user.uid,
          ...data,
        })
        sendEmailVerificationToUser(odUser)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log('errorCode', errorCode)
        console.log('errorMessage', errorMessage)
        if (errorCode === 'auth/email-already-in-use')
          alert('アカウントはすでに存在しています')
      })
    // if (odUser) updateProfile(odUser, { displayName: name })
  }

  const logIn = ({ email, password }: LoginDataType): Promise<void | User> =>
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

  const sendEmailVerificationToUser = (
    odUser: User
  ): Promise<void> | undefined => {
    const acctionCodeSetting = {
      url: 'http://localhost:3000/',
    }
    if (odUser) return sendEmailVerification(odUser, acctionCodeSetting)
    else console.log('odUser is null')
  }

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
