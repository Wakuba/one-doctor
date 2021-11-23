import Form from '../organisms/Form'
import Input from '../atoms/Input'
import Textarea from '../atoms/Textarea'
import SubmitButton from '../atoms/SubmitButton'
const InqueriesForm = ({ style }) => {
  return (
    <div className={style}>
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
        <Input {...{ name: 'email', type: 'text' }}>メールアドレス(必須)</Input>
        <Textarea {...{ name: 'content' }} >お問い合わせ内容(必須)</Textarea>
        <SubmitButton />
      </Form>
    </div>
  )
}

export default InqueriesForm

function onSubmit(data) {
  console.log('data', data)
  // const target = e.target as typeof e.target & {
  //     content: { value: string }
  //     email: { value: string }
  //     name: { value: string }
  //   },
  //   data = {
  //     content: target.content.value,
  //     email: target.email.value,
  //     name: target.name.value,
  //   },
  //   sendMail = httpsCallable(firebaseFunction, 'sendMail')
  // sendMail(data)
  // target.name.value = ''
  // target.email.value = ''
  // target.content.value = ''
}
