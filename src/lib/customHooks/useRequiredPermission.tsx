import { useEffect, VFC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPermission } from '../../features/permissionSlice'
import { selectOdUser, selectOdUserExData } from '../../features/userSlice'
import permissionChecker from '../customFunctions/permissionChecker'
import Loading from '../../pages/Loading'

const useRequiredPermission = (): { isPermitted: boolean; Loading: VFC } => {
  const odUser = useSelector(selectOdUser)
  const odUserExData = useSelector(selectOdUserExData)
  const isPermitted = useSelector(selectPermission)
  const dispatch = useDispatch()

  useEffect(() => {
    const isper = permissionChecker(odUserExData, dispatch)
    console.log('isPermitted', isper)
  }, [odUser])

  return { isPermitted, Loading }
}

export default useRequiredPermission
