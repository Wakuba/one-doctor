import { FC } from 'react'
import PlaneButton from '../atoms/PlaneButton'
import TwitterTimeline from '../molecules/TwitterTimeline'

interface SnsTabPropsType {
  officialWebSite: string
  twitterTimelineUrl: RegExpMatchArray | string
}

const SnsTab: FC<SnsTabPropsType> = ({
  officialWebSite,
  twitterTimelineUrl,
}) => {
  return (
    <div className='w-full ov-md:p-8 sm:p-4 bg-white flex flex-col'>
      <div className='space-y-8'>
        <div className='border-l-8 block bg-prime-blue-muted px-2 border-prime-blue-rich sm:text-sm ov-md:text-md font-medium'>
          公式サイト
        </div>
        <PlaneButton href={officialWebSite}>診療科公式ページ→</PlaneButton>
        <div className='border-l-8 block bg-prime-blue-muted px-2 border-prime-blue-rich sm:text-sm ov-md:text-md font-medium'>
          関連SNS
        </div>
        <TwitterTimeline href={twitterTimelineUrl} />
      </div>
    </div>
  )
}

export default SnsTab
