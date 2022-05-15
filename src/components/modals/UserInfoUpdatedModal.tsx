import { VFC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeAllModal, selectUIUModal } from '../../features/modalsSlice'
import { ModalBackdrop, ModalMainArea } from '../UIAtoms/Modal'

const UserInfoUpdatedModal: VFC = () => {
  const dispatch = useDispatch()
  const isOpenUserInfoUpdatedMofal = useSelector(selectUIUModal)
  return isOpenUserInfoUpdatedMofal ? (
    <>
      <ModalMainArea
        modalWrapperStyle='sm:w-9/12 ov-md:w-[70vw]'
        modalContainerStyle='w-full space-y-4'
      >
        ☑️{'　'}ユーザー情報の更新ができました。
      </ModalMainArea>
      <ModalBackdrop
        closeModal={() => {
          dispatch(closeAllModal())
        }}
        blur={false}
      />
    </>
  ) : (
    <div></div>
  )
}

export default UserInfoUpdatedModal
