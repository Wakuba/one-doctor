// import { config } from "./app";

// const { WebClient, LogLevel } = require("@slack/web-api");
import { WebClient } from "@slack/web-api";

// WebClientをinstanciate
const client = new WebClient("xoxb-1749258385890-2515944387446-u8HMnXDQoTo8VJFfo7OEpQW3");

const channelId = "C02FE4V1V47"

// ユーザー確認メッセージを表示するBlockを作成
const createMessageBlock = (
	username: string,
	useremail: string
) => [
	{
		"type": "header",
		"text": {
			"type": "plain_text",
			"text": username
		}
	},
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": useremail
		},
		"block_id": "text1"
	},
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "A message *with some bold text* and _some italicized text_."
		},
		"block_id": "text2"
	},
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "A message *with some bold text* and _some italicized text_."
		},
		"block_id": "text3"
	},
	{
	"type": "image",
	"image_url": "http://placekitten.com/700/500",
	"alt_text": "Multiple cute kittens"
	},
	{
		"type": "actions",
		"block_id": "is_approved_or_not",
		"elements": [
			{
				"type": "button",
				"action_id": "is_medcoworker",
				"text": {
					"type": "plain_text",
				"text": "認可"
				},
				"style": "primary"
			}
		]
	}
]
// interactiveなmessageをbot用のslack channelに投稿

// textはblocksの使用によって挙動が変わる
// 用いている場合: this is used as a fallback string to display in notifications
// 用いてない場合: this is the main body text of the message
const usePostMessage = async ({username, useremail}: {username: string, useremail: string}): Promise<void> => {
	await client.chat.postMessage({
		channel: channelId,
		text: "",
		blocks: createMessageBlock(username, useremail)
	});
}

export default usePostMessage
