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
    findCart? findCart.count++: state.cart.push(action.payload)
   },
   setPlusCart(state, action){
    const findCart = state.cart.find((obj) => obj.id === action.payload);
    if(findCart){
      findCart.count++
    }
   },
   setMinusCart(state, action){
    const findCart = state.cart.find((obj) => obj.id === action.payload);
   if(findCart){
    findCart.count--
   } 
  },
   deleteCart(state,action){
     state.cart =  state.cart.filter((v,i,a) => v.id !== action.payload)
   },
   deletAll(state){
    state.cart = []
   }
  },
})


export const {setCart,  deleteCart, deletAll,setMinusCart, setPlusCart} = cartSlice.actions

export default cartSlice.reducer