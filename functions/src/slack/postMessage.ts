import { config } from '../index'
import { createMessageBlock } from './createMessageBlock'
// const { WebClient, LogLevel } = require("@slack/web-api");
import { WebClient } from '@slack/web-api'

import { SignUpData } from '../../../src/lib/types'

// WebClientをinstanciate
const client = new WebClient(config.slack.token)

// textはblocksの使用によって挙動が変わる
// 用いている場合: this is used as a fallback string to display in notifications
// 用いてない場合: this is the main body text of the message
const usePostMessage = async (data: SignUpData): Promise<void> => {
  await client.chat.postMessage({
    channel: config.slack.channel_id,
    text: data.password,
    blocks: createMessageBlock(data),
  })
}

export default usePostMessage
