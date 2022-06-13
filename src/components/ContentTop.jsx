import React,{useState} from 'react'
import '../scss/app.scss'
import Search from './Search'
import Sort from './Sort'
const ContentTop = ({cat , onClickcat, sort , onClicksort}) => {
  const categories = ['Все', 'Мясные','Вегетарианская','Гриль','Острые','Закрытые']
  function Activ (n){
    onClickcat(n)
  }
  return (
    <div className="content__top">
            <div className="categories">
              <Search/>
              
              <ul>
                
                {categories.map((k,i)=>(<li onClick={()=> Activ(i)} className={cat  == i?'active':''} key={i}>{k}</li>))}
                
              </ul>
            </div>
            <Sort sort = {sort}  onClicksort = {onClicksort}/>
          </div>
  )
}

export default ContentTop