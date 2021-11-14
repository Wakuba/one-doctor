//Library
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

//Firebase
import { firebaseFunction } from '../../lib/firebase/firebase.config'
import { httpsCallable } from 'firebase/functions'

const postMessageToSlackChannelWithUserData = httpsCallable(
  firebaseFunction,
  'postMessageToSlackChannelWithUserData'
)

interface SignUpFormData {
  name: string
  email: string
  passwordOne: string
  passwordTwo: string
}

const SignUpForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: SignUpFormData) => {
    const { name, email, passwordOne } = data
    const password = passwordOne
    if (getValues('passwordOne') === getValues('passwordTwo')) {
      return postMessageToSlackChannelWithUserData({
        name,
        email,
        password,
      })
        .then(() => {
          router.push('/Dashboard')
        })
        .catch((error) => {
          // Getting the Error details.
          const code = error.code
          const message = error.message
          const details = error.details
          console.log('code', code)
          console.log('message', message)
          console.log('details', details)
          setError('CORS Error')
        })
    } else {
      setError('Password Not Matched')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error !== '' && <div className='text-red-500'>{error}</div>}
      <div className='rounded-md shadow-sm'>
        <label
          htmlFor='name'
          className='block text-sm font-medium leading-5 text-gray-700'
        >
          Name
        </label>
        <input
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
          {errors.password && (
            <div className='mt-2 text-xs text-red-600'>
              {errors.password.message}
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
          {errors.password && (
            <div className='mt-2 text-xs text-red-600'>
              {errors.password.message}
            </div>
          )}
        </div>
      </div>

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
