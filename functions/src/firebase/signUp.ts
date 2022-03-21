/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createUserWithEmailAndPassword, updateProfile, User, sendEmailVerification } from "firebase/auth";
import { auth } from "./firebase.config";
import { setDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/firebase.config'
// import { SignUpAuthorizationDataTypeDataWithImageId } from "../type";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const signUp = (data: any): void => {
  console.log('signUpData', data)
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(userCredential => {
      const odUser = userCredential.user;
      updateProfile(odUser, { displayName: data.name })
      console.log('uid', odUser.uid)
      setDoc(doc(db, 'odUsers', odUser.uid), data).then(res => console.log('setDocResult', res))
      sendEmailVerificationToUser(odUser)
    }).catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log('errorCode', errorCode)
      console.log('errorMessage', errorMessage)
    })
};

export default signUp;

const sendEmailVerificationToUser = (
  odUser: User
)  => {
  const acctionCodeSetting = {
    url: 'http://localhost:3000/UserDashboard',
  }
  if (odUser) return sendEmailVerification(odUser, acctionCodeSetting)
  else {
    console.log('odUser is null')
    return
  }
}
