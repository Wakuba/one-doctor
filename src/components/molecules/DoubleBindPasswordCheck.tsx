import { ChangeEvent, VFC } from 'react'
import {
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetError,
  UseFormClearErrors,
} from 'react-hook-form'
import Input from '../atoms/Input'

interface DoubleBindPasswordCheckPropsType {
  name: string
  titleOne: string
  titleTwo: string
  subTitleOne?: string
  subTitleTwo?: string
  style?: string
  register?: UseFormRegister<FieldValues>
  errors?: any
  setError?: UseFormSetError<FieldValues>
  getValues?: UseFormGetValues<FieldValues>
  clearErrors?: UseFormClearErrors<FieldValues>
}

const DoubleBindPasswordCheck: VFC<DoubleBindPasswordCheckPropsType> = ({
  name,
  titleOne,
  titleTwo,
  subTitleOne,
  subTitleTwo,
  style,
  register,
  errors,
  setError,
  getValues,
  clearErrors,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log('target', typeof e.target.value)
    console.log('errors', errors)
    if (getValues && setError && clearErrors) {
      if (getValues('passwordOne') !== e.target.value) {
        setError('passwordMismatch', {
          type: 'manual',
          message: 'パスワードが一致していません',
        })
      } else {
        clearErrors('passwordMismatch')
      }
    }
  }
  return (
    <div title={name} className={`${style}`}>
      <Input
        {...{
          name: 'passwordOne',
          type: 'password',
          subTitle: subTitleOne,
          style: { wholeStyle: 'block', inputStyle: 'block' },
          register: register,
          errors: errors,
        }}
      >
        {titleOne}
      </Input>
      <Input
        {...{
          name: 'passwordTwo',
          type: 'password',
          subTitle: subTitleTwo,
          style: { wholeStyle: 'block', inputStyle: 'block' },
          register: register,
          errors: errors,
          onChange: handleChange,
        }}
      >
        {titleTwo}
      </Input>
      {errors.passwordMismatch ? (
        <div className='block mt-2 text-xs text-[#FF0000]'>
          {errors.passwordMismatch.message}
        </div>
      ) : (
        <div className='invisible text-xs block'>message</div>
      )}
    </div>
  )
}

export default DoubleBindPasswordCheck
