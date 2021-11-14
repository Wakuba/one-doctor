import { App, ExpressReceiver } from '@slack/bolt'
import useActionListener from './actionListener'
import { config } from '../index'

// cloud functionの環境変数をexport

// Slackからリクエストを受け取ってレスポンスを返すレシーバ
export const expressReceiver = new ExpressReceiver({
  signingSecret: config.slack.secret,
  endpoints: '/events',
  processBeforeResponse: true,
})

// Slack appをinstanciateしexport
export const app = new App({
  receiver: expressReceiver,
  token: config.slack.token,
  processBeforeResponse: true,
})

useActionListener(app)
