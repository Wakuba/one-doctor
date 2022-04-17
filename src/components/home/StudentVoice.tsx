import clsx from 'clsx'
import Link from 'next/link'

const StudentVoice: React.VFC<any> = ({ data }) => {
  return (
    <Link href='/BrowseStudentsVoices'>
      <a
        className={clsx(
          'h-[380px] w-[300px] bg-white rounded-lg relative p-4 flex flex-col items-start justify-between',
          'after:absolute after:bottom-[-60px] after:left-8 after:border-transparent after:border-t-[60px] after:border-[15px] after:border-solid after:border-t-white after:transform after:-rotate-30'
        )}
      >
        <div className='overflow-scroll'>
          <div className='h-[308px]'>
            <div
              className='text-sm breakAll'
              dangerouslySetInnerHTML={{ __html: data.contents }}
            />
          </div>
        </div>
        <div className='w-full h-[20px]'>{data.contributor}</div>
      </a>
    </Link>
  )
}

export default StudentVoice
