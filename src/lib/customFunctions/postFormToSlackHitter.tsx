import router from 'next/router'
import { FormData } from '../types'

export default async function postFormToSlackHitter(
  formData: FormData,
  abortCtrl: AbortController
) {
  const { signal } = abortCtrl

  const stringifiedFormtData = JSON.stringify(formData)

  await fetch(`/api/postFormToSlack/${stringifiedFormtData}`, {
    method: 'POST',
    signal,
  }).then(() => {
    router.push('/')
    abortCtrl.abort()
  })
}
