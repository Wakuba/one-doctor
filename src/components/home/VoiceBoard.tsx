import React from 'react'
import StudentVoice from './StudentVoice'

const VoiceBoard: React.VFC<{ voices: any[] }> = ({ voices }) => {
  return (
    <div className='overflow-x-auto overflow-y-hidden w-full pb-16'>
      <div className={`flex fex-col w-[3000px] space-x-2`}>
        {voices.map((voice, id) => (
          <StudentVoice key={id} data={voice} />
        ))}
      </div>
    </div>
  )
}

export default VoiceBoard
