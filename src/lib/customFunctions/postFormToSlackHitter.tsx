import router from 'next/router'
import { FormDataType } from '../types'

export default async function postFormToSlackHitter(
  formData: FormDataType,
  abortCtrl: AbortController
) {
  const { signal } = abortCtrl

  const stringifiedFormtData = JSON.stringify(formData)
  console.log('str', stringifiedFormtData)

  await fetch(`/api/postFormToSlack/${stringifiedFormtData}`, {
    method: 'POST',
    signal,
  }).then(() => {
    router.push('/')
    abortCtrl.abort()
  })
}
