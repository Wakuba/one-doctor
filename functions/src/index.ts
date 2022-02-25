import * as functions from "firebase-functions";
import { FormData, SignUpAuthorizationDataWithImageId } from "./type";

export const config = functions.config()

import { expressReceiver } from './slack/app'
import postFormData from './slack/postFormData'
import postNewUserData from "./slack/postNewUserData";
import postPreUserData from "./firebase/postPreUserData";

export const slack1 = functions.https.onRequest(expressReceiver.app)

export const postNewUserDataToSlack = functions.https.onCall(
  (data: SignUpAuthorizationDataWithImageId, context) => {
    console.log('context', context)
    console.log('data on firebase', data)
    return postNewUserData(data)
  }
)

export const postFormDataToSlack = functions.https.onCall(
  (formData: FormData, context) => {
    console.log('context', context)
    console.log('formdata on firebase')
    return postFormData(formData)
  }
)

export const postPreUserDataToSS= functions.https.onCall((data: SignUpAuthorizationDataWithImageId, context) => {
  console.log('context', context)
  console.log('data of sign up applicants', data)
  return postPreUserData(data)
})

