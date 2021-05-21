import Link from 'next/link'
import { ReactNode, FC } from 'react'

type DepartKanbanProps = {
  key: number;
  children: ReactNode;
  departPage?: string;
}

const DepartKanban: FC<DepartKanbanProps> = ({ children, departPage, ...className})=> {
  return (
    <Link href='EachDepart'>
    <div className='bg-white rounded h-3 w-14 shadow-md'>
        <img className='bg-black border-solid'/>
        <div className='text-xs'>{children}</div>
      </div>
    </Link>
  )
}

export default DepartKanban
