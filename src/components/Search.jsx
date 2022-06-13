import React, {useContext} from 'react'
import { ContextSearch } from '../pages/FirstP'
import classes from '../scss/components/Search.module.scss'
 const Search = () => {
  const {search, setSearch} = useContext(ContextSearch)
  
  return (
    <div className={classes.search}>
    <input value={search} onChange={(e)=>setSearch(e.target.value)}  placeholder='Введите название пиццы'/>
    </div>
  )
}
export default Search