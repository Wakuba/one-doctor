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
        bg-white
        rounded
        shadow-xl
        flex
        flex-row
        items-center
        sm:h-14
        sm:w-52
        ov-md:h-20
        ov-md:w-80
       `}>
        <img className='mx-6 sm:h-11 sm:w-11 ov-md:h-14 ov-md:w-14 bg-prime-blue-muted border-solid' />
        <div className='sm:text-xs ov-md:text-md mr-4 '>{children}</div>
      </div>
    </Link>
  )
}
