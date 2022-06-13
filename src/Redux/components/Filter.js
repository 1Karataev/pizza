import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: 0,
  sort : {
  name: 'Популярности',
  sortProperty:'rating',
 }
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
   setCategoryid(state, action){
    state.category = action.payload
   },
   setSort(state,action){
    state.sort = action.payload
   }
  },
})


export const { setCategoryid, setSort } = filterSlice.actions

export default filterSlice.reducer