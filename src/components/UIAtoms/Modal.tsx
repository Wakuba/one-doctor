import clsx from 'clsx'
import { MouseEventHandler, ReactNode } from 'react'

const CancelButton = ({
  onCancel,
}: {
  onCancel: MouseEventHandler<HTMLDivElement>
}) => (
  <div
    onClick={onCancel}
    className='fixed top-4 right-4 ov-md:h-10 ov-md:w-10 sm:h-6 sm:w-6 bg-gray-300 rounded-full flex flex-col items-center justify-center'
  >
    <div className='sm:text-2xl ov-md:text-3xl text-prime-blue-pale opacity-25 font-bold place-self-center'>
      ✖️
    </div>
  </div>
)

interface ModalMainAreaPropsType {
  closeModal?: MouseEventHandler<HTMLDivElement>
  children: ReactNode
  modalWrapperStyle?: string
  modalContainerStyle?: string
  zIndex?: string
}

export const ModalMainArea = ({
  closeModal,
  children,
  modalWrapperStyle,
  modalContainerStyle,
  zIndex = 'z-60',
}: ModalMainAreaPropsType) =>
  closeModal ? (
    <div
      onClick={closeModal}
      className={clsx(
        modalWrapperStyle,
        zIndex,
        'fixed left-1/2 top-1/2  bg-opacity-70 bg-gray-100 rounded-xl shadow-xl overflow-y-scroll',
        'backdrop-filter backdrop-blur',
        'transform -translate-x-1/2 -translate-y-1/2'
      )}
    >
      <div className={clsx(modalContainerStyle, 'ov-md:p-8 sm:p-6')}>
        {children}
      </div>
    </div>
  ) : (
    <div
      className={clsx(
        modalWrapperStyle,
        'fixed left-1/2 top-1/2  bg-opacity-70 bg-gray-100 rounded-xl shadow-xl overflow-y-scroll',
        'backdrop-filter backdrop-blur',
        'transform -translate-x-1/2 -translate-y-1/2 z-60'
      )}
    >
      <div className={clsx(modalContainerStyle, 'ov-md:p-8 sm:p-6')}>
        {children}
      </div>
    </div>
  )

export const ModalBackdrop = ({
  closeModal,
  backdropStyle,
  zIndex = 'z-50',
}: {
  closeModal: MouseEventHandler<HTMLDivElement>
  backdropStyle?: string
  zIndex?: string
}) => (
  <div
    className={`${backdropStyle} ${zIndex} pointer-events-auto cursor-pointer w-full h-full fixed top-0 left-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur`}
    onClick={closeModal}
  >
    <CancelButton onCancel={closeModal} />
  </div>
)
