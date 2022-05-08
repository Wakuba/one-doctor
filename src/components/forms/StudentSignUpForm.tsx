//Library
import { useState, VFC } from 'react'
// import { useForm } from 'react-hook-form'
// import imageUploader from '../../lib/customFunctions/imageUploader'
// import postSlackMessageKnocker from '../../lib/customFunctions/postSlackMessageHitter'
import Input from './formAtoms/Input'
import Form from './Form'
import SingleSelector from './formAtoms/SingleSelector'
import InputDouble from './formAtoms/InputDouble'
import SubmitButton from './formAtoms/SubmitButton'
import MultiSelector from './formAtoms/MultiSelector'
import Link from 'next/link'
import DoubleBindCheck from './formAtoms/DoubleBindCheck'
import univEmailValidator from '../../lib/customFunctions/univEmailValidator'
import { ModalBackdrop, ModalMainArea } from '../UIAtoms/Modal'
import { useAuthProvider } from '../../lib/customHooks/useAuthProvider'
import {
  departmentCategoryList,
  gradeList,
  prefectureList,
  universityList,
} from '../../../public/staticData'
import { useRouter } from 'next/router'

interface StudentSignUpFormDataType {
  departmentWishFor: string[]
  emailOne: string
  emailTwo: string
  emailUniv: string
  familyName: string
  familyRuby: string
  firstName: string
  firstRuby: string
  gender: string
  grade: string
  passwordOne: string
  passwordTwo: string
  university: string
  workplaceWishFor: string[]
  ts: Date
}

const StudentSignUpForm: VFC = () => {
  const { signUp } = useAuthProvider()
  const router = useRouter()
  const [isStudentAuthErrorModalOpen, setIsStudentAuthErrorModalOpen] =
    useState(false)
  const [emailAlreadyInUseModal, setEmailAlreadyInUseModal] = useState(false)
  const onSubmit = (data: StudentSignUpFormDataType) => {
    const cleansedData = {
      name: `${data.familyName} ${data.firstName}`,
      password: data.passwordOne,
      email: data.emailOne,
      ruby: `${data.familyRuby} ${data.firstRuby}`,
      workplaceWishFor: data.workplaceWishFor,
      departmentWishFor: data.departmentWishFor,
      gender: data.gender,
      grade: data.grade,
      university: data.university,
      isStudent: true,
      favoDeparts: [],
      favoEvents: [],
      ts: new Date(),
    }
    if (univEmailValidator(data.emailUniv)) {
      signUp(cleansedData)
        .then(() => {
          setEmailAlreadyInUseModal(false)
          setIsStudentAuthErrorModalOpen(false)
          router.push('/AccountRegistrationFinished')
        })
        .catch((e) => {
          if (e.code === 'auth/email-already-in-use')
            setEmailAlreadyInUseModal(true)
        })
    } else {
      setIsStudentAuthErrorModalOpen(true)
    }
    setEmailAlreadyInUseModal(false)
    setIsStudentAuthErrorModalOpen(false)
    router.push('/AccountRegistrationFinished')
  }

  return (
    <>
      {isStudentAuthErrorModalOpen && (
        <>
          <ModalMainArea
            closeModal={() => setIsStudentAuthErrorModalOpen(false)}
            modalWrapperStyle='sm:w-9/12 ov-md:w-[70vw]'
            modalContainerStyle='w-full space-y-4'
            zIndex='z-60'
          >
            医学生認証ができませんでした
          </ModalMainArea>
          <ModalBackdrop
            closeModal={() => setIsStudentAuthErrorModalOpen(false)}
          />
        </>
      )}
      {emailAlreadyInUseModal && (
        <>
          <ModalMainArea
            closeModal={() => setEmailAlreadyInUseModal(false)}
            modalWrapperStyle='sm:w-9/12 ov-md:w-[70vw]'
            modalContainerStyle='w-full space-y-4'
            zIndex='z-60'
          >
            メールアドレスが既に使用されています
          </ModalMainArea>
          <ModalBackdrop closeModal={() => setEmailAlreadyInUseModal(false)} />
        </>
      )}
      <div title='topSection'>
        <h1 className='mt-10 text-prime-blue-rich font-semibold text-2xl mb-6'>
          新規登録 for 医学生
        </h1>
        <div className='ov-md:inline sm:block mb-6'>
          <span>研修医の方は</span>
          <Link href='/NotStudentSignUp'>
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
            style: { wrapperStyle: 'mb-10' },
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
            style: { wrapperStyle: 'pb-20' },
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
        <DoubleBindCheck
          {...{
            name: 'doubleBindEmailCheck',
            type: 'email',
            errorSetting: {
              errorName: 'emailNotMatched',
              errorMessage: 'メールアドレスが一致していません',
            },
            nameOne: 'emailOne',
            titleOne: 'メールアドレス',
            subTitleOne: '大学のメールアドレス以外を入力してください',
            nameTwo: 'emailTwo',
            titleTwo: 'メールアドレス(確認用)',
            subTitleTwo: '確認のためもう一度入力してください',
          }}
        />
        <Input
          {...{
            name: 'emailUniv',
            type: 'email',
            style: { wrapperStyle: 'block', inputStyle: 'block' },
            subTitle:
              '医学生認証を行います。登録後にこのメールアドレスにきたURLから本登録してください',
          }}
        >
          大学のメールアドレス
        </Input>
        <MultiSelector
          {...{
            name: 'departmentWishFor',
            options: departmentCategoryList,
          }}
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

        <SingleSelector
          {...{
            name: 'grade',
            isSearchable: true,
            options: gradeList,
          }}
        >
          学年
        </SingleSelector>
        <SingleSelector
          {...{
            name: 'university',
            isSearchable: true,
            options: universityList,
          }}
        >
          大学名
        </SingleSelector>
        <DoubleBindCheck
          {...{
            name: 'doubleBindPasswordCheck',
            type: 'password',
            errorSetting: {
              errorName: 'passwordNotMatched',
              errorMessage: 'パスワードが一致していません',
            },
            nameOne: 'passwordOne',
            titleOne: 'パスワード',
            subTitleOne: '（仮テキスト）半角英数を混ぜて６文字以上',
            nameTwo: 'passwordTwo',
            titleTwo: 'パスワード(確認用)',
          }}
        />
        <SubmitButton style={{ buttonStyle: 'h-11 w-48' }}>
          送信する
        </SubmitButton>
      </Form>
    </>
  )
}
export default StudentSignUpForm
