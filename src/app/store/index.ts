import { configureStore } from '@reduxjs/toolkit'
import appReducer from './lego/lego.slice.ts';
import { reducerPath, apiReducer, middleware } from './lego/lego.api.ts';

export const store = configureStore({
  reducer: {
    app: appReducer,
    [reducerPath]: apiReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch