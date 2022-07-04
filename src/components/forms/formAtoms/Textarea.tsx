import { VFC } from 'react'
import { FieldValues, FormState, UseFormRegister } from 'react-hook-form'

type TextareaPropsType = {
  children?: string
  name: string
  style?: { wrapperStyle?: string; labelStyle?: string; textareaStyle?: string }
  placeholder?: string
  register?: UseFormRegister<FieldValues>
  formState?: FormState<FieldValues>
  isRequired?: boolean
}

const Textarea: VFC<TextareaPropsType> = ({
  name,
  placeholder,
  children,
  style,
  register,
  formState,
  isRequired = true,
}) => {
  return (
    <div className={`${style?.wrapperStyle}`}>
      <label htmlFor={name} className={`${style?.labelStyle} text-sm`}>
        {children}
      </label>
      {register && isRequired ? (
        <textarea
          className={`${style?.textareaStyle} text-sm w-full rounded border-1 border-solid border-[#707070] bg-white`}
          cols={40}
          rows={8}
          {...register(name, {
            required: '入力内容が記載されていません',
          })}
          placeholder={placeholder ? ' 例) ' + placeholder : ''}
        />
      ) : (
        <textarea
          className={`${style?.textareaStyle} text-sm w-full rounded border-1 border-solid border-[#707070] bg-white`}
          cols={40}
          rows={8}
        />
      )}

      {formState?.errors[name] ? (
        <div className='block mt-2 text-xs text-[#FF0000]'>
          {formState.errors[name]?.message}
        </div>
      ) : (
        <div className='invisible'>message</div>
      )}
    </div>
  )
}

export default Textarea
