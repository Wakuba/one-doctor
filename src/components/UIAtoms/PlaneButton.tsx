import clsx from 'clsx'
import { ReactNode, VFC } from 'react'

interface PlaneButtonPropsType {
  children: ReactNode
  wrapperStyle?: string
  href?: string
  id?: string
  color?: 'blue' | 'gray'
  targetBlank?: boolean
}

const PlaneButton: VFC<PlaneButtonPropsType> = ({
  children,
  wrapperStyle,
  href,
  id,
  color,
  targetBlank = true,
}) =>
  color === 'gray' ? (
    <GrayButton {...{ wrapperStyle, href, id, targetBlank }}>
      {children}
    </GrayButton>
  ) : (
    <BlueButton {...{ wrapperStyle, href, id, targetBlank }}>
      {children}
    </BlueButton>
  )

export default PlaneButton

const GrayButton = ({ targetBlank, href, wrapperStyle, children }) => {
  return targetBlank ? (
    <a
      rel='noreferrer'
      target='_blank'
      href={href}
      className={clsx(
        'pointer-events-auto rounded shadow-md w-48  h-10 bg-[#B7B7B7] flex justify-center items-center border-b-4 border-[rgb(146,146,146)]',
        'active:transform active:translate-y-[2px] active:border-none',
        wrapperStyle
      )}
    >
      <span className='text-white text-sm font-medium '>{children}</span>
    </a>
  ) : (
    <a
      rel='noreferrer'
      href={href}
      className={clsx(
        'pointer-events-auto rounded shadow-md w-48  h-10 bg-[#B7B7B7] flex justify-center items-center border-b-4 border-[rgb(146,146,146)]',
        'active:transform active:translate-y-[2px] active:border-none',
        wrapperStyle
      )}
    >
      <span className='text-white text-sm font-medium '>{children}</span>
    </a>
  )
}

const BlueButton = ({ targetBlank, href, wrapperStyle, children }) => {
  return targetBlank ? (
    <a
      rel='noreferrer'
      target='_blank'
      href={href}
      className={clsx(
        'pointer-events-auto rounded shadow-md w-48  h-10 bg-prime-blue-rich flex justify-center items-center border-b-4 border-[#5493AA]',
        'active:transform active:translate-y-[2px] active:border-none',
        wrapperStyle
      )}
    >
      <span className='text-white text-sm font-medium '>{children}</span>
    </a>
  ) : (
    <a
      rel='noreferrer'
      href={href}
      className={clsx(
        'pointer-events-auto rounded shadow-md w-48  h-10 bg-prime-blue-rich flex justify-center items-center border-b-4 border-[#5493AA]',
        'active:transform active:translate-y-[2px] active:border-none',
        wrapperStyle
      )}
    >
      <span className='text-white text-sm font-medium '>{children}</span>
    </a>
  )
}
