import { VFC } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type InputPropsType = {
  children?: string
  name: string
  style?: { wholeStyle?: string; labelStyle?: string; inputStyle?: string }
  type: 'email' | 'password' | 'text'
  placeholder?: string
  register: UseFormRegister<FieldValues>
  errors: any
}

const Input: VFC<InputPropsType> = ({
  name,
  children,
  style,
  type,
  placeholder,
  register,
  errors,
}) => {
  let errorMessage = ''
  if (type === 'email') errorMessage = 'メールアドレスが記入されていません'
  else if (type === 'password') errorMessage = 'パスワードを入力してください'
  else errorMessage = '入力されていません'

  return (
    <div className={`${style?.wholeStyle}`}>
      <label
        htmlFor={name}
        className={`text-sm ${style?.labelStyle} ${
          children === 'dummy' && 'invisible'
        }`}
      >
        {children}
      </label>
      <input
        className={`${style?.inputStyle} text-sm h-[40px] w-full rounded border-1 border-solid border-[#707070] bg-white }`}
        type={type}
        placeholder={placeholder}
        {...register(name, {
          required: errorMessage,
        })}
      />
      {errors[name] ? (
        <div className='block mt-2 text-xs text-[#FF0000]'>
          {errors[name].message}
        </div>
      ) : (
        <div className='invisible'>message</div>
      )}
    </div>
  )
}
export default Input
