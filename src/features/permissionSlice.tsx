import { createSlice } from '@reduxjs/toolkit'

interface PermissionSliceType {
  isEmailVerified: boolean
  isAuthorizedByAdmin: boolean
}

const initialState: PermissionSliceType = {
  isEmailVerified: false,
  isAuthorizedByAdmin: false,
}
export const permissionSlice = createSlice({
  name: 'permission',
  initialState,
  reducers: {
    setIsEmailVerified: (state) => {
      state.isEmailVerified = true
    },
    setIsAuthorizedByAdmin: (state) => {
      state.isAuthorizedByAdmin = true
    },
    setIsNoAuthorizedByAdmin: (state) => {
      state.isAuthorizedByAdmin = false
    },
  },
})

export const {
  setIsEmailVerified,
  setIsAuthorizedByAdmin,
  setIsNoAuthorizedByAdmin,
} = permissionSlice.actions

// selectors
export const selectIsEmailVerified = (state): boolean => {
  return state.permission.isEmailVerified
}

export const selectIsAuthorizedByAdmin = (state): boolean => {
  return state.permission.isAuthorizedByAdmin
}

export default permissionSlice.reducer
