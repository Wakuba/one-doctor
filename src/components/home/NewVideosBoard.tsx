import { VFC, useState } from 'react'
import { newVideoDataType } from '../../lib/types'
import Image from 'next/image'
import YouTube from 'react-youtube'
import { ModalBackdrop, ModalMainArea } from '../UIAtoms/Modal'
import { videoIdExtractor } from '../../lib/customFunctions/videoIdExtractor'

const opts = {
  height: '390',
  width: '640',
}

type NewVideosBoardPropsType = {
  videosData: newVideoDataType[]
}

const NewVideosBoard: VFC<NewVideosBoardPropsType> = ({ videosData }) => {
  if (videosData == undefined)
    videosData = [
      { title: '無名', videoUrl: '特になし', thumbnailUrl: '特になし' },
    ]
  console.log('moviesDataだよー', videosData)

  return (
    <div className='w-full'>
      <div className='text-prime-blue-rich sm:text-2xl ov-md:text-4xl font-semibold mb-2'>
        新着動画
      </div>
      <div className='text-sm mb-4'>
        各診療科のやりがいやリアルな現場を動画で見ることができます
      </div>
      <div className='sm:w-full overflow-x-scroll overflow-y-hidden'>
        <div className='w-[1920px] flex flex-row'>
          {videosData.map((videoData, id) => {
            const { title, videoUrl, thumbnailUrl } = videoData
            const videoId = videoIdExtractor(videoUrl)
            return (
              <Video
                src={thumbnailUrl}
                videoId={videoId}
                title={title}
                key={id}
              />
            )
          })}
          <Video
            videoId='PIrZ9QRXYzI'
            src='/images/professor.png'
            title='YouTube video player'
          />
          <Video
            videoId='https://www.youtube.com/embed/8jjswrh3agE'
            src='/images/professor.png'
            title='YouTube video player'
          />
          <Video
            videoId='https://www.youtube.com/embed/8jjswrh3agE'
            src='/images/professor.png'
            title='YouTube video player'
          />
          <Video
            videoId='https://www.youtube.com/embed/8jjswrh3agE'
            src='/images/professor.png'
            title='YouTube video player'
          />
          <Video
            videoId='https://www.youtube.com/embed/8jjswrh3agE'
            src='/images/professor.png'
            title='YouTube video player'
          />
          <Video
            videoId='https://www.youtube.com/embed/8jjswrh3agE'
            src='/images/professor.png'
            title='YouTube video player'
          />
        </div>
      </div>
    </div>
  )
}

export default NewVideosBoard

const Video = ({
  src,
  title,
  videoId,
}: {
  src: string
  title: string
  videoId: string
}) => {
  const [modalActive, setModalActive] = useState(false)
  return (
    <>
      {modalActive && (
        <>
          <ModalMainArea
            modalWrapperStyle='w-10/12 h-5/6'
            modalContainerStyle='h-full w-full flex flex-col justify-center'
            closeModal={() => setModalActive(false)}
          >
            <YouTube
              videoId={videoId}
              opts={opts}
              containerClassName='ov-md:h-full sm:h-[70vw] w-full flex flex-col items-center justify-center'
              className='h-5/6 w-10/12'
            />
          </ModalMainArea>
          <ModalBackdrop closeModal={() => setModalActive(false)} />
        </>
      )}
      <div
        onClick={() => setModalActive(true)}
        className='relative shadow-lg w-72 h-96 mr-3 border-2 border-gray-300 rounded-2'
      >
        <Image
          layout='fill'
          objectFit='contain'
          loading='lazy'
          src={src}
          alt={title}
        />
      </div>
    </>
  )
}
