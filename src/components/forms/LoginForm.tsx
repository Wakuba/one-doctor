import { VFC } from 'react'
import Form from './Form'
import Input from './formAtoms/Input'
import Link from 'next/link'
import { useAuthProvider } from '../../lib/customHooks/useAuthProvider'
import { useRouter } from 'next/router'
import SubmitButton from './formAtoms/SubmitButton'

interface LoginFormDataType {
  email: string
  password: string
}

const LoginForm: VFC<{ style: string }> = ({ style }) => {
  const { logIn } = useAuthProvider()
  const router = useRouter()

  const onSubmit = (data: LoginFormDataType) => {
    const { email, password } = data
    return logIn({ email, password }).then(() => {
      router.push('/UserDashboard')
    })
  }

  return (
    <div className={`${style}`}>
      <div title='topSection' className='mb-6 mt-10'>
        <h1 className='text-prime-blue-rich font-semibold text-2xl ov-md:inline sm:block mr-6 sm:mb-6'>
          ログイン
        </h1>
        <div className='sm:block ov-md:inline'>
          <span>新しく登録する場合は</span>
          <Link href='/SignUpDashboard'>
            <a className='inline underline text-[#00B8FF]'>こちら</a>
          </Link>
        </div>
      </div>
      <Form formName='login' onSubmit={onSubmit} style={`space-y-6`}>
        <Input
          name='email'
          type='email'
          style={{ wrapperStyle: 'block', inputStyle: 'block' }}
          subTitle='大学のメールアドレス以外を入力してください'
        >
          メールアドレス
        </Input>
        <Input
          name='password'
          type='password'
          style={{ wrapperStyle: 'block', inputStyle: 'block' }}
          subTitle='（仮テキスト）半角英数を混ぜて６文字以上'
        >
          パスワード
        </Input>
        <SubmitButton style={{ buttonStyle: 'h-11 w-48' }}>
          ログイン
        </SubmitButton>
      </Form>
    </div>
  )
}

export default LoginForm
