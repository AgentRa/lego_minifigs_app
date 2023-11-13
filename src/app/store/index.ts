import { configureStore } from '@reduxjs/toolkit'
import { reducerPath, apiReducer, middleware } from './lego/lego.api.ts';

export const store = configureStore({
  reducer: {
    [reducerPath]: apiReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch