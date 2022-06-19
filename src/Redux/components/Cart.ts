import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetCartLS } from '../../LS/GetCartLS'



export type CartType = {
  id:number ,  
  name:string,
  imageUrl:string ,
   price:number, 
   type: string, 
   size:number, 
   count: number
  }

interface CartState {
  cart: CartType[]
}

const initialState:CartState = {
  cart: GetCartLS()
  
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   setCart(state, action: PayloadAction<CartType>){
    const findCart = state.cart.find((obj) => obj.id == action.payload.id);
    findCart? findCart.count++: state.cart.push(action.payload)
   },
   setPlusCart(state, action:PayloadAction<number>){
    const findCart = state.cart.find((obj) => obj.id === action.payload);
    if(findCart){
      findCart.count++
    }
   },
   setMinusCart(state, action:PayloadAction<number>){
    const findCart = state.cart.find((obj) => obj.id === action.payload);
   if(findCart){
    findCart.count--
   } 
  },
   deleteCart(state,action:PayloadAction<number>){
     state.cart =  state.cart.filter((v,i,a) => v.id !== action.payload)
   },
   deletAll(state){
    state.cart = []
   }
  },
})


export const {setCart,  deleteCart, deletAll,setMinusCart, setPlusCart} = cartSlice.actions

export default cartSlice.reducer