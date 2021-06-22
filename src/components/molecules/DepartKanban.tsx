import Link from 'next/link'
import { ReactNode } from 'react'

type DepartKanbanProps = {
  key: number;
  children: ReactNode;
  layoutStyle?: string;
}

export default function DepartKanban({ children, layoutStyle }: DepartKanbanProps) {
  return (
    <Link href='EachDepart'>
      <div className={`
      ${layoutStyle}
        bg-white rounded shadow-xl flex flex-row items-center sm:h-14 sm:w-52 md:h-16 md:w-64
        lg:h-wscreen/20 lg:w-wscreen/5 lg:max-h-16 lg:max-w-64
        ov-xl:h-16 ov-xl:w-64
       `}>
        <img className='mx-6 bg-prime-blue-muted border-solid
        sm:h-11 sm:w-11
        md:h-12 md:w-12
        lg:h-3.5vw lg:w-3.5vw lg:max-h-14 lg:max-w-14
        ov-xl:h-14 ov-xl:w-14
        ' />
        <div className='sm:text-xs md:text-sm lg:text-1vw ov-xl:text-sm mr-4 '>{children}</div>
      </div>
    </Link>
  )
}
