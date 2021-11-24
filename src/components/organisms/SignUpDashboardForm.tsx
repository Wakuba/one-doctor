import Link from 'next/link'
import Form from './Form'
import Input from '../FormGroup/Input'
import SubmitButton from '../atoms/SubmitButton'

const SignUpDashboardForm = () => {
  return (
    <Form>
      <div>
        <span>新規登録</span>
        <span>すでにアカウントを持っている場合は</span>
        <Link>こちら</Link>
      </div>
      <Input {...{ type: 'radio', name: 'medStudent' }}>医学生</Input>
      <Input {...{ type: 'radio', name: 'residency' }}>研修医</Input>
      <Input {...{ type: 'radio', name: 'rest' }}>
        その他（医局所属なし, 大学院生）
      </Input>
      <SubmitButton>新規登録へ進む</SubmitButton>
    </Form>
  )
}

export default SignUpDashboardForm
