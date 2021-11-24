import { VFC } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type CheckboxPropsType = {
  children?: string
  name: string
  style?: { wholeStyle?: string; inputStyle?: string }
  checked: boolean
  register: UseFormRegister<FieldValues>
  errors: any
}

const Checkbox: VFC<CheckboxPropsType> = ({
  name,
  children,
  style,
  register,
  errors,
}) => {
  return (
    <div className={`${style?.wholeStyle}`}>
      <label className='text-sm'>
        <input
          className={`${style?.inputStyle} inline rounded `}
          type='checkbox'
          {...register(name, {
            required: false,
          })}
          value={ true }
        />
        {children}
      </label>
    </div>
  )
}
export default Checkbox
