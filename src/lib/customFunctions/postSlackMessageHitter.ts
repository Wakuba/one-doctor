import router from 'next/router'
import { SignUpAuthorizationDataWithImageId } from '../types'

export default async function postSlackMessageHitter(
  name: string,
  email: string,
  password: string,
  id: string,
  abortCtrl: AbortController,
  disposalUrl: string
) {
  const { signal } = abortCtrl

  const postData: SignUpAuthorizationDataWithImageId = {
    name,
    email,
    password,
    certificationImageId: id,
  }

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

