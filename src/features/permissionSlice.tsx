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
    setIsEmailVerified: (state, actions) => {
      state.isEmailVerified = actions.payload
    },
    setIsAuthorizedByAdmin: (state, actions) => {
      state.isAuthorizedByAdmin = actions.payload
    },
  },
})

export const { setIsEmailVerified, setIsAuthorizedByAdmin } =
  permissionSlice.actions

// selectors
export const selectIsEmailVerified = (state): boolean => {
  return state.permission.isEmailVerified
}

export const selectIsAuthorizedByAdmin = (state): boolean => {
  return state.permission.isAuthorizedByAdmin
}

export default permissionSlice.reducer
