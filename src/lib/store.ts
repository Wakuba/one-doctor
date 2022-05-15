import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import modalsReducer from '../features/modalsSlice'
import permissionReducer from '../features/permissionSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    modals: modalsReducer,
    permission: permissionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
