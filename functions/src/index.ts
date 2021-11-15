import * as functions from "firebase-functions";
import { SignUpData } from "./type";

export const config = functions.config()

import { expressReceiver } from './slack/app'
import usePostMessage from './slack/postMessage'

export const slack1 = functions.https.onRequest(expressReceiver.app)

export const postMessageToSlackChannelWithUserData1 = functions.https.onCall(
  (data: SignUpData, context) => {
    console.log('context', context)
    console.log('data on firebase', data)
    return usePostMessage(data)
  }
)

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
