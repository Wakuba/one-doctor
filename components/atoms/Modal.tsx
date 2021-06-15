import { SetStateAction, ReactNode, MouseEventHandler } from 'react'

interface ModalPropsType {
  modalIsOpen: boolean;
  setModalIsOpen: SetStateAction<boolean>;
  defaultWrapperStyle: string;
  modalWrapperStyle: string;
  modalContainerStyle: string;
  defaultAreaContents: JSX.Element;
  modalAreaContents: JSX.Element;
}

const DefaultArea = (props: { children: ReactNode; openModal: MouseEventHandler<HTMLDivElement>; defaultWrapperStyle: string }) => (
  <div onClick={props.openModal} className={props.defaultWrapperStyle}>{props.children}</div>
)

const ModalMainArea = (props: { closeModal: MouseEventHandler<HTMLDivElement>; children: ReactNode; modalWrapperStyle: string; modalContainerStyle: string }) => {
  return (
    <div onClick={props.closeModal} className={` h-5/6 bg-gray-100 rounded-xl backdrop-filter backdrop-blur bg-opacity-70 fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 overflow-y-scroll ${props.modalWrapperStyle}`}>
      <div className={`space-y-4 ov-md:p-8 sm:p-6 ${props.modalContainerStyle}`}>
        {props.children}
      </div>
    </div>
  )
}

const Backdrop = (props: { closeModal: MouseEventHandler<HTMLDivElement> }) =>
  <div className='w-full h-screen fixed top-0 left-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur z-20' onClick={props.closeModal} />



export default function Modal({
  modalIsOpen,
  setModalIsOpen,
  defaultWrapperStyle,
  modalWrapperStyle,
  modalContainerStyle,
  defaultAreaContents,
  modalAreaContents,
}: ModalPropsType) {
  const closeModal = (): void => { setModalIsOpen(false) }
  const openModal = (): void => { setModalIsOpen(true) }
  const modalHandler = (): void => { setModalIsOpen(!modalIsOpen) }
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


