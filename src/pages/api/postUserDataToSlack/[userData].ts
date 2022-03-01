import { NextApiRequest, NextApiResponse } from 'next'
import { WebClient } from '@slack/web-api'
import {
  SignUpAuthorizationDataTypeDataWithImageUrl,
  SignUpAuthorizationDataTypeDataWithImageId,
} from '../../../lib/types'
import { createMessageBlockForResidencyAuthorization } from '../../../lib/customFunctions/createMessageBlock'
import { storage } from '../../../lib/firebase/firebase.config'
import {
  FullMetadata,
  getDownloadURL,
  getMetadata,
  listAll,
} from '@firebase/storage'
import { ref } from 'firebase/storage'

if (!process.env.SLACK_TOKEN) console.log('No slack bot token')

const client = new WebClient(process.env.SLACK_RESIDENCY_AUTHORIZATION_TOKEN)

type Response = {
  message: string
}

export default (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const postData = req.query.postData as string
  if (postData) {
    const parsedData: SignUpAuthorizationDataTypeDataWithImageId = JSON.parse(postData)
    const listRef = ref(storage, 'odUser/certificationImage')
    listAll(listRef).then((res) => {
      res.items.map((ref) => {
        getMetadata(ref).then((metadata: FullMetadata) => {
          if (metadata.customMetadata) {
            if (
              metadata.customMetadata.certificationImageId ===
              parsedData.certificationImageId
            ) {
              getDownloadURL(ref).then((url) => {
                const dataWithImageUrl: SignUpAuthorizationDataTypeDataWithImageUrl = {
                  name: parsedData.name,
                  email: parsedData.email,
                  password: parsedData.password,
                  certificationImageUrl: url,
                  certificationImageId: '',
                }
                if (process.env.SLACK_RESIDENCY_AUTHORIZATION_CHANNEL_ID) {
                  client.chat.postMessage({
                    channel:
                      process.env.SLACK_RESIDENCY_AUTHORIZATION_CHANNEL_ID,
                    text: parsedData.password,
                    blocks:
                      createMessageBlockForResidencyAuthorization(
                        dataWithImageUrl
                      ),
                  })
                } else console.log('No slack channel id')
              })
            }
          }
        })
      })
    })

    res.status(200).json({ message: 'Post message completed' })
  } else {
    res.status(400).json({ message: 'No postData' })
  }
}
