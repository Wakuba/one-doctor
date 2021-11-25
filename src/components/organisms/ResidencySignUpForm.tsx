//Library
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import imageUploader from '../../lib/customFunctions/imageUploader'
import postSlackMessageKnocker from '../../lib/customFunctions/postSlackMessageHitter'
import Input from '../atoms/Input'
import Form from '../molecules/Form'
import SingleSelector from '../atoms/SingleSelector'
import InputDouble from '../atoms/InputDouble'
import SubmitButton from '../atoms/SubmitButton'
import MultiSelector from '../atoms/MultiSelector'
import ImageUpload from '../atoms/ImageUpload'
import Link from 'next/link'

interface RecidencySignUpFormData {
  name: string
  email: string
  passwordOne: string
  passwordTwo: string
}

const RecidencySignUpForm: React.FC = ({ style }) => {
  const [certificationImage, setCertificationImage] = useState<File | null>(
    null
  )
  const [passwordError, setPasswordError] = useState<boolean>(false)

  const onSubmit = (data: RecidencySignUpFormData) => {
    console.log(data)
    console.log('certificationImage', certificationImage)
    const { name, email, passwordOne } = data
    const password = passwordOne

    /*
    firesotreにファイル名などのファイル情報をアップロード=>id発行
    firestoreのidをmetadataとしてstorageにアップロード
    */

    // const abortCtrl = new AbortController()
    // if (getValues('passwordOne') !== getValues('passwordTwo')) {
    //   setPasswordError(true)
    // } else {
    //   imageUploader(certificationImage).then((id) =>
    //     postSlackMessageKnocker(
    //       name,
    //       email,
    //       password,
    //       id,
    //       abortCtrl,
    //       previewUrl
    //     )
    //   )
    // }
  }

  return (
    <div className={style}>
      <div title='topSection' className=''>
        <h1 className='mt-10 text-prime-blue-rich font-semibold text-2xl mb-6'>
          新規登録 for 研修医 or その他
        </h1>
        <div className='ov-md:inline sm:block mb-6'>
          <span>医学生の方は</span>
          <Link href='/MedStudentSignUp'>
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
        <ImageUpload name='doctorCertification' setCertificationImage={setCertificationImage}>医師認証</ImageUpload>
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
