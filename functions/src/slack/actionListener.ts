import { App } from '@slack/bolt'
import axios from 'axios'
import { doc, updateDoc } from 'firebase/firestore'
import { config } from '..'
import { db } from '../firebase/firebase.config'
// import { config } from '../index'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useActionListener = (app: App) => {
  app.action(
    { action_id: 'is_medcoworker', block_id: 'is_approved_or_not' },
    async ({ body, ack }) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ack()
      const bodyRe: any = body
      const ts: string = bodyRe.container.message_ts
      app.client.chat
        .delete({ channel: config.slack.channel_id, ts })
        .then((res) => console.log(res))
        .catch((e) => console.log(e))
      const certificationImageId: string = bodyRe.message.text ?? 'NO DATA'
      const data = await checkAuthorizedAndGetDataOnSpreadSheet(
        certificationImageId
      )
      const ref = doc(db, 'odUsers', data.uid)
      updateDoc(ref, { authorizedByAdmin: true }).then(() =>
        authMailer(data.email)
      )
    }
  )
}

const checkAuthorizedAndGetDataOnSpreadSheet = async (id: string) => {
  const url = `https://script.google.com/macros/s/AKfycbzF4jRdYnALYAsI16obWepSDzM3DQXuv1Q-aYy4QjOB7YqdA0UWl2NiWEw6r4xbq6Q/exec?id=${id}`
  const response = await axios.get(url)
  // const response = await fetch(url, { method: 'GET'})
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = ((await response.data) ?? 'NO USER') as any
  return data
}

const authMailer = async (adress: string) => {
  const url = `https://script.google.com/macros/s/AKfycbztwt4U0y5kpFUbO-Oaym4i4Aw31PFjxolJoErH04zFGLuysbWBp9pkdKGsIUvlpy1plA/exec?email=${adress}`
  const response = await axios.post(url)
  return response
}

export default useActionListener
