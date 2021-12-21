/* eslint-disable prettier/prettier */
import { SignUpAuthorizationDataWithImageUrl, FormData } from '../types'

//  ユーザー確認メッセージを表示するBlockを作成
export const createMessageBlockForNotStudentAuthorization = (
  data: SignUpAuthorizationDataWithImageUrl
) => {
  const { name, email, password, certificationImageUrl } = data
  return [
    {
      "type": "header",
      "text": {
        "type": "plain_text",
        "text": name ? name : "No name",
      },
    },
    {
      "type": "section",
      "text": {
        "type": "plain_text",
        "text":  email ?? "No email address",
      },
      "block_id": "text1",
    },
    {
      "type": "section",
      "text": {
        "type": "plain_text",
        "text": password ?? "No password",
      },
      "block_id": "text2",
    },
    {
      "type": "image",
      "title": {
        "type": "plain_text",
        "text": "医学生および研修医の証明となるもの",
        "emoji": true,
      },
      "image_url": certificationImageUrl ?? "https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg",
      "alt_text": "cute cat",
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
            "text": "認可",
          },
          "style": "primary",
        },
      ],
    },
  ];
};

export const createMessageBlockForFormReceiver = (formData: FormData) => {
  const { name, email, content } = formData
  return [
    {
      "type": "header",
      "text": {
        "type": "plain_text",
        "text": name ? name : "No name",
      },
    },
    {
      "type": "section",
      "text": {
        "type": "plain_text",
        "text":  email ?? "No email address",
      },
      "block_id": "text1",
    },
    {
      "type": "section",
      "text": {
        "type": "plain_text",
        "text": content ?? "No content text",
      },
      "block_id": "text2",
    },
  ]
}
