import React, {useContext, useCallback,useState} from 'react'
import { ContextSearch } from '../pages/FirstP'
import classes from '../scss/components/Search.module.scss'
import debounce from 'lodash.debounce'
 const Search = () => {
const {search, setSearch} = useContext(ContextSearch)
const [value, setValue] = useState('')
const searchDe = useCallback(
  debounce((e)=>{
    setSearch(e)
  },300) ,[])
const setSearchValue = (e) =>{
  setValue(e.target.value)
  searchDe(e.target.value)
}

  return ( 
    <div className={classes.search}>
    <input value={value} onChange={(e)=>setSearchValue(e)}  placeholder='Введите название пиццы'/>
    </div>
  )
}
export default Search