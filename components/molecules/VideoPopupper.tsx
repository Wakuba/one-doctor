import { useState } from "react"
import Modal from '../atoms/Modal'
import YouTube from "react-youtube"

const VideoPopupper = ({ videoId }) => {
  const [isPopup, setIsPopup] = useState<boolean>(false)

  const opts = {
    height: '390',
    width: '640',
  }

  return (
    <Modal
      modalIsOpen={isPopup}
      setModalIsOpen={setIsPopup}
      defaultAreaContents={
        <img className='h-full object-contain' alt="" src="https://japan.cnet.com/storage/2016/02/22/54fe9f8884f587fe86efb81119754660/t/584/438/d/20160222adobeneko2top_640.jpg" />
      }
      modalAreaContents={<YouTube videoId={videoId} opts={opts} className='sm:w-full' />}
      defaultWrapperStyle='w-96 '
      modalWrapperStyle='flex items-center w-11/12'
      modalContainerStyle='flex justify-center w-full'
    />
  )
}

export default VideoPopupper
