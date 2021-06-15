const DefaultArea = ({ children, openModal, wrapperStyle }) => (
  <div onClick={openModal} className={`${wrapperStyle}`}>{children}</div>
)

const ModalMainArea = ({ closeModal, children }) => {
  return (
    <div onClick={closeModal} className=' sm:w-9/12 ov-md:w-wscreen7/10 h-5/6 bg-gray-100 rounded-xl backdrop-filter backdrop-blur bg-opacity-70 fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 overflow-y-scroll'>
      <div className='w-full space-y-4 ov-md:p-8 sm:p-6'>
        {children}
      </div>
    </div>
  )
}

const Backdrop = ({ closeModal }) => <div className='w-full h-screen fixed top-0 left-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur z-20' onClick={closeModal} />

const Modal = ({ defaultAreaContents, modalAreaContents, modalIsOpen, setModalIsOpen, wrapperStyle }) => {
  const closeModal = () => { setModalIsOpen(false) }
  const openModal = () => { setModalIsOpen(true) }
  const modalHandler = () => { setModalIsOpen(!modalIsOpen) }
  return (
    <>
      <DefaultArea openModal={openModal} wrapperStyle={wrapperStyle}>{defaultAreaContents}</DefaultArea>
      {modalIsOpen &&
        <div>
          <ModalMainArea closeModal={closeModal} >{modalAreaContents}</ModalMainArea>
          <Backdrop closeModal={closeModal} />
        </div>
      }
    </>
  )
}

export default Modal

