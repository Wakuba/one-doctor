import { useRouter } from 'next/router'
import { ReactNode } from 'react'
// import { useDispatch } from 'react-redux'
// import { closeAllModal } from '../../features/modalsSlice'
import { ModalBackdrop, ModalMainArea } from '../UIAtoms/Modal'

const AlertNakedModal = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  // const dispatch = useDispatch()
  return (
    <>
      <ModalMainArea
        modalWrapperStyle='sm:w-9/12 ov-md:w-[70vw]'
        modalContainerStyle='w-full space-y-4'
      >
        {children}
      </ModalMainArea>
      <ModalBackdrop
        closeModal={() => {
          // dispatch(closeAllModal())
          router.push('/')
        }}
      />
    </>
  )
}

export default AlertNakedModal
