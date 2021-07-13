import { ReactNode } from 'react'
import { useRouter } from 'next/dist/client/router'

type DepartKanbanProps = {
  key: number;
  children: ReactNode;
  layoutStyle?: string;
  pageUrl: string;
}

export default function DepartKanban({ children, layoutStyle, pageUrl }: DepartKanbanProps) {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push(pageUrl)}
      className={`
      ${layoutStyle}
        bg-white rounded shadow-xl flex flex-row items-center
        sm:h-14 sm:w-52
        md:h-16 md:w-64
        lg:h-wscreen/20 lg:w-wscreen/5 lg:max-h-16 lg:max-w-64
        ov-xl:h-16 ov-xl:w-64
       `}>
      <img className='mx-6 bg-prime-blue-muted border-solid
        sm:h-11 sm:w-11
        md:h-12 md:w-12
        lg:h-3.5vw lg:w-3.5vw lg:max-h-14 lg:max-w-14
        ov-xl:h-12 ov-xl:w-12
        ' />
      <div className='sm:text-xs md:text-sm lg:text-1vw ov-xl:text-sm mr-4 '>{children}</div>
    </button>
  )
}
