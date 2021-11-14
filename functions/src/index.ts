import * as functions from 'firebase-functions'
import { SignUpData } from '../../src/lib/types'

export const config = functions.config()

import { expressReceiver } from './slack/app'
import usePostMessage from './slack/postMessage'

export const slack = functions.https.onRequest(expressReceiver.app)

export const postMessageToSlackChannelWithUserData = functions.https.onCall(
  (data: SignUpData, context) => {
    console.log('context', context)
    console.log('data on firebase', data)
    return usePostMessage(data)
  }
)
