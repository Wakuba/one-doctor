import * as functions from "firebase-functions";
import { SignUpData, FormData } from "./type";

export const config = functions.config()

import { expressReceiver } from './slack/app'
import usePostMessage from './slack/postMessage'
import postFormData from './slack/postFormData'

export const slack1 = functions.https.onRequest(expressReceiver.app)

export const postMessageToSlackChannelWithUserData1 = functions.https.onCall(
  (data: SignUpData, context) => {
    console.log('context', context)
    console.log('data on firebase', data)
    return usePostMessage(data)
  }
)

export const postFormDataToSlack = functions.https.onCall(
  (formData: FormData, context) => {
    console.log('context', context)
    console.log('formdata on firebase')
    return postFormData(formData)
  }
)
