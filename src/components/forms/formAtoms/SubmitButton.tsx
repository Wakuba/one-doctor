import clsx from 'clsx'
import { VFC } from 'react'

interface SubmitButtonPropsType {
  name?: string
  children?: string
  style?: {
    wholeStyle?: string
    buttonStyle?: string
  }
}

const SubmitButton: VFC<SubmitButtonPropsType> = ({
  children,
  style,
  name,
}) => (
  <div
    title={name}
    className={`${style?.wholeStyle} flex justify-center pb-10`}
  >
    <button
      type='submit'
      className={clsx(
        style?.buttonStyle,
        'rounded text-white bg-prime-blue-rich border-b-4 border-[#5493AA]',
        'active:transfom active:translate-y-[2px] active:border-none'
      )}
    >
      {children}
    </button>
  </div>
)
export default SubmitButton
