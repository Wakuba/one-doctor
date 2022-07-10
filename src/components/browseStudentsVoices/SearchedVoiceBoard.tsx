import clsx from 'clsx'
import { VFC } from 'react'
import { VoiceDataType } from '../../lib/types'
import VoiceKanban from './VoiceKanban'

const SearchedVoiceBoard: VFC<{ data: VoiceDataType[] }> = ({ data }) => {
  return (
    <div
      className={clsx(
        'mb-8',
        'sm:flex sm:flex-col sm:items-center sm:justify-center sm:space-y-4',
        'ov-md:grid ov-md:grid-cols-2 ov-md:gap-4'
      )}
    >
      {data &&
        data.map((data, id) => (
          <VoiceKanban key={id} voiceData={data} wrapperStyle='col-span-1' />
        ))}
    </div>
  )
}

export default SearchedVoiceBoard
