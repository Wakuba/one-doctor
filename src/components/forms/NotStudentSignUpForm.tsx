import imageUploader from '../../lib/customFunctions/imageUploader'
import Input from './formAtoms/Input'
import Form from './Form'
import SingleSelector from './formAtoms/SingleSelector'
import InputDouble from './formAtoms/InputDouble'
import SubmitButton from './formAtoms/SubmitButton'
import MultiSelector from './formAtoms/MultiSelector'
import Link from 'next/link'
import { VFC } from 'react'
import {
  SignUpAuthorizationDataTypeDataWithImageId,
  SignUpDataTypeForNotStudent,
} from '../../lib/types'
import ImageHandler from './formAtoms/ImageHandler'
import { httpsCallable } from 'firebase/functions'
import { firebaseFunction } from '../../lib/firebase/firebase.config'
import {
  departmentCategoryList,
  prefectureList,
} from '../../../public/staticData'
import postPreUserData from '../../lib/customFunctions/postPreUserData'
import { useAuthProvider } from '../../lib/customHooks/useAuthProvider'
import { ModalBackdrop, ModalMainArea } from '../UIAtoms/Modal'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeEAUModal,
  openEAUModal,
  selectEAUModal,
} from '../../features/modalsSlice'
import { useRouter } from 'next/router'

interface NotStudentSignUpFormDataType {
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
  ts: Date
}
const postNewUserData = httpsCallable(
  firebaseFunction,
  'postNewUserDataToSlack'
)

const RecidencySignUpForm: VFC<{ style: string }> = ({ style }) => {
  const { signUp } = useAuthProvider()
  const isEmailAlreadyInUse = useSelector(selectEAUModal)
  const dispatch = useDispatch()
  const router = useRouter()
  const onSubmit = async (data: NotStudentSignUpFormDataType) => {
    // const dcFile = new File()
    const certificationImageId = await imageUploader(data.doctorCertification)
    const cleansedData: SignUpAuthorizationDataTypeDataWithImageId = {
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
      authorizedByAdmin: false,
      favoDeparts: [],
      favoEvents: [],
      ts: new Date(),
    }

    const signUpData: SignUpDataTypeForNotStudent = {
      name: `${data.familyName} ${data.firstName}`,
      password: data.passwordOne,
      email: data.emailOne,
      ruby: `${data.familyRuby} ${data.firstRuby}`,
      workplaceWishFor: data.workplaceWishFor,
      departmentWishFor: data.departmentWishFor,
      workplace: data.workplace,
      gender: data.gender,
      isStudent: false,
      authorizedByAdmin: false,
      favoDeparts: [],
      favoEvents: [],
      ts: new Date(),
    }
    if (!('grade' in signUpData)) {
      signUp(signUpData)
        .then((odUser) => {
          router.push('/Loading')
          postNewUserData({ ...cleansedData, uid: odUser.uid })
            .then((res) => console.log('スラックへの送信成功', res))
            .catch((e) => console.log('スラックへの送信失敗', e))
            .then(() => router.push('/AccountRegistrationFinished'))
          postPreUserData({ ...cleansedData, uid: odUser.uid }).then((res) =>
            console.log('スプレッドシートへの送信成功', res)
          )
        })
        .then(() => {
          router.push('/AccountRegistrationFinished')
        })
        .catch((e) => {
          if (e.code === 'auth/email-already-in-use') dispatch(openEAUModal())
        })
    }
  }

  return (
    <div className={style}>
      {isEmailAlreadyInUse && (
        <>
          <ModalMainArea
            closeModal={() => dispatch(closeEAUModal())}
            modalWrapperStyle='sm:w-9/12 ov-md:w-[70vw]'
            modalContainerStyle='w-full space-y-4'
            zIndex='z-60'
          >
            メールアドレスが既に使用されています
          </ModalMainArea>
          <ModalBackdrop closeModal={() => dispatch(closeEAUModal())} />
        </>
      )}
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
          style={{ wrapperStyle: 'block', inputStyle: 'block' }}
          subTitle='※職場のメールアドレス以外を入力してください'
        >
          メールアドレス
        </Input>
        <Input
          name='emailTwo'
          type='email'
          style={{ wrapperStyle: 'block', inputStyle: 'block' }}
        >
          メールアドレス(確認用)
        </Input>
        <Input
          name='workplace'
          type='text'
          style={{ wrapperStyle: 'block', inputStyle: 'block' }}
          subTitle='※正式名称をご入力ください'
        >
          現在のお勤め先
        </Input>
        <MultiSelector
          name='departmentWishFor'
          options={departmentCategoryList}
        >
          希望診療科
        </MultiSelector>
        <MultiSelector
          {...{
            name: 'workplaceWishFor',
            options: prefectureList,
          }}
        >
          希望就職地
        </MultiSelector>
        <ImageHandler name='doctorCertification'>医師認証</ImageHandler>
        <Input
          name='passwordOne'
          type='password'
          style={{ wrapperStyle: 'block', inputStyle: 'block' }}
          subTitle='（仮テキスト）半角英数を混ぜて６文字以上'
        >
          パスワード
        </Input>
        <Input
          name='passwordTwo'
          type='password'
          style={{ wrapperStyle: 'block', inputStyle: 'block' }}
        >
          パスワード※ （確認用）
        </Input>

        <SubmitButton style={{ buttonStyle: 'h-11 w-48' }}>
          送信する
        </SubmitButton>
      </Form>
    </div>
  )
}
export default RecidencySignUpForm
