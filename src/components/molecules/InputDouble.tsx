import { region } from 'firebase-functions/v1'
import { VFC } from 'react'
import { UseFormRegister, FieldValues } from 'react-hook-form'
import Input from '../atoms/Input'

interface InputDoublePropsType {
  children?: string
  name: string
  nameOne: string
  nameTwo: string
  style?: {
    wholeStyle: string
    styleOne: string
    styleTwo: string
  }
  type: 'text' | 'email' | 'password'
  placeholderOne: string
  placeholderTwo: string
  register: UseFormRegister<FieldValues>
  errors: any
}

const InputDouble: VFC<InputDoublePropsType> = ({
  children,
  name,
  nameOne,
  nameTwo,
  style,
  type,
  placeholderOne,
  placeholderTwo,
  register,
  errors,
}) => {
  return (
    <div className={`${style?.wholeStyle}`}>
      <Input
        name={nameOne}
        style={{
          wholeStyle: 'inline',
          labelStyle: 'block',
          inputStyle: style?.styleOne,
        }}
        type={type}
        register={register}
        errors={errors}
        placeholder={placeholderOne}
      >
        {children}
      </Input>
      <Input
        name={nameTwo}
        style={{
          wholeStyle: 'inline',
          labelStyle: 'inline',
          inputStyle: style?.styleTwo,
        }}
        type={type}
        register={register}
        errors={errors}
        placeholder={placeholderTwo}
      ></Input>
    </div>
  )
}

export default InputDouble
