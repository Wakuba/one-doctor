import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import {
  openANEModal,
  openNAModal,
  openNEVModal,
  // selectNAModal,
} from '../../features/modalsSlice'
import { setPermission } from '../../features/permissionSlice'
import { auth } from '../firebase/firebase.config'
import { odUserExDataType } from '../types'

const permissionChecker = (
  odUserExData: odUserExDataType,
  dispatch: Dispatch<AnyAction>
) => {
  const curUser = auth.currentUser
  console.log('curUser', curUser)

  // ↓アカウントが存在するかどうか
  if (curUser) {
    // アカウントが存在する場合

    // ↓運営から認可を得ているかどうか
    if (
      'authorizedByAdmin' in odUserExData &&
      odUserExData.authorizedByAdmin === false
    ) {
      //運営から認可を得ていない場合
      dispatch(openNAModal())
      return false
    } else {
      // 運営から認可を受けている場合

      // ↓ユーザー自身がメールを承認したかどうか
      if (!curUser.emailVerified) {
        // 承認していない場合
        dispatch(openNEVModal())
        return false
      } else {
        // 承認している場合
        dispatch(setPermission())
        return true
      }
    }
  } else {
    // アカウントが存在しない場合
    dispatch(openANEModal())
    return false
  }
}

export default permissionChecker
