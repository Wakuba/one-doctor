import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { getDoc, doc } from 'firebase/firestore'
import {
  openNLModal,
  openNAModal,
  openNEVModal,
  closeNAModal,
  closeNEVModal,
  // selectNAModal,
} from '../../features/modalsSlice'
import {
  setIsAuthorizedByAdmin,
  setIsEmailVerified,
} from '../../features/permissionSlice'
import {
  logInState,
  logOutState,
  setUserExData,
} from '../../features/userSlice'
import { auth, db } from '../firebase/firebase.config'
import { odUserExDataType } from '../types'

const permissionChecker = async (dispatch: Dispatch<AnyAction>) => {
  const curUser = auth.currentUser
  const uid = auth.currentUser?.uid

  // ↓ログインしているかどうか
  if (curUser && uid) {
    // ログインしている
    dispatch(logInState(curUser))
    curUser.reload()
    const snap = await getDoc(doc(db, 'odUsers', uid))
    if (snap.exists()) {
      const odUserExData = snap.data()
      dispatch(setUserExData(odUserExData as odUserExDataType))

      // ↓運営から認可を得ているかどうか
      if (
        'authorizedByAdmin' in odUserExData &&
        odUserExData.authorizedByAdmin === false
      ) {
        //運営から認可を得ていない場合
        dispatch(openNAModal())
        dispatch(setIsAuthorizedByAdmin(false))
        return false
      } else {
        // 運営から認可を受けている場合
        dispatch(setIsAuthorizedByAdmin(true))
        dispatch(closeNAModal())

        // ↓ユーザー自身がメールを承認したかどうか

        if (!curUser.emailVerified) {
          // 承認していない場合
          dispatch(openNEVModal())
          dispatch(setIsEmailVerified(false))
          return false
        } else {
          // 承認している場合
          dispatch(setIsEmailVerified(true))
          dispatch(closeNEVModal())
          return true
        }
      }
    } else {
      // アカウントが存在しない場合
      dispatch(openNLModal())
      dispatch(logOutState())
      return false
    }
  } else {
    // アカウントが存在しない場合
    dispatch(openNLModal())
    dispatch(logOutState())
    return false
  }
}

export default permissionChecker
