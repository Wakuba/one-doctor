//Library
import { useEffect } from 'react'

//Firebase
import { auth, db } from '../firebase/firebase.config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
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
  odUserExDataType,
  SignUpDataTypeForStudent,
  SignUpDataTypeForNotStudent,
} from '../types'

//RTK
import { useDispatch } from 'react-redux'
import {
  logOutState,
  logInState,
  signUpState,
  defaultUserState,
} from '../../features/userSlice'
import { setUserExData } from '../../features/userSlice'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'

//Responsibility : serve the context of user authe infomation
export const useAuthProvider = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()

  useEffect(() => {
    const curUser = auth.currentUser
    if (!curUser) {
      // setOdUser(null)
      dispatch(defaultUserState())
      // setIsLoading(false)
      // return
    } else {
      // setIsLoading(true)
      // setOdUser(odUser)
      dispatch(logInState(curUser))
      getUserExData(curUser.uid)
      // setIsLoading(false)
    }
  }, [])

  // ユーザーデータのうちfirebase authアカウント作成には必須でないがfiresotreに入れるもの
  const addUserDataOnFirestore = (
    data: SignUpDataTypeForStudent | SignUpDataTypeForNotStudent
  ) => {
    if (data.uid) {
      setDoc(doc(db, 'odUsers', data.uid), data)
      getUserExData(data.uid)
    }
  }

  const getUserExData = async (uid: UserInfo['uid']): Promise<void> => {
    const docSnap: DocumentSnapshot = await getDoc(doc(db, 'odUsers', uid))
    if (docSnap.exists()) {
      const doc: DocumentData = docSnap.data()
      // setodUserExData(doc as odUserExDataType)
      dispatch(setUserExData(doc as odUserExDataType))
    } else {
      console.log('No such a document')
    }
  }

  const signUp = async (
    data: SignUpDataTypeForStudent | SignUpDataTypeForNotStudent
  ): Promise<User> => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    )
    const odUser = userCredential.user
    // setOdUser(odUser)
    sendEmailVerificationToUser(odUser)
    await updateProfile(odUser, { displayName: data.name })
    addUserDataOnFirestore({
      uid: userCredential.user.uid,
      ...data,
    })
    dispatch(signUpState(odUser))
    return odUser
  }

  const logIn = ({ email, password }: LoginDataType): Promise<void | User> =>
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const odUser = userCredential.user
        // setOdUser(odUser)
        dispatch(logInState(odUser))
        getUserExData(odUser.uid)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log('errorCode', errorCode)
        console.log('errorMessage', errorMessage)
      })

  const logOut = () => {
    signOut(auth).then(() => dispatch(logOutState()))
  }

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
    signUp,
    logIn,
    logOut,
    sendPasswordResetEmailToUser,
  }
}
