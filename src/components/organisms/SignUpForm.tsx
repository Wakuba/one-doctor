//Library
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import imageUploader from '../../lib/customFunctions/imageUploader'
import postSlackMessageKnocker from '../../lib/customFunctions/postSlackMessageHitter'

interface SignUpFormData {
  name: string
  email: string
  passwordOne: string
  passwordTwo: string
}

const SignUpForm: React.FC = () => {
  const [certificationImage, setCertificationImage] = useState<File | null>(
    null
  )
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  // -------------error states---------------------------------------------------- //
  const [noImageError, setNoImageError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [isFileTypeError, setIsFileTypeError] = useState<boolean>(false)
  // ----------------------------------------------------------------------------- //

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()

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
    console.log('certificationImage', certificationImage)
    const { name, email, passwordOne } = data
    const password = passwordOne

    /*
    firesotreにファイル名などのファイル情報をアップロード=>id発行
    firestoreのidをmetadataとしてstorageにアップロード
    */

    const abortCtrl = new AbortController()
    if (getValues('passwordOne') !== getValues('passwordTwo')) {
      setPasswordError(true)
    } else if (!certificationImage) {
      setNoImageError(true)
    } else {
      imageUploader(certificationImage).then((id) =>
        postSlackMessageKnocker(
          name,
          email,
          password,
          id,
          abortCtrl,
          previewUrl
        )
      )
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {passwordError && (
        <div className='text-red-500'>※パスワードが一致していません</div>
      )}
      <button
        onClick={() => {
          fetch(
            `/api/postMessageToSlack/${JSON.stringify({
              name: 'tashiro',
              email: 'asdf;lkj',
            })}`,
            { method: 'POST' }
          )
        }}
      >
        slackに投げる
      </button>
      <div className='rounded-md shadow-sm'>
        <label
          htmlFor='name'
          className='block text-sm font-medium leading-5 text-gray-700'
        >
          Name
        </label>
        <input
          id='name'
          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
          type='text'
          {...register('name', {
            required: 'Please enter an name',
          })}
        />
        {errors.password && (
          <div className='mt-2 text-xs text-red-600'>
            {errors.password.message}
          </div>
        )}
      </div>

      <div className='mt-6'>
        <label
          htmlFor='email'
          className='block text-sm font-medium leading-5 text-gray-700'
        >
          Email address
        </label>
        <div className='mt-1 rounded-md shadow-sm'>
          <input
            id='email'
            className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
            type='email'
            {...register('email', {
              required: 'Please enter an email',
              // pattern: {
              //   value:
              //     /^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,
              //   message: 'Not a valid email',
              // },
            })}
          />
          {errors.email && (
            <div className='mt-2 text-xs text-red-600'>
              {errors.email.message}
            </div>
          )}
        </div>
      </div>

      <div className='mt-6'>
        <label
          htmlFor='passwordOne'
          className='block text-sm font-medium leading-5 text-gray-700'
        >
          PasswordOne
        </label>
        <div className='mt-1 rounded-md shadow-sm'>
          <input
            id='passwordOne'
            className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
            type='password'
            {...register('passwordOne', {
              required: 'Please enter a password',
              minLength: {
                value: 6,
                message: 'Should have at least 6 characters',
              },
            })}
          />
          {errors.passwordOne && (
            <div className='mt-2 text-xs text-red-600'>
              {errors.passwordOne.message}
            </div>
          )}
        </div>
      </div>

      <div className='mt-6'>
        <label
          htmlFor='passwordTwo'
          className='block text-sm font-medium leading-5 text-gray-700'
        >
          PasswordTwo
        </label>
        <div className='mt-1 rounded-md shadow-sm'>
          <input
            id='passwordTwo'
            className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
            type='password'
            {...register('passwordTwo', {
              required: 'Please enter a password',
              minLength: {
                value: 6,
                message: 'Should have at least 6 characters',
              },
            })}
          />
          {errors.passwordTwo && (
            <div className='mt-2 text-xs text-red-600'>
              {errors.passwordTwo.message}
            </div>
          )}
        </div>
      </div>

      <div>
        <label htmlFor='image'>image</label>
        <input type='file' id='image' accept='image/*' onChange={handleFile} />
        <img
          src={previewUrl ?? 'svg/写真のフリー素材11.svg'}
          alt='あなたの写真'
        />
        {/* {certificationImage && (
          <img
            src={URL.createObjectURL(new Blob([certificationImage]))}
            alt=''
          />
        )} */}
      </div>
      {isFileTypeError && (
        <div className='text-red-500'>
          ※jpeg, png, bmp, gif, svg以外のファイル形式は選択できません
        </div>
      )}
      {noImageError && (
        <div className='text-red-500'>※画像が選択されていません</div>
      )}

      <div className='mt-6'>
        <span className='block w-full rounded-md shadow-sm'>
          <button
            type='submit'
            className='w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'
          >
            Sign up
          </button>
        </span>
      </div>
    </form>
  )
}
export default SignUpForm
