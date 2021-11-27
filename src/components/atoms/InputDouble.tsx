import { VFC } from 'react'
import { UseFormRegister, FieldValues } from 'react-hook-form'
import Input from './Input'

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
  register?: UseFormRegister<FieldValues>
  errors?: any
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
    <div key={name} className={`${style?.wholeStyle} grid grid-cols-2`}>
      <Input
        name={nameOne}
        style={{
          wholeStyle: 'inline col-span-1',
          labelStyle: 'block',
          inputStyle: `${style?.styleOne} w-4/5`,
        }}
        type={type}
        register={register}
        errors={errors}
        placeholder={placeholderOne}
      >
        {children ?? ''}
      </Input>
      <Input
        name={nameTwo}
        style={{
          wholeStyle: 'inline col-span-1',
          labelStyle: 'block',
          inputStyle: `${style?.styleTwo} w-4/5`,
        }}
        type={type}
        register={register}
        errors={errors}
        placeholder={placeholderTwo}
      >
        dummy
      </Input>
    </div>
  )
}

export default InputDouble
