import router from 'next/router'
import { SignUpAuthorizationDataWithImageId } from '../types'

export default async function postUserDataToSlackHitter(
  postData: SignUpAuthorizationDataWithImageId,
  abortCtrl: AbortController,
  disposalUrl: string
) {
  const { signal } = abortCtrl

  const stringifiedPostData = JSON.stringify(postData)

  await fetch(`/api/postMessageToSlack/${stringifiedPostData}`, {
    method: 'POST',
    signal,
  }).then(() => {
    router.push('/Dashboard')
    abortCtrl.abort()
    URL.revokeObjectURL(disposalUrl)
  })
}
