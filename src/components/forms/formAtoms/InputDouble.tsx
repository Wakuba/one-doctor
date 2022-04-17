import { VFC } from 'react'
import { UseFormRegister, FieldValues, FormState } from 'react-hook-form'
import Input from './Input'

interface InputDoublePropsType {
  children?: string
  name: string
  nameOne: string
  nameTwo: string
  style?: {
    wrapperStyle?: string
    styleOne?: string
    styleTwo?: string
  }
  type: 'text' | 'email' | 'password'
  placeholderOne: string
  placeholderTwo: string
  register?: UseFormRegister<FieldValues>
  formState?: FormState<FieldValues>
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
  formState,
}) => {
  return (
    <div
      key={name}
      className={`${style?.wrapperStyle} grid grid-cols-2 h-[64px]`}
    >
      {children ? (
        <Input
          name={nameOne}
          style={{
            wrapperStyle: 'inline col-span-1',
            labelStyle: 'block',
            inputStyle: `${style?.styleOne} w-4/5`,
          }}
          type={type}
          register={register}
          formState={formState}
          placeholder={placeholderOne}
        >
          {children}
        </Input>
      ) : (
        <Input
          name={nameOne}
          style={{
            wrapperStyle: 'inline col-span-1',
            labelStyle: 'block',
            inputStyle: `${style?.styleOne} w-4/5`,
          }}
          type={type}
          register={register}
          formState={formState}
          placeholder={placeholderOne}
        />
      )}
      {children ? (
        <Input
          name={nameTwo}
          style={{
            wrapperStyle: 'inline col-span-1',
            labelStyle: 'block',
            inputStyle: `${style?.styleTwo} w-4/5`,
          }}
          type={type}
          register={register}
          formState={formState}
          placeholder={placeholderTwo}
        >
          dummy
        </Input>
      ) : (
        <Input
          name={nameTwo}
          style={{
            wrapperStyle: 'inline col-span-1',
            labelStyle: 'block',
            inputStyle: `${style?.styleTwo} w-4/5`,
          }}
          type={type}
          register={register}
          formState={formState}
          placeholder={placeholderTwo}
        />
      )}
    </div>
  )
}

export default InputDouble
