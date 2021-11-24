//Library
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import imageUploader from '../../lib/customFunctions/imageUploader'
import postSlackMessageKnocker from '../../lib/customFunctions/postSlackMessageHitter'
import Input from '../atoms/Input'
import Form from '../organisms/Form'
import SimpleSelector from '../molecules/SimpleSelector'
import InputDouble from '../molecules/InputDouble'
import SubmitButton from '../atoms/SubmitButton'

interface SignUpFormData {
  name: string
  email: string
  passwordOne: string
  passwordTwo: string
}

const SignUpForm: React.FC = ({ style }) => {
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

  const onSubmit = (data: SignUpFormData) => {
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
      <div>新規登録</div>
      <Form formName='signUpForm' onSubmit={onSubmit}>
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
          お名前
        </InputDouble>
        <SimpleSelector
          {...{
            name: 'gender',
            options: ['女性', '男性', 'その他'],
            placeholder: '▼選択してください',
          }}
        >
          性別
        </SimpleSelector>

        <Input
          name='emailOne'
          type='email'
          style={{ wholeStyle: 'block', inputStyle: 'block' }}
        >
          メールアドレス ※大学のメアド以外を入力してください
        </Input>
        <Input
          name='emailTwo'
          type='email'
          style={{ wholeStyle: 'block', inputStyle: 'block' }}
        >
          メールアドレス※（確認用）
        </Input>
        <Input
          name='emailUniv'
          type='email'
          style={{ wholeStyle: 'block', inputStyle: 'block' }}
        >
          大学のメールアドレス
          ※医学生認証を行います。登録後にこのメアドにきたURLから本登録してください。
        </Input>
        <Input
          name='passwordOne'
          type='password'
          style={{ wholeStyle: 'block', inputStyle: 'block' }}
        >
          パスワード ※（仮テキスト）半角英数を混ぜて６文字以上
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
export default SignUpForm
