import Link from 'next/link'
import { ReactNode, FC } from 'react'

type DepartKanbanProps = {
  key: number;
  children: ReactNode;
}

const DepartKanban: FC<DepartKanbanProps> = ({ children })=> {
  return (
    <Link href='EachDepart'>
      <div className='bg-white rounded h-14 w-52 mx-4 mb-4 shadow-md flex flex-row items-center'>
        <img className='mx-7 h-11 w-11 bg-prime-blue-muted border-solid'/>
        <div className='text-xs'>{children}</div>
      </div>
    </Link>
  )
}

export default DepartKanban
