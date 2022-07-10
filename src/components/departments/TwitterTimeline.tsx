import { TwitterTimelineEmbed } from 'react-twitter-embed'

const TwitterTimeline: React.VFC<{ twitterUserId: number }> = ({
  twitterUserId,
}) => {
  return (
    <div className='twitter-embed border-8 border-prime-blue-rich ov-md:w-8/12 sm:w-full'>
      <TwitterTimelineEmbed
        sourceType='profile'
        userId={twitterUserId}
        options={{ height: 800 }}
      />
    </div>
  )
}

export default TwitterTimeline
