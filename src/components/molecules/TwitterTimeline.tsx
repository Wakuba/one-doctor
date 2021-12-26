import { TwitterTimelineEmbed } from 'react-twitter-embed'

const TwitterTimeline: React.VFC<{ userId: string }> = ({ userId }) => {
  console.log(userId)
  return (
    <div className='twitter-embed border-8 border-prime-blue-rich ov-md:w-8/12 sm:w-full'>
      <TwitterTimelineEmbed sourceType='profile' userId='4848740932' />
    </div>
  )
}

export default TwitterTimeline
