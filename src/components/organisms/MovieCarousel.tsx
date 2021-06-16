import { useState } from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import YouTube from "react-youtube";
import { ModalBackdrop, ModalMainArea } from "../atoms/Modal";
import { sliderData } from '../../../public/staticData'


let initModalState = {}
for (let i = 0; i < sliderData.length; i++) { initModalState = { ...initModalState, [i]: false } }

const opts = {
  height: '390',
  width: '640',
}

export default function MovieCarousel() {
  const [modalActive, setModalActive] = useState<{ [key: number]: boolean }>(initModalState)
  const closeModal = () => {
    setModalActive(initModalState)
    console.log('closeModal成功')
  }
  const openModal = (key: number) => {
    setModalActive({ ...modalActive, [key]: true })
    console.log('af', modalActive)
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      {sliderData.map((data, idx) => {
        return (
          modalActive[idx] &&
          <div key={idx}>
            <ModalMainArea closeModal={closeModal} modalWrapperStyle='w-10/12 h-8/12' modalContainerStyle='h-full w-full'>
              <YouTube videoId={data.videoId} opts={opts} containerClassName='ov-md:h-full sm:h-wscreen7/10 w-full flex flex-col items-center justify-center' className='h-10/12 w-10/12' />
            </ModalMainArea>
            <ModalBackdrop closeModal={closeModal} />
          </div>
        )
      }
      )
      }
      <Slider className='w-9/12' {...settings}>
        {sliderData.map((data, idx) => {
          function openModalCloser() {
            const key = idx;
            openModal(key)
          }
          return (
            <img key={idx} onClick={openModalCloser} alt='eyecatch image' src={data.eyecatchImg} />
          )
        })}
      </Slider>
    </>
  );
}
