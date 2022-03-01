import router from 'next/router'
import { SignUpAuthorizationDataTypeDataWithImageId } from '../types'

export default async function postUserDataToSlackHitter(
  postData: SignUpAuthorizationDataTypeDataWithImageId,
  abortCtrl: AbortController,
  disposalUrl: string
) {
  const { signal } = abortCtrl

  const stringifiedPostData = JSON.stringify(postData)

  await fetch(`/api/postUserDataToSlack/${stringifiedPostData}`, {
    method: 'POST',
    signal,
  }).then(() => {
    router.push('/Dashboard')
    abortCtrl.abort()
    URL.revokeObjectURL(disposalUrl)
  })
}
