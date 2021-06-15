import { useState } from "react"
import Modal from '../atoms/Modal'
import YouTube from "react-youtube"

const VideoPopupper = ({ videoId }) => {
  const [isPopup, setIsPopup] = useState<boolean>(false)

  const opts = {
    height: '360',
    width: '500'
  }

  return (
    <Modal
      modalIsOpen={isPopup}
      setModalIsOpen={setIsPopup}
      defaultAreaContents={
        <div className='h-96 w-96 bg-gray-600'>
        </div>}
      modalAreaContents={<YouTube videoId={videoId} opts={opts} />}
      modalWrapperStyle='flex items-center'
      modalContainerStyle='flex justify-center'
    />
  )
}

export default VideoPopupper
