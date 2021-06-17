import { useState, ReactNode } from 'react'

const Backdrop = ({ onCancel }: { onCancel: () => void }) => <div className='w-full h-screen fixed top-0 left-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur z-20' onClick={onCancel} />

const Modal = ({ onCancel, layoutStyles, children }: { onCancel: () => void; layoutStyles: string; children: ReactNode }) => {
  const cancelHandler = () => { onCancel() }
  return (
    <div onClick={cancelHandler} className={`ov-md:w-32 ov-md:h-32 sm:w-20 sm:h-20 px-4 rounded-full bg-prime-blue-rich shadow-lg flex justify-center items-center text-white ov-md:text-md sm:text-xs font-semibold ${layoutStyles}`}>
      {children}
    </div>
  )
}

export default function ContactButtonModal() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const closeModalHandler = () => { setModalIsOpen(false) }
  const changeModalHandler = () => { setModalIsOpen(!modalIsOpen) }
  return (
    <>
      <div onClick={changeModalHandler} className='fixed right-4 bottom-4 bg-contact-button bg-contain bg-no-repeat ov-md:h-32 ov-md:w-32  sm:w-20 sm:h-20 flex justify-center items-center text-white z-50'>
        <div className='ov-md:text-3xl sm:text-sm '>contact</div>
      </div>
      {modalIsOpen &&
        <div className='fixed ov-md:right-20 sm:right-4 ov-md:bottom-4 sm:bottom-28 ov-lg:w-wscreen/3 ov-lg:h-wscreen/3 md:w-wscreen/2 md:h-wscreen/2 sm:h-96 z-40 '>
          <div className='relative w-full h-full flex flex-col justify-evenly'>
            <div className='ov-md:absolute ov-md:bottom-0 w-full flex justify-start'>
              <Modal onCancel={closeModalHandler} layoutStyles=''>見学申し込み</Modal>
            </div>
            <div className='ov-md:absolute ov-md:bottom-0 ov-md:transform ov-md:origin-right ov-md:rotate-30 w-full flex justify-start'>
              <Modal onCancel={closeModalHandler} layoutStyles='ov-md:transform ov-md:-rotate-30 '>イベントを提案する</Modal>
            </div>
            <div className='ov-md:absolute ov-md:bottom-0 ov-md:transform ov-md:origin-right ov-md:rotate-60 w-full flex justify-start'>
              <Modal onCancel={closeModalHandler} layoutStyles='ov-md:transform ov-md:-rotate-60'>イベント<br />ページを見る</Modal>
            </div>
            <div className='ov-md:absolute ov-md:bottom-0 ov-md:transform ov-md:origin-right ov-md:rotate-90 w-full flex justify-start'>
              <Modal onCancel={closeModalHandler} layoutStyles='ov-md:transform ov-md:-rotate-90'>診療科<br />公式ページ</Modal>
            </div>
          </div>
        </div>
      }
      {modalIsOpen &&
        <Backdrop onCancel={closeModalHandler} />
      }
    </>
  )
}
