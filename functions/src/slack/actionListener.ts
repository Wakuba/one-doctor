/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {App} from "@slack/bolt";
import signUp from "../firebase/signUp";

const useActionListener = (app: App) => {
    app.action(
        {action_id: "is_medcoworker", block_id: "is_approved_or_not"},
        async ({body, say, ack}) => {
          const bodyRe: any = body
          const password = bodyRe.message.text ? bodyRe.message.text : 'NO DATA',
            name = bodyRe.message.blocks[0].text.text ? bodyRe.message.blocks[0].text.text : 'NO NAME',
            email= bodyRe.message.blocks[1].text.text ? bodyRe.message.blocks[1].text.text : 'NO NAME'
          console.log('password だよ', password)
          console.log('nameだよ', name)
          console.log('emailだよ', email)
          await ack();
          await say('とりまおっけー');
          signUp({email: "m16065kt@jichi.ac.jp", password: "tatsujin16"});
        }
    )
};

export default useActionListener;

// body {
//   type: 'block_actions',
//   user: {
//     id: 'U01MY694K2R',
//     username: '1insp99persptashtash1',
//     name: '1insp99persptashtash1',
//     team_id: 'T01N17LBBS6'
//   },
//   api_app_id: 'A02M97PCQAX',
//   token: 'Y7VGeBkmSROXmC8M3pncjjf2',
//   container: {
//     type: 'message',
//     message_ts: '1636950773.000100',
//     channel_id: 'C02LUH7P0FR',
//     is_ephemeral: false
//   },
//   trigger_id: '2737176642433.1749258385890.def2056edf79b7b4867f0c872439c790',
//   team: { id: 'T01N17LBBS6', domain: 'one-doctor' },
//   enterprise: null,
//   is_enterprise_install: false,
//   channel: { id: 'C02LUH7P0FR', name: 'sec_医学生研修医認証' },
//   message: {
//     bot_id: 'B02M2FEH7AS',
//     type: 'message',
//     text: 'tatsujin',
//     user: 'U02M97Q88F5',
//     ts: '1636950773.000100',
//     team: 'T01N17LBBS6',
//     blocks: [ [Object], [Object], [Object], [Object] ]
//   },
//   state: { values: {} },
//   response_url: 'https://hooks.slack.com/actions/T01N17LBBS6/2724552244946/oSfl4YFiRmmpJ95Afgsy2Fxv',
//   actions: [
//     {
//       action_id: 'is_medcoworker',
//       block_id: 'is_approved_or_not',
//       text: [Object],
//       style: 'primary',
//       type: 'button',
//       action_ts: '1636957606.902831'
//     }
//   ]
// }
