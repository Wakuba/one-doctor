import { NextApiRequest, NextApiResponse } from 'next'
import { LogLevel, retryPolicies, WebClient } from '@slack/web-api'
import { createMessageBlockForFormReceiver } from '../../../lib/customFunctions/createMessageBlock'
import { FormData } from '../../../lib/types'
import { HttpsProxyAgent } from 'https-proxy-agent'

const proxy = new HttpsProxyAgent(
  process.env.http_proxy || 'http://168.63.76.32:3128'
)

if (!process.env.SLACK_FORM_RECEIVER_TOKEN) console.log('No slack bot token')
console.log('token', process.env.SLACK_FORM_RECEIVER_TOKEN)

const client = new WebClient(process.env.SLACK_FORM_RECEIVER_TOKEN, {
  maxRequestConcurrency: 1,
  retryConfig: retryPolicies.fiveRetriesInFiveMinutes,
  logLevel: LogLevel.DEBUG,
  agent: proxy,
})

console.log('client', client)
type Response = {
  message: string
}

export default (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const formData = req.query.formData as string
  console.log('form', formData)
  try {
    if (formData) {
      const parsedData: FormData = JSON.parse(formData)
      console.log('parsed', parsedData)
      if (process.env.SLACK_FORM_RECEIVER_CHANNEL_ID) {
        console.log(process.env.SLACK_FORM_RECEIVER_CHANNEL_ID)
        client.chat
          .postMessage({
            channel: process.env.SLACK_FORM_RECEIVER_CHANNEL_ID,
            text: parsedData.name,
            blocks: createMessageBlockForFormReceiver(parsedData),
          })
          .then((result) => console.log('result', result))
          .catch((error) => console.log(error))
      }
    }
    res.status(200).json({ message: 'Post message completed' })
  } catch (e) {
    console.log(e)
    res.status(400).json({ message: 'No postData' })
  }
}
