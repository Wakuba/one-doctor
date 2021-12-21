import { VFC } from 'react'
import Form from '../molecules/Form'
import Input from '../atoms/Input'
import SubmitButton from '../atoms/SubmitButton'
import Link from 'next/link'
import { useAuthProvider } from '../../lib/customHooks/useAuthProvider'
import { useRouter } from 'next/router'

interface LoginFormData {
  email: string
  password: string
}

const LoginForm: VFC<{ style: string }> = ({ style }) => {
  const auth = useAuthProvider()
  const router = useRouter()

  const onSubmit = (data: LoginFormData) => {
    console.log(data)
    const { email, password } = data
    return auth.logIn({ email, password }).then((user) => {
      console.log('logIn function', data)
      router.push('/UserDashboard')
      console.log('logInData', user)
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
          style={{ wholeStyle: 'block', inputStyle: 'block' }}
          subTitle='大学のメアド以外を入力してください'
        >
          メールアドレス
        </Input>
        <Input
          name='password'
          type='password'
          style={{ wholeStyle: 'block', inputStyle: 'block' }}
          subTitle='（仮テキスト）半角英数を混ぜて６文字以上'
        >
          パスワード
        </Input>
        <SubmitButton>ログイン</SubmitButton>
      </Form>
    </div>
  )
}

export default LoginForm
