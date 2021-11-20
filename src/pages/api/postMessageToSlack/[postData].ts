import { NextApiRequest, NextApiResponse } from 'next'
import { WebClient } from '@slack/web-api'
import {
  SignUpAuthorizationDataWithImageUrl,
  SignUpAuthorizationDataWithImageId,
} from '../../../lib/types'
import createMessageBlock from '../../../lib/customFunctions/createMessageBlock'
import { storage } from '../../../lib/firebase/firebase.config'
import {
  FullMetadata,
  getDownloadURL,
  getMetadata,
  listAll,
} from '@firebase/storage'
import { ref } from 'firebase/storage'

if (!process.env.SLACK_TOKEN) console.log('No slack bot token')

const client = new WebClient(process.env.SLACK_TOKEN)

type Response = {
  message: string
}

export default (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const postData = req.query.postData as string
  if (postData) {
    const parsedData: SignUpAuthorizationDataWithImageId = JSON.parse(postData)
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
                const dataWithImageUrl: SignUpAuthorizationDataWithImageUrl = {
                  name: parsedData.name,
                  email: parsedData.email,
                  password: parsedData.password,
                  certificationImageUrl: url,
                }
                if (process.env.SLACK_CHANNEL_ID) {
                  client.chat.postMessage({
                    channel: process.env.SLACK_CHANNEL_ID,
                    text: parsedData.password,
                    blocks: createMessageBlock(dataWithImageUrl),
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
