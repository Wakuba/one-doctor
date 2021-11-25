import clsx from 'clsx'
import { VFC } from 'react'

interface SubmitButtonPropsType {
  children?: string
  style?: string
}

const SubmitButton: VFC<SubmitButtonPropsType> = ({ children, style }) => (
  <div className={`${style} flex justify-center pb-10`}>
    <button
      type='submit'
      className={clsx(
        'rounded text-white h-11 w-48 bg-prime-blue-rich border-b-4 border-[#5493AA]',
        'active:transfom active:translate-y-[2px] active:border-none'
      )}
    >
      {children}
    </button>
  </div>
)
export default SubmitButton
