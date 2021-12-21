import imageUploader from '../../lib/customFunctions/imageUploader'
import Input from '../atoms/Input'
import Form from '../molecules/Form'
import SingleSelector from '../atoms/SingleSelector'
import InputDouble from '../atoms/InputDouble'
import SubmitButton from '../atoms/SubmitButton'
import MultiSelector from '../atoms/MultiSelector'
import Link from 'next/link'
import { VFC } from 'react'
import { SignUpAuthorizationDataWithImageId } from '../../lib/types'
import ImageHandler from '../atoms/ImageHandler'
import { httpsCallable } from 'firebase/functions'
import { firebaseFunction } from '../../lib/firebase/firebase.config'

interface NotStudentSignUpFormData {
  departmentWishFor: string[]
  doctorCertification: File
  emailOne: string
  emailTwo: string
  familyName: string
  familyRuby: string
  firstName: string
  firstRuby: string
  gender: string
  passwordOne: string
  passwordTwo: string
  workplace: string
  workplaceWishFor: string[]
}
const postNewUserData = httpsCallable(
  firebaseFunction,
  'postNewUserDataToSlack'
)

const RecidencySignUpForm: VFC<{ style: string }> = ({ style }) => {
  const onSubmit = async (data: NotStudentSignUpFormData) => {
    let cleansedData: SignUpAuthorizationDataWithImageId = {
      name: '',
      password: '',
      email: '',
      ruby: '',
      workplaceWishFor: [],
      departmentWishFor: [],
      workplace: '',
      gender: '',
      certificationImageId: '',
      isStudent: false,
    }
    await imageUploader(data.doctorCertification).then(
      (certificationImageId) => {
        cleansedData = {
          name: `${data.familyName} ${data.firstName}`,
          password: data.passwordOne,
          email: data.emailOne,
          ruby: `${data.familyRuby} ${data.firstRuby}`,
          workplaceWishFor: data.workplaceWishFor,
          departmentWishFor: data.departmentWishFor,
          workplace: data.workplace,
          gender: data.gender,
          certificationImageId: certificationImageId,
          isStudent: false,
        }
      }
    )
    postNewUserData(cleansedData)
      .then((res) => console.log('スラックへの送信成功', res))
      .catch((e) => console.log('スラックへの送信失敗', e))
    fetch(
      `https://script.google.com/macros/s/AKfycbyNLGQ84mlRwO5B-qtdNtVpqq1k3l0QNmW4QgDBerOpB8KQXx2crD9OO8Un9oeyazve/exec?data=${JSON.stringify(
        cleansedData
      )}`,
      {
        method: 'POST',
      }
    )
      .then((res) => console.log('スプレッドシートへ送信成功', res))
      .catch((e) => console.log('スプレッドシートへ送信失敗', e))
  }

  return (
    <div className={style}>
      <div title='topSection' className=''>
        <h1 className='mt-10 text-prime-blue-rich font-semibold text-2xl mb-6'>
          新規登録 for 研修医 or その他
        </h1>
        <div className='ov-md:inline sm:block mb-6'>
          <span>医学生の方は</span>
          <Link href='/StudentSignUp'>
            <a className='inline underline text-[#00B8FF]'>こちら</a>
          </Link>
        </div>
      </div>
      <div className='block mb-12'>
        <span>すでにアカウントをお持ちの方は</span>
        <Link href='/LogIn'>
          <a className='inline underline text-[#00B8FF]'>こちら</a>
        </Link>
      </div>
      <Form formName='signUpForm' onSubmit={onSubmit} style='space-y-6'>
        <InputDouble
          {...{
            name: 'name',
            nameOne: 'familyName',
            nameTwo: 'firstName',
            type: 'text',
            placeholderOne: '姓',
            placeholderTwo: '名',
          }}
        >
          お名前
        </InputDouble>
        <InputDouble
          {...{
            name: 'ruby',
            nameOne: 'familyRuby',
            nameTwo: 'firstRuby',
            type: 'text',
            placeholderOne: 'せい',
            placeholderTwo: 'めい',
          }}
        >
          ふりがな
        </InputDouble>
        <SingleSelector
          {...{
            name: 'gender',
            options: ['女性', '男性', 'その他'],
            placeholder: '▼選択してください',
            isSearchable: false,
          }}
        >
          性別
        </SingleSelector>
        <Input
          name='emailOne'
          type='email'
          style={{ wholeStyle: 'block', inputStyle: 'block' }}
          subTitle='※職場のメールアドレス以外を入力してください'
        >
          メールアドレス
        </Input>
        <Input
          name='emailTwo'
          type='email'
          style={{ wholeStyle: 'block', inputStyle: 'block' }}
        >
          メールアドレス(確認用)
        </Input>
        <Input
          name='workplace'
          type='text'
          style={{ wholeStyle: 'block', inputStyle: 'block' }}
          subTitle='※正式名称をご入力ください'
        >
          現在のお勤め先
        </Input>
        <MultiSelector
          {...{
            name: 'departmentWishFor',
            options: ['総合診療科', '精神科', '消化器内科', '循環器内科'],
          }}
        >
          希望診療科
        </MultiSelector>
        <MultiSelector
          {...{
            name: 'workplaceWishFor',
            options: ['東京', '栃木県', '茨城県', '大阪府'],
          }}
        >
          希望就職地
        </MultiSelector>
        <ImageHandler name='doctorCertification'>医師認証</ImageHandler>
        <Input
          name='passwordOne'
          type='password'
          style={{ wholeStyle: 'block', inputStyle: 'block' }}
          subTitle='（仮テキスト）半角英数を混ぜて６文字以上'
        >
          パスワード
        </Input>
        <Input
          name='passwordTwo'
          type='password'
          style={{ wholeStyle: 'block', inputStyle: 'block' }}
        >
          パスワード※ （確認用）
        </Input>

        <SubmitButton>送信する</SubmitButton>
      </Form>
    </div>
  )
}
export default RecidencySignUpForm
