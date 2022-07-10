import { VFC } from 'react'
import PlaneButton from '../UIAtoms/PlaneButton'
import TwitterTimeline from './TwitterTimeline'

interface SnsTabPropsType {
  title: string
  officialWebSite: string
  twitterUserId: number
}

const SnsTab: VFC<SnsTabPropsType> = ({
  title,
  officialWebSite,
  twitterUserId,
}) => {
  console.log('userId', twitterUserId)
  return (
    <div
      title={title}
      className='w-full ov-md:p-8 sm:p-4 bg-white flex flex-col'
    >
      <div className='space-y-8'>
        <div className='border-l-8 block bg-prime-blue-muted px-2 border-prime-blue-rich sm:text-sm ov-md:text-md font-medium'>
          公式サイト
        </div>
        <PlaneButton href={officialWebSite}>診療科公式ページ→</PlaneButton>
        <div className='border-l-8 block bg-prime-blue-muted px-2 border-prime-blue-rich sm:text-sm ov-md:text-md font-medium'>
          関連SNS
        </div>
        {twitterUserId && <TwitterTimeline {...{ twitterUserId }} />}
      </div>
    </div>
  )
}

export default SnsTab
