import { ReactNode } from 'react'
import { useRouter } from 'next/dist/client/router'

type DepartKanbanProps = {
  children: ReactNode;
  pageUrl?: string;
}

export default function DepartKanban({ children, pageUrl }: DepartKanbanProps) {
  const router = useRouter()
  return (
    <button
      onClick={() => pageUrl ? router.push(pageUrl) : console.log('pageUrl is empty')}
      className='
        bg-white rounded shadow-xl flex flex-row items-center
        sm:h-14 sm:w-52
        ov-md:h-16 ov-md:w-64
       '>
      <img className='mx-6 bg-prime-blue-muted border-solid
        sm:h-11 sm:w-11
        ov-md:h-12 ov-md:w-12
        ' />
      <div className='sm:text-xs md:text-sm lg:text-1vw ov-xl:text-sm mr-4 '>{children}</div>
    </button>
  )
}
