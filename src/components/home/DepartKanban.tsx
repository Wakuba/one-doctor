import { ReactNode, VFC } from 'react'
import { useRouter } from 'next/dist/client/router'
import clsx from 'clsx'

type DepartKanbanProps = {
  children: ReactNode
  pageUrl?: string
  style?: string
}

const DepartKanban: VFC<DepartKanbanProps> = ({ children, pageUrl, style }) => {
  const router = useRouter()
  const isExternal = String(pageUrl).search(new RegExp('^http.*', 'g')) !== -1
  if (isExternal) {
    return (
      <a
        rel='noreferrer'
        target='_blank'
        href={pageUrl}
        className={clsx(
          'bg-white rounded shadow-xl flex flex-row items-center justify-center',
          'sm:h-14 sm:w-52',
          'ov-md:h-16 ov-md:w-64',
          style
        )}
      >
        <div className='sm:text-xs md:text-sm lg:text-1vw ov-xl:text-sm mx-4 '>
          {children}
        </div>
      </a>
    )
  } else {
    return (
      <button
        onClick={() =>
          pageUrl ? router.push(pageUrl) : console.log('pageUrl is empty')
        }
        className={clsx(
          'bg-white rounded shadow-xl flex flex-row items-center',
          'sm:h-14 sm:w-52',
          'ov-md:h-16 ov-md:w-64',
          style
        )}
      >
        <img
          className={clsx(
            'mx-6 bg-prime-blue-muted border-solid',
            'sm:h-11 sm:w-11',
            'ov-md:h-12 ov-md:w-12'
          )}
        />
        <div className='sm:text-xs md:text-sm lg:text-1vw ov-xl:text-sm mr-4 '>
          {children}
        </div>
      </button>
    )
  }
}

export default DepartKanban
