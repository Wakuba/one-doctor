// import { LogLevel, retryPolicies, WebClient } from '@slack/web-api'
import { createMessageBlockForFormReceiver } from './createMessageBlock'
import { FormData } from '../type'
// import { HttpsProxyAgent } from 'https-proxy-agent'
import { config } from '../index'
import { app } from '../slack/app'

// const proxy = new HttpsProxyAgent(
//   process.env.http_proxy || 'http://168.63.76.32:3128'
// )

// const client = new WebClient(config.slack.token, {
//   maxRequestConcurrency: 5,
//   retryConfig: retryPolicies.fiveRetriesInFiveMinutes,
//   logLevel: LogLevel.DEBUG,
//   agent: proxy,
// })

const postFormData = (formData: FormData): void => {
  console.log('formdata', formData)
  app.client.chat
    .postMessage({
      channel: config.slack.channel_id_form,
      text: formData.name,
      blocks: createMessageBlockForFormReceiver(formData),
    })
    .then((result) => console.log('result', result))
    .catch((error) => console.log(error))
}

export default postFormData
