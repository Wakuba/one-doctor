import { useRouter } from 'next/router'
import { useAuth } from '../../lib/context'
import Form from './Form'
import Input from './formAtoms/Input'
import SubmitButton from './formAtoms/SubmitButton'
const ResetPasswordForm: React.VFC<{ style: string }> = ({ style }) => {
  const auth = useAuth()
  const router = useRouter()
  const onSubmit = (data: { email: string }) => {
    console.log('email', data.email)
    auth.sendPasswordResetEmailToUser(data.email)
    console.log('sendPasswordReset実行完了')
    router.push('/UserDashboard')
  }
  return (
    <main className={style}>
      <div className='mt-10'>
        <h1 className='text-2xl text-prime-blue-rich font-semibold mb-6'>
          パスワードの変更
        </h1>
        <p className='text-sm mb-6'>
          以下のフォームに必要事項をご記入のうえ、「送信する」をクリックしてください
        </p>
      </div>
      <Form
        formName='resetPassword'
        onSubmit={onSubmit}
        style='flex flex-col bg-prime-blue-muted space-y-6'
      >
        <Input {...{ name: 'name', type: 'text' }}>お名前(必須)</Input>
        <Input {...{ name: 'email', type: 'email' }}>
          メールアドレス(必須)
        </Input>
        <SubmitButton style={{ buttonStyle: 'h-11 w-48' }}>
          送信する
        </SubmitButton>
      </Form>
    </main>
  )
}
export default ResetPasswordForm
