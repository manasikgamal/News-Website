import { configureStore } from '@reduxjs/toolkit'
import ArticlesReducer from './redux/apiSlice';

export const store = configureStore({
  reducer: {
    api:ArticlesReducer
  },
})

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: ArticlesReducer
  })
}

export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = typeof store.dispatch