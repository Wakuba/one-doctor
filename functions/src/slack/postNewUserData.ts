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
import { SignUpAuthorizationDataWithImageId, SignUpAuthorizationDataWithImageUrl } from "../type";
import { config } from '../index';

const postNewUserData = (data: SignUpAuthorizationDataWithImageId): string=> {
  try {
    const listRef = ref(storage, 'odUser/certificationImage')
    listAll(listRef).then((res) => {
      res.items.map((ref) => {
        getMetadata(ref).then((metadata: FullMetadata) => {
          if (metadata.customMetadata) {
            if (
              metadata.customMetadata.certificationImageId ===
              data.certificationImageId
            ) {
              getDownloadURL(ref).then((url) => {
                const dataWithImageUrl: SignUpAuthorizationDataWithImageUrl = {
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
  } catch(e) {
    return 'firebase cloud functionsからslackへのデータ送信完了'
  }
}
export default postNewUserData
