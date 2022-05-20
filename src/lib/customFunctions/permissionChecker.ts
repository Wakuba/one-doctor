import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import {
  openNLModal,
  openNAModal,
  openNEVModal,
  closeNAModal,
  // selectNAModal,
} from '../../features/modalsSlice'
import {
  setIsAuthorizedByAdmin,
  setIsEmailVerified,
  setIsNoAuthorizedByAdmin,
} from '../../features/permissionSlice'
import { logInState, logOutState } from '../../features/userSlice'
import { auth } from '../firebase/firebase.config'
import { odUserExDataType } from '../types'

const permissionChecker = (
  odUserExData: odUserExDataType,
  dispatch: Dispatch<AnyAction>
) => {
  const curUser = auth.currentUser
  console.log('asdlkfj')
  console.log('nanikore', curUser)
  // ↓ログインしているかどうか
  if (curUser) {
    // ログインしている
    dispatch(logInState(curUser))

    // ↓運営から認可を得ているかどうか
    if (
      'authorizedByAdmin' in odUserExData &&
      odUserExData.authorizedByAdmin === false
    ) {
      //運営から認可を得ていない場合
      dispatch(openNAModal())
      dispatch(setIsNoAuthorizedByAdmin())
      return false
    } else {
      // 運営から認可を受けている場合
      dispatch(setIsAuthorizedByAdmin())
      dispatch(closeNAModal())

      // ↓ユーザー自身がメールを承認したかどうか
      if (!curUser.emailVerified) {
        // 承認していない場合
        dispatch(openNEVModal())
        return false
      } else {
        // 承認している場合
        dispatch(setIsEmailVerified())
        return true
      }
    }
  } else {
    // アカウントが存在しない場合
    dispatch(openNLModal())
    dispatch(logOutState())
    return false
  }
}

export default permissionChecker
