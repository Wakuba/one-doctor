import clsx from 'clsx'
import { VFC } from 'react'

interface RadioButtonPropsType {
  title: string
  sideRate?: { left: string; right: string }
  name: string
  values: string[]
  style?: {
    wrapperStyle?: string
    containerStyle?: string
    labelStyle?: string
    inputStyle?: string
  }
  setValue?: any
  formState?: any
  register?: any
}
const RadioButton: VFC<RadioButtonPropsType> = ({
  title,
  sideRate,
  name,
  values,
  style,
  register,
}) => {
  return (
    <fieldset name={name} className={clsx('w-full', style?.wrapperStyle)}>
      <legend>{title}</legend>
      <div className={clsx('flex justify-around flex-col w-full pt-4')}>
        {sideRate && (
          <div className='w-full text-sm mb-2 flex flex-row justify-between'>
            <p>{sideRate.left}</p>
            <p>{sideRate.right}</p>
          </div>
        )}
        <div
          className={clsx('flex w-full justify-around ', style?.containerStyle)}
        >
          {values.map((value, key: number) => {
            return (
              <label
                key={key}
                htmlFor={name}
                className={clsx(
                  'text-sm flex justify-center items-center ',
                  style?.labelStyle
                )}
              >
                <input
                  className={clsx(name, style?.inputStyle, 'text-sm')}
                  type='radio'
                  // defaultValue={3}
                  id={name + '_' + key}
                  {...register(name)} //ここの値がオブジェクトのプロパティになる
                  value={value}
                />
                {value}
              </label>
            )
          })}
        </div>
      </div>
    </fieldset>
  )
}

export default RadioButton

{
  /* {formState?.errors[name] ? (
        <div className='block mt-2 text-xs text-[#FF0000]'>
          {formState?.errors[name].message}
        </div>
      ) : (
        <div className='invisible text-xs blocki mt-2'>message</div>
      )} */
}
