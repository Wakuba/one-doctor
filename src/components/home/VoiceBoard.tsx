import React from 'react'
import StudentVoice from './StudentVoice'

const VoiceBoard: React.VFC = () => {
  return (
    <div className='overflow-x-auto overflow-y-hidden w-full pb-16'>
      <div className={`flex fex-col w-[3000px] space-x-2`}>
        <StudentVoice />
        <StudentVoice />
        <StudentVoice />
        <StudentVoice />
        <StudentVoice />
        <StudentVoice />
        <StudentVoice />
        <StudentVoice />
      </div>
    </div>
  )
}

export default VoiceBoard
