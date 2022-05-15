import { VFC, ChangeEvent } from 'react'
import { FieldValues, FormState, UseFormRegister } from 'react-hook-form'

type InputPropsType = {
  name: string
  children?: string
  subTitle?: string
  style?: { wrapperStyle?: string; labelStyle?: string; inputStyle?: string }
  type: 'email' | 'password' | 'text'
  placeholder?: string
  register?: UseFormRegister<FieldValues>
  formState?: FormState<FieldValues>
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: VFC<InputPropsType> = ({
  name,
  children,
  subTitle,
  style,
  type,
  placeholder,
  register,
  formState,
  onChange,
}) => {
  let errorMessage = ''
  if (type === 'email') errorMessage = 'メールアドレスが記入されていません'
  else if (type === 'password') errorMessage = 'パスワードを入力してください'
  else errorMessage = '入力されていません'
  return (
    <div className={`${style?.wrapperStyle}`}>
      <label
        htmlFor={name}
        className={`text-sm ${style?.labelStyle} ${
          children === 'dummy' && 'invisible'
        }`}
      >
        {children}
        {children && (
          <>
            <p className='text-[#FF0000] inline '>*</p>
            <div className='text-sm'>{subTitle}</div>
          </>
        )}
      </label>
      {register && (
        <input
          className={`${style?.inputStyle} pl-2 text-sm w-full rounded border-1 border-solid border-[#707070] bg-white h-10`}
          type={type}
          placeholder={placeholder ? ' ' + placeholder : ''}
          {...register(name, {
            required: errorMessage,
            pattern:
              type === 'email'
                ? {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
                    message: '無効なメールアドレスです',
                  }
                : undefined,
            onChange: (e) => {
              if (onChange) onChange(e)
            },
          })}
        />
      )}
      {formState?.errors[name] ? (
        <div className='block mt-2 text-xs text-[#FF0000]'>
          {formState?.errors[name].message}
        </div>
      ) : (
        <div className='invisible text-xs blocki mt-2'>message</div>
      )}
    </div>
  )
}
export default Input
