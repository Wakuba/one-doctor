import * as functions from 'firebase-functions'
import {
  FormDataType,
  SignUpAuthorizationDataTypeDataWithImageId,
} from './type'

export const config = functions.config()

import { expressReceiver } from './slack/app'
import postFormData from './slack/postFormData'
import postNewUserData from './slack/postNewUserData'

export const slack1 = functions.https.onRequest(expressReceiver.app)

export const postNewUserDataToSlack = functions.https.onCall(
  (data: SignUpAuthorizationDataTypeDataWithImageId, context) => {
    console.log(context)
    return postNewUserData(data)
  }
)

export const postFormDataToSlack = functions.https.onCall(
  (formData: FormDataType, context) => {
    console.log(context)
    return postFormData(formData)
  }
)
