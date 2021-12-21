import { createMessageBlockForFormReceiver } from './createMessageBlock'
import { FormData } from '../type'
import { config } from '../index'
import { app } from '../slack/app'

const postFormData = (formData: FormData): void => {
  console.log('formdata', formData)
  app.client.chat
    .postMessage({
      channel: config.slack.channel_id_form,
      text: formData.name,
      blocks: createMessageBlockForFormReceiver(formData),
    })
    .then((result) => console.log('result', result))
    .catch((error) => console.log('error', error))
}

export default postFormData
