import { configureStore } from '@reduxjs/toolkit'
import filter from './components/Filter'
import cart from './components/Cart'
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
     filter, 
     cart
  },
})


export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export type RootState = ReturnType<typeof store.getState>