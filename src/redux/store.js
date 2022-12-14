import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import postReducer from './posts'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    poster: postReducer,
  },
})