import { configureStore } from '@reduxjs/toolkit'
import sliceReducer from './textsSlice.js'

export const store = configureStore({
  reducer: {
    textsSlice: sliceReducer
  },
})
