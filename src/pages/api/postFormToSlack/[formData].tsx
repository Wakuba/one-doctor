import { NextApiRequest, NextApiResponse } from 'next'
import { WebClient } from '@slack/web-api'
import { createMessageBlockForFormReceiver } from '../../../lib/customFunctions/createMessageBlock'
import { FormData } from '../../../lib/types'

if (!process.env.SLACK_FORM_RECEIVER_TOKEN) console.log('No slack bot token')

const client = new WebClient(process.env.SLACK_FORM_RECEIVER_TOKEN)

type Response = {
  message: string
}

export default (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const formData = req.query.formData as string
  console.log('form', formData)
  if (formData) {
    const parsedData: FormData = JSON.parse(formData)
    console.log('parsed', parsedData)
    if (process.env.SLACK_FORM_RECEIVER_CHANNEL_ID) {
      client.chat.postMessage({
        channel: process.env.SLACK_FORM_RECEIVER_CHANNEL_ID,
        text: parsedData.name,
        blocks: createMessageBlockForFormReceiver(parsedData),
      })
    }
    res.status(200).json({ message: 'Post message completed' })
  } else {
    res.status(400).json({ message: 'No postData' })
  }
}
