import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './components/Search'
export const store = configureStore({
  reducer: {
    search: searchReducer
  },
})