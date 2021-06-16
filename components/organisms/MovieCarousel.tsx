import { useState } from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import YouTube from "react-youtube";
import { ModalBackdrop, ModalMainArea } from "../atoms/Modal";
import { sliderData } from '../../public/staticData'


let initModalState = {}
for (let i = 0; i < sliderData.length; i++) { initModalState = { ...initModalState, [i]: false } }

const opts = {
  height: '390',
  width: '640',
}

export default function MovieCarousel(props: { layoutStyle: string }) {
  const [modalActive, setModalActive] = useState<{ [key: number]: boolean }>(initModalState)
  const closeModal = (key) => {
    setModalActive(initModalState)
    console.log('closeModal成功')
  }
  const openModal = (key) => {
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
        function closeModalAim() {
          const key = idx;
          closeModal(key)
        }
        return (
          modalActive[idx] &&
          <div key={idx}>
            <ModalMainArea closeModal={closeModalAim} modalWrapperStyle='w-10/12 h-8/12' modalContainerStyle='h-full w-full'>
              <YouTube videoId={data.videoId} opts={opts} containerClassName='ov-md:h-full sm:h-wscreen7/10 w-full flex flex-col items-center justify-center' className='h-10/12 w-10/12' />
            </ModalMainArea>
            <ModalBackdrop closeModal={closeModalAim} />
          </div>
        )
      }
      )
      }
      <Slider className='w-9/12' {...settings}>
        {sliderData.map((data, idx) => {
          function openModalAim() {
            const key = idx;
            openModal(key)
          }
          return (
            <img key={idx} onClick={openModalAim} alt='eyecatch image' src={data.eyecatchImg} />
          )
        })}
      </Slider>
    </>
  );
}
