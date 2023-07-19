import { configureStore } from '@reduxjs/toolkit'
import { userApi } from '../api/userApi'
import userSlice from '../feature/userSlice'

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    userSlice: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),  
})