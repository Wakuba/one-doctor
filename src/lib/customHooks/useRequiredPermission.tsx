import { useDispatch, useSelector } from 'react-redux'
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
  const dispatch = useDispatch()
  const openNAModal = useSelector(selectNAModal)
  const openNLModal = useSelector(selectNLModal)
  const openNEVModal = useSelector(selectNEVModal)

  useEffect(() => {
    permissionChecker(dispatch)
  }, [])

  const PermissionAlerts: VFC = () => {
    if (openNLModal) return <NotLogInAlert />
    if (openNAModal) return <NotAuthorizedAlert />
    if (openNEVModal) return <NotEmailVerifiedAlert />
    return <></>
  }

  return {
    PermissionAlerts,
  }
}

export default useRequiredPermission
