import Form from './Form'
import Input from './formAtoms/Input'
import Textarea from './formAtoms/Textarea'
import SubmitButton from './formAtoms/SubmitButton'
import { VFC } from 'react'
import { firebaseFunction } from '../../lib/firebase/firebase.config'
import { httpsCallable } from '@firebase/functions'

const postFormData = httpsCallable(firebaseFunction, 'postFormDataToSlack')
const consoler = httpsCallable(firebaseFunction, 'consolerTest')

const InqueriesForm: VFC<{ style: string }> = ({ style }) => {
  const onSubmit = (data: any) => {
    // console.log('data', data)
    // const abortCtrl = new AbortController()
    // postFormToSlackHitter(data, abortCtrl)
    postFormData(data)
    consoler()
  }
  return (
    <main className={style}>
      <div className='mt-10'>
        <h1 className='text-2xl text-prime-blue-rich font-semibold mb-6'>
          お問い合わせ
        </h1>
        <p className='text-sm mb-6'>
          以下のフォームに必要事項をご記入のうえ、「送信する」をクリックしてください
        </p>
      </div>
      <Form
        formName='inqueries'
        onSubmit={onSubmit}
        style='flex flex-col bg-prime-blue-muted space-y-6'
      >
        <Input {...{ name: 'name', type: 'text' }}>お名前(必須)</Input>
        <Input {...{ name: 'email', type: 'email' }}>
          メールアドレス(必須)
        </Input>
        <Textarea {...{ name: 'content' }}>お問い合わせ内容(必須)</Textarea>
        <SubmitButton style={{ buttonStyle: 'h-11 w-48' }}>
          送信する
        </SubmitButton>
      </Form>
    </main>
  )
}

export default InqueriesForm
