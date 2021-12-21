import {App} from "@slack/bolt";
import signUp from "../firebase/signUp";
// import { SignUpAuthorizationDataWithImageId } from "../type";
import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useActionListener = (app: App) => {
    app.action(
        {action_id: "is_medcoworker", block_id: "is_approved_or_not"},
        async ({body, say, ack}) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const bodyRe: any = body
          const certificationImageId: string= bodyRe.message.text ?? 'NO DATA'
          const data = await checkAuthorizedAndGetDataOnSpreadSheet(certificationImageId)
          console.log('data', data)
          await ack();
          await say('認可しました');
          signUp(data);
        }
    )
};

const checkAuthorizedAndGetDataOnSpreadSheet = async (id: string) => {
  const url = `https://script.google.com/macros/s/AKfycbxVkjCPglhyc3WJxOO0RuomqGIRm--iQYl3KoW1N9IaRYHDCshw4MW9MAFLG8s8alA4/exec?id=${id}`
  const response = await axios.get(url)
  // const response = await fetch(url, { method: 'GET'})
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = (await response.data ?? 'NO USER') as any
  return data
}

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
