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

interface MedStudentSignUpFormData {
  name: string
  email: string
  passwordOne: string
  passwordTwo: string
}

const MedStudentSignUpForm: React.FC = ({ style }) => {
  const [certificationImage, setCertificationImage] = useState<File | null>(
    null
  )
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  // -------------error states---------------------------------------------------- //
  const [noImageError, setNoImageError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [isFileTypeError, setIsFileTypeError] = useState<boolean>(false)
  // ----------------------------------------------------------------------------- //

  const { handleSubmit, getValues } = useForm()

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    // ファイルがない場合
    if (event.target.files === null || event.target.files.length === 0) {
      return
    }

    const files = Object.values(event.target.files)

    console.log(files)

    const pickedPhotos = files.filter((file) => {
      if (
        ![
          'image/gif',
          'image/jpeg',
          'image/png',
          'image/bmp',
          'image/svg+xml',
        ].includes(file.type)
      ) {
        setIsFileTypeError(true)
        return false
      }

      return true
    })

    // ファイルがない場合
    if (pickedPhotos.length === 0) return
    const picked = pickedPhotos[0]

    // エラーハンドリング後, 要素が一つになったFileListをFile[]=>Fileにしてstateに格納
    setCertificationImage(picked)
    console.log(certificationImage)
    setPreviewUrl(URL.createObjectURL(new Blob(files)))
  }

  const onSubmit = (data: MedStudentSignUpFormData) => {
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
    // } else if (!certificationImage) {
    //   setNoImageError(true)
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
      <div title='topSection' className='mb-12'>
        <h1 className='mt-10 text-prime-blue-rich font-semibold text-2xl'>
          新規登録 for 医学生
        </h1>
        <span>研修医の方は</span>
        <div className='inline'>こちら</div>
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
            isSearchable: false
          }}
        >
          性別
        </SingleSelector>

        <Input
          name='emailOne'
          type='email'
          style={{ wholeStyle: 'block', inputStyle: 'block' }}
          subTitle='大学のメアド以外を入力してください'
        >
          メールアドレス
        </Input>
        <Input
          name='emailTwo'
          type='email'
          style={{ wholeStyle: 'block', inputStyle: 'block' }}
        >
          メールアドレス
        </Input>
        <Input
          name='emailUniv'
          type='email'
          style={{ wholeStyle: 'block', inputStyle: 'block' }}
          subTitle='医学生認証を行います。登録後にこのメアドにきたURLから本登録してください'
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

        <SingleSelector {...{ name: 'grade', isSearchable: true, options: [1, 2, 3, 4, 5, 6] }}>
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

        {/* {isFileTypeError && (
        <div className='text-red-500'>
          ※jpeg, png, bmp, gif, svg以外のファイル形式は選択できません
        </div>
      )}
      {noImageError && (
        <div className='text-red-500'>※画像が選択されていません</div>
      )} */}

        <SubmitButton>送信する</SubmitButton>
      </Form>
    </div>
  )
}
export default MedStudentSignUpForm
