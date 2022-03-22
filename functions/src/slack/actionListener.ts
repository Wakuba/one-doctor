import { App } from "@slack/bolt";
import axios from 'axios'
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
// import { config } from '../index'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useActionListener = (app: App) => {
  app.action(
    { action_id: "is_medcoworker", block_id: "is_approved_or_not" },
    async ({ body, ack }) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ack();
      const bodyRe: any = body
      const certificationImageId: string = bodyRe.message.text ?? 'NO DATA'
      const data = await checkAuthorizedAndGetDataOnSpreadSheet(certificationImageId)
      console.log('data', data)
      const ref = doc(db, 'odUsers', data.uid)
      updateDoc(ref, {authorizedByAdmin: true}).then(res => authMailer(data.email))
      // const ts: string = bodyRe.container.message_ts
      // app.client.chat.delete({ channel: config.slack.channel_id, ts }).then(res => console.log(res)).catch(e => console.log(e))
    }
  )
};

const checkAuthorizedAndGetDataOnSpreadSheet = async (id: string) => {
  const url = `https://script.google.com/macros/s/AKfycbzF4jRdYnALYAsI16obWepSDzM3DQXuv1Q-aYy4QjOB7YqdA0UWl2NiWEw6r4xbq6Q/exec?id=${id}`
  const response = await axios.get(url)
  // const response = await fetch(url, { method: 'GET'})
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = (await response.data ?? 'NO USER') as any
  return data
}

const authMailer = async (adress :string) => {
  const url = `https://script.google.com/macros/s/AKfycbztwt4U0y5kpFUbO-Oaym4i4Aw31PFjxolJoErH04zFGLuysbWBp9pkdKGsIUvlpy1plA/exec?email=${adress}`
  const response = await axios.post(url)
  return response
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
// import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile, User, } from "firebase/auth";
// import { auth, db } from '../firebase/firebase.config'
// import { setDoc, doc, getDoc } from 'firebase/firestore'
// import { SignUpDataTypeForNotStudent } from "../type";

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const signUp = (data: SignUpDataTypeForNotStudent) => {
//   console.log('signUpData', data)
//   createUserWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {
//     const odUser = userCredential.user;
//     const id = odUser.uid
//     updateProfile(odUser, { displayName: data.name })
//     console.log('uid', odUser.uid)
//     setDoc(doc(db, 'odUsers', id), data).then(res => console.log(res)).catch(e => console.log('errorです', e))
//     sendEmailVerificationToUser(odUser)
//   }).catch((error) => {
//     const errorCode = error.code
//     const errorMessage = error.message
//     console.log('errorCode', errorCode)
//     console.log('errorMessage', errorMessage)
//     if (errorCode === 'auth/email-already-in-use')
//     alert('アカウントはすでに存在しています')
//   })
// };
// const signUp = (data: SignUpDataTypeForStudent): void =>
//   createUserWithEmailAndPassword(auth, data.email, data.password)
//     .then((userCredential) => {
//       const odUser = userCredential.user
//       setOdUser(odUser)
//       updateProfile(odUser, { displayName: data.name })
//       addUserDataOnFirestore({
//         uid: userCredential.user.uid,
//         ...data,
//       })
//       sendEmailVerificationToUser(odUser)
//     }).catch((error) => {
//       const errorCode = error.code
//       const errorMessage = error.message
//       console.log('errorCode', errorCode)
//       console.log('errorMessage', errorMessage)
//       if (errorCode === 'auth/email-already-in-use')
//         alert('アカウントはすでに存在しています')
//     })



// const sendEmailVerificationToUser = (
//   odUser: User
// )  => {
//   const acctionCodeSetting = {
//     url: 'http://localhost:3000/UserDashboard',
//   }
//   if (odUser) return sendEmailVerification(odUser, acctionCodeSetting)
//   else {
//     console.log('odUser is null')
//     return
//   }
// }
