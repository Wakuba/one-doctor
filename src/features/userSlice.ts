import { createSlice } from '@reduxjs/toolkit'
import { User } from 'firebase/auth'
import { odUserExDataType } from '../lib/types'

interface UserSliceType {
  odUser: User | null
  odUserExData: odUserExDataType
  userState: 'AccountNotExist' | 'LogIn' | 'LogOut'
}

const initialState: UserSliceType = {
  odUser: null,
  odUserExData: {
    uid: '',
    ts: new Date(),
    name: '',
    email: '',
    ruby: '',
    password: '',
    gender: '',
    isStudent: true,
    favoDeparts: [],
    favoEvents: [],
    grade: '',
    university: '',
    workplaceWishFor: [],
    departmentWishFor: [],
  } || {
    uid: '',
    ts: new Date(),
    name: '',
    email: '',
    ruby: '',
    password: '',
    gender: '',
    isStudent: true,
    favoDeparts: [],
    favoEvents: [],
    departmentWishFor: [],
    workplace: '',
    workplaceWishFor: [],
    authorizedByAdmin: false,
  },
  userState: 'AccountNotExist',
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUpState: (state, action) => {
      console.log('signUpState', state.odUser, state.userState)
      state.odUser = action.payload
      state.userState = 'LogOut'
    },
    logInState: (state, action) => {
      console.log('logInState', state.odUser, state.userState)
      state.odUser = action.payload
      state.userState = 'LogIn'
    },
    logOutState: (state) => {
      console.log('logOutState', state.odUser, state.userState)
      state.odUser = null
      state.userState = 'LogOut'
    },
    setUserExData: (state, action) => {
      console.log('setUserExData実行', state)
      state.odUserExData = action.payload
    },
  },
})

export const { signUpState, logInState, logOutState, setUserExData } =
  userSlice.actions

// selectors
export const selectOdUser = (state) => {
  return state.user.odUser
}

export const selectUserState = (state) => {
  return state.user.userState
}

export const selectOdUserExData = (state): odUserExDataType => {
  console.log('state', state)
  return state.user.odUserExData
}

export default userSlice.reducer
