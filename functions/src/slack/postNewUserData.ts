import { createMessageBlockForAuthorization } from "./createMessageBlock";
import { storage } from '../firebase/firebase.config'
import {
  FullMetadata,
  getDownloadURL,
  getMetadata,
  listAll,
} from '@firebase/storage'
import { ref } from 'firebase/storage'
import { app } from '../slack/app'
import { SignUpAuthorizationDataTypeDataWithImageId, SignUpAuthorizationDataTypeDataWithImageUrl } from "../type";
import { config } from '../index';

const postNewUserData = (data: SignUpAuthorizationDataTypeDataWithImageId): string => {
  try {
    console.log('なんでやねん')
    const listRef = ref(storage, 'odUser/certificationImage')
    listAll(listRef).then((res) => {
      console.log('in listAll')
      res.items.map((ref) => {
        getMetadata(ref).then((metadata: FullMetadata) => {
          console.log('in getMetadata', metadata.customMetadata)
          if (metadata.customMetadata) {
            console.log('in ifasldjfkalsd', metadata.customMetadata.certificationImageId)
            if (
              metadata.customMetadata.certificationImageId ===
              data.certificationImageId
            ) {
              getDownloadURL(ref).then((url) => {
                console.log('in getDownloadUrl')
                const dataWithImageUrl: SignUpAuthorizationDataTypeDataWithImageUrl = {
                  ...data,
                  certificationImageUrl: url,
                }
                app.client.chat.postMessage({
                  channel: config.slack.channel_id,
                  text: data.certificationImageId,
                  blocks: createMessageBlockForAuthorization(dataWithImageUrl),
                })
              })
            }
          }
        })
      })
    })
    return 'firebase cloud functionsからslackへのデータ送信完了'
  } catch (e) {
    return 'firebase cloud functionsからslackへのデータ送信完了'
  }
}
export default postNewUserData
