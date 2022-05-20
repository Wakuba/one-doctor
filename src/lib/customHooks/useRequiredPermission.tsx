import { useDispatch, useSelector } from 'react-redux'
import { selectOdUserExData } from '../../features/userSlice'
import { useEffect, VFC } from 'react'
import permissionChecker from '../customFunctions/permissionChecker'
import NotLogInAlert from '../../components/modals/NotLogInAlert'
import NotEmailVerifiedAlert from '../../components/modals/NotEmailVerifiedAlert'
import NotAuthorizedAlert from '../../components/modals/NotAuthorizedAlert'
import {
  selectNAModal,
  selectNEVModal,
  selectNLModal,
} from '../../features/modalsSlice'

const useRequiredPermission = () => {
  // const odUser = useSelector(selectOdUser)
  const odUserExData = useSelector(selectOdUserExData)
  const dispatch = useDispatch()
  const openNAModal = useSelector(selectNAModal)
  const openNLModal = useSelector(selectNLModal)
  const openNEVModal = useSelector(selectNEVModal)

  useEffect(() => {
    permissionChecker(odUserExData, dispatch)
    console.log('useEffectなう')
  }, [])

  const PermissionAlerts: VFC = () => {
    if (openNLModal) return <NotLogInAlert />
    if (openNAModal) return <NotAuthorizedAlert />
    if (openNEVModal) return <NotEmailVerifiedAlert />
    return <></>
  }

  // const checkIfEmailVerified = () => {
  //   if (odUser.currentUser) {
  //     if (odUser.currentUser.emailVerified) {
  //       dispatch(setIsEmailVerified())
  //       return true
  //     } else {
  //       dispatch(openNEVModal())
  //       return false
  //     }
  //   } else {
  //     dispatch(openANEModal())
  //     return false
  //   }
  // }

  // const checkIfAuthorizedByAdmin = () => {
  //   if (odUser.currentUser) {
  //     if ('authorizedByAdmin' in odUserExData) {
  //       if (odUserExData.authorizedByAdmin) {
  //         dispatch(setIsAuthorizedByAdmin())
  //         return true
  //       } else {
  //         dispatch(openNAModal())
  //       }
  //     } else {
  //       // Studentなので
  //       dispatch(setIsAuthorizedByAdmin())
  //       return true
  //     }
  //   } else {
  //     dispatch(openANEModal())
  //     return false
  //   }
  // }

  return {
    // checkIfEmailVerified,
    // checkIfAuthorizedByAdmin,
    PermissionAlerts,
  }
}

export default useRequiredPermission
