import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Sort ={
  name:string,
  sortProperty:string
}

interface FilterState {
  category:number,
  sort: Sort
}
const initialState: FilterState = {
  category: 0,
  sort : {
  name: 'Популярности',
  sortProperty:'rating',
 }
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
   setCategoryid(state, action: PayloadAction<number>){
    state.category = action.payload
   },
   setSort(state,action: PayloadAction<Sort>){
    state.sort = action.payload
   }
  },
})


export const {setCategoryid, setSort } = filterSlice.actions

export default filterSlice.reducer