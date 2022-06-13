import { configureStore } from '@reduxjs/toolkit'
import filter from './components/Filter'
import cart from './components/Cart'
export const store = configureStore({
  reducer: {
     filter, cart
  },
})