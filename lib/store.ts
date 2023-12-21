import { configureStore } from '@reduxjs/toolkit'
import portofolioReducer from './features/portofolio/portofolioSlice'


  export const store = configureStore({
    reducer: {
        portofolio: portofolioReducer,
    }
  })

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;