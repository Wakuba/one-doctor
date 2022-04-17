import clsx from 'clsx'
import Link from 'next/link'

type DepUrlKanbanProps = {
  univName: string
  depName: string
  pageUrl: string
  style?: string
}

const DepUrlKanban = ({
  univName,
  depName,
  pageUrl,
  style,
}: DepUrlKanbanProps) => {
  const checkIsExternal = (url) =>
    String(url).search(new RegExp('^http.*', 'g')) !== -1

  return checkIsExternal(pageUrl) ? (
    <Link href={pageUrl}>
      <a
        rel='noreferrer'
        target='_blank'
        className={clsx(
          'bg-white rounded shadow-xl flex flex-col items-center justify-center',
          'sm:h-14 sm:w-52',
          'ov-md:h-16 ov-md:w-64',
          'sm:text-xs md:text-sm lg:text-1vw ov-xl:text-sm',
          style
        )}
      >
        <p className=''>{univName}</p>
        <p className='sm:text-xs md:text-sm lg:text-1vw ov-xl:text-sm'>
          {depName}
        </p>
      </a>
    </Link>
  ) : (
    <div
      className={clsx(
        'bg-gray-600 rounded shadow-xl flex flex-col items-center justify-center',
        'sm:h-14 sm:w-52',
        'ov-md:h-16 ov-md:w-64',
        'sm:text-xs md:text-sm lg:text-1vw ov-xl:text-sm',
        style
      )}
    >
      <p className=''>{univName}</p>
      <p className='sm:text-xs md:text-sm lg:text-1vw ov-xl:text-sm'>
        {depName}
      </p>
    </div>
  )
}

export default DepUrlKanban
