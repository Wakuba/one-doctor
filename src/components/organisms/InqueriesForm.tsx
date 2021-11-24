import Form from '../organisms/Form'
import Input from '../FormGroup/Input'
import Textarea from '../FormGroup/Textarea'
import SubmitButton from '../atoms/SubmitButton'

const InqueriesForm = ({ style }) => {
  const onSubmit = (data) => {
    console.log('data', data)
  }
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
        <Textarea {...{ name: 'content' }}>お問い合わせ内容(必須)</Textarea>
        <SubmitButton>送信する</SubmitButton>
      </Form>
    </div>
  )
}

export default InqueriesForm
