/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {SignUpData} from "../type";
import { FormData } from "../type";

//  ユーザー確認メッセージを表示するBlockを作成
export const createMessageBlock = (data: SignUpData) => {
  const {name, email, password} = data;
  return [
    {
      "type": "header",
      "text": {
        "type": "plain_text",
        "text": name ? `${name}` : "No name",
      },
    },
    {
      "type": "section",
      "text": {
        "type": "plain_text",
        "text": email ? `${email}` : "No email address",
      },
      "block_id": "text1",
    },
    {
      "type": "section",
      "text": {
        "type": "plain_text",
        "text": password ? `${password}`: "No password",
      },
      "block_id": "text2",
    },
    // {
    //   "type": "image",
    //   "image_url": "http://placekitten.com/700/500",
    //   "alt_text": "Multiple cute kittens"
    // },
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
