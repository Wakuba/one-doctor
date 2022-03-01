//Library
import { useState, VFC } from 'react'
// import { useForm } from 'react-hook-form'
// import imageUploader from '../../lib/customFunctions/imageUploader'
// import postSlackMessageKnocker from '../../lib/customFunctions/postSlackMessageHitter'
import Input from '../atoms/Input'
import Form from '../molecules/Form'
import SingleSelector from '../atoms/SingleSelector'
import InputDouble from '../atoms/InputDouble'
import SubmitButton from '../atoms/SubmitButton'
import MultiSelector from '../atoms/MultiSelector'
import Link from 'next/link'
import DoubleBindCheck from '../molecules/DoubleBindCheck'
import univEmailValidator from '../../lib/customFunctions/univEmailValidator'
import { ModalBackdrop, ModalMainArea } from '../atoms/Modal'
import { useAuthProvider } from '../../lib/customHooks/useAuthProvider'

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
}

const StudentSignUpForm: VFC<{ style: string }> = ({ style }) => {
  const { signUp } = useAuthProvider()
  const [isStudentAuthErrorModalOpen, setIsStudentAuthErrorModalOpen] =
    useState(false)
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
    }
    console.log('cleansed', data)
    if (univEmailValidator(data.emailUniv)) {
      console.log('医学生認証完了')
      signUp(cleansedData)
    } else {
      setIsStudentAuthErrorModalOpen(true)
    }
  }

  return (
    <div className={style}>
      {isStudentAuthErrorModalOpen && (
        <>
          <ModalMainArea
            closeModal={() => setIsStudentAuthErrorModalOpen(false)}
            modalWrapperStyle='sm:w-9/12 ov-md:w-[70vw]'
            modalContainerStyle='w-full space-y-4'
          >
            医学生認証ができませんでした
          </ModalMainArea>
          <ModalBackdrop
            closeModal={() => setIsStudentAuthErrorModalOpen(false)}
          />
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
            subTitleOne: '大学のメアド以外を入力してください',
            nameTwo: 'emailTwo',
            titleTwo: 'メールアドレス(確認用)',
            subTitleTwo: '確認のためもう一度入力してください',
          }}
        />
        <Input
          {...{
            name: 'emailUniv',
            type: 'email',
            style: { wholeStyle: 'block', inputStyle: 'block' },
            subTitle:
              '医学生認証を行います。登録後にこのメアドにきたURLから本登録してください',
          }}
        >
          大学のメールアドレス
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

        <SingleSelector
          {...{
            name: 'grade',
            isSearchable: true,
            options: ['1', '2', '3', '4', '5', '6'],
          }}
        >
          学年
        </SingleSelector>
        <SingleSelector
          {...{
            name: 'university',
            isSearchable: true,
            options: [
              '順天堂大学',
              '筑波大学',
              '自治医科大学',
              '東京大学',
              '群馬大学',
              '杏林大学',
            ],
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
        <SubmitButton>送信する</SubmitButton>
      </Form>
    </div>
  )
}
export default StudentSignUpForm
