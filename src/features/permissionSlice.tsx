import { createSlice } from '@reduxjs/toolkit'

interface PermissionSliceType {
  isPermitted: boolean
}

const initialState: PermissionSliceType = {
  isPermitted: false,
}
export const permissionSlice = createSlice({
  name: 'permission',
  initialState,
  reducers: {
    setPermission: (state) => {
      state.isPermitted = true
    },
    deletePermission: (state) => {
      state.isPermitted = false
    },
  },
})

export const { setPermission, deletePermission } = permissionSlice.actions

// selectors
export const selectPermission = (state): boolean => {
  return state.permission.isPermitted
}

export default permissionSlice.reducer
