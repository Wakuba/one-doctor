import { VFC } from 'react'
import { FieldValues, FormState, UseFormRegister } from 'react-hook-form'

type TextareaPropsType = {
  children?: string
  name: string
  style?: { wholeStyle?: string; labelStyle?: string; textareaStyle?: string }
  placeholder?: string
  register?: UseFormRegister<FieldValues>
  formState?: FormState<FieldValues>
  // watch?: UseFormWatch<FieldValues>
  // setValue?: UseFormSetValue<FieldValues>
}

const Textarea: VFC<TextareaPropsType> = ({
  name,
  children,
  style,
  register,
  formState,
  // watch,
  //  setValue
}) => {
  return (
    <div className={`${style?.wholeStyle}`}>
      <label htmlFor={name} className={`${style?.labelStyle} text-sm`}>
        {children}
      </label>
      {register && (
        <textarea
          className={`${style?.textareaStyle} text-sm w-full rounded border-1 border-solid border-[#707070] bg-white`}
          cols={40}
          rows={8}
          {...register(name, {
            required: '内容が入力されていません',
          })}
        />
      )}
      {formState?.errors[name] ? (
        <div className='block mt-2 text-xs text-[#FF0000]'>
          {formState?.errors[name].message}
        </div>
      ) : (
        <div className='invisible'>message</div>
      )}
    </div>
  )
}

export default Textarea
