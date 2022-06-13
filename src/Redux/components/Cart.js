import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart:[],
  
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   setCart(state, action){
    const findCart = state.cart.find((obj) => obj.id == action.payload.id);
    if(findCart){
      findCart.count++
    } else {state.cart.push(action.payload)}
   },
   deleteCart(state,action){
    state.cart.filter((v,i,a) => v.id !== action.payload)
   }
  },
})


export const {setCart,  deleteCart} = cartSlice.actions

export default cartSlice.reducer