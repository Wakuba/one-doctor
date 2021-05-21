import Link from 'next/link'
import { ReactNode, FC } from 'react'

type DepartKanbanProps = {
  key: number;
  children: ReactNode;
}

const DepartKanban: FC<DepartKanbanProps> = ({ children })=> {
  return (
    <Link href='EachDepart'>
      <div className={`
        bg-white 
        rounded 
        shadow-xl 
        flex 
        flex-row 
        items-center
        sm:h-14 
        sm:w-52 
        sm:mr-4 
        sm:mb-4 
        ov-md:h-20 
        ov-md:w-80 
        ov-md:mb-10
       `}>
        <img className='mx-7 sm:h-11 sm:w-11 ov-md:h-14 ov-md:w-14 bg-prime-blue-muted border-solid'/>
        <div className='sm:text-xs ov-md:text-md mr-4'>{children}</div>
      </div>
    </Link>
  )
}

export default DepartKanban