import clsx from 'clsx'
import { VFC } from 'react'

const SubmitButton: VFC<{ children?: string }> = ({ children }) => (
  <div className='flex justify-center pb-10'>
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
