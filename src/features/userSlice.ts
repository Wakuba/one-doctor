import { createSlice } from '@reduxjs/toolkit'
import { User } from 'firebase/auth'
import { odUserExDataType } from '../lib/types'

interface UserSliceType {
  odUser: User | null
  odUserExData: odUserExDataType
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
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUpState: (state, action) => {
      console.log('signUpState', state)
      state.odUser = action.payload
    },
    logInState: (state, action) => {
      console.log('logInState', state)
      state.odUser = action.payload
    },
    logOutState: (state) => {
      console.log('logOutState', state)
      state.odUser = null
    },
    defaultUserState: (state) => {
      console.log('defaultState', state)
      state.odUser = null
    },
    setUserExData: (state, action) => {
      console.log('setUserExData実行', state)
      state.odUserExData = action.payload
    },
  },
})

export const {
  signUpState,
  logInState,
  logOutState,
  defaultUserState,
  setUserExData,
} = userSlice.actions

// selectors
export const selectOdUser = (state) => {
  return state.user.odUser
}

export const selectOdUserExData = (state): odUserExDataType => {
  console.log('state', state)
  return state.user.odUserExData
}

export default userSlice.reducer
