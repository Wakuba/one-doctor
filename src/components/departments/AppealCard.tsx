import clsx from 'clsx'
import { VFC } from 'react'

interface CardPropsType {
  children: JSX.Element[]
  src: string
  layoutStyle?: string
}

const AppealCard: VFC<CardPropsType> = ({ children, src, layoutStyle }) => {
  return (
    <div
      className={clsx(
        layoutStyle,
        'w-11/12 h-24 border-1 border-solid border-prime-blue-rich ov-md:justify-self-center'
      )}
    >
      <div className='w-full h-2/3 text-white text-xs bg-prime-blue-rich grid grid-cols-7'>
        <div className='col-span-2 flex justify-center items-center'>
          <img className='h-10 w-10' src={src} />
        </div>
        <div className='col-span-5 flex justify-center items-center text-sm mr-4'>
          {children[0]}
        </div>
      </div>
      <div className='w-full h-1/3 text-sm flex justify-center items-center'>
        {children[1]}
      </div>
    </div>
  )
}

export default AppealCard
