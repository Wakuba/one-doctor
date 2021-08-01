import clsx from 'clsx'
import { ReactNode } from 'react'

const PlaneButton = (props: {
  children: ReactNode
  href?: string
  id?: string
}) => (
  <a
    rel='noreferrer'
    target='_blank'
    href={props.href}
    className={clsx(
      'rounded shadow-md w-48  h-10 bg-prime-blue-rich flex justify-center items-center border-b-4 border-[#5493AA]',
      'active:transform active:translate-y-[2px] active:border-none'
    )}
  >
    <span className='text-white text-sm font-medium '>{props.children}</span>
  </a>
)

export default PlaneButton
