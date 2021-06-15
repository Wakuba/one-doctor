const DefaultArea = ({ children, openModal, defaultWrapperStyle }) => (
  <div onClick={openModal} className={defaultWrapperStyle}>{children}</div>
)

const ModalMainArea = ({ closeModal, children, modalWrapperStyle, modalContainerStyle }) => {
  return (
    <div onClick={closeModal} className={`sm:w-9/12 ov-md:w-wscreen7/10 h-5/6 bg-gray-100 rounded-xl backdrop-filter backdrop-blur bg-opacity-70 fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 overflow-y-scroll ${modalWrapperStyle}`}>
      <div className={`w-full space-y-4 ov-md:p-8 sm:p-6 ${modalContainerStyle}`}>
        {children}
      </div>
    </div>
  )
}

const Backdrop = ({ closeModal }) => <div className='w-full h-screen fixed top-0 left-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur z-20' onClick={closeModal} />



export default function Modal({
  modalIsOpen,
  setModalIsOpen,
  defaultWrapperStyle,
  modalWrapperStyle,
  modalContainerStyle,
  defaultAreaContents,
  modalAreaContents,
}) {
  const closeModal = () => { setModalIsOpen(false) }
  const openModal = () => { setModalIsOpen(true) }
  const modalHandler = () => { setModalIsOpen(!modalIsOpen) }
  return (
    <>
      <DefaultArea
        openModal={openModal}
        defaultWrapperStyle={defaultWrapperStyle}
      >
        {defaultAreaContents}
      </DefaultArea>

      {modalIsOpen &&
        <div>
          <ModalMainArea
            closeModal={closeModal}
            modalWrapperStyle={modalWrapperStyle}
            modalContainerStyle={modalContainerStyle}
          >
            {modalAreaContents}
          </ModalMainArea>
          <Backdrop closeModal={closeModal} />
        </div>
      }
    </>
  )
}


