import React,{useState} from 'react'
import '../scss/app.scss'
import Search from './Search'
import Sort from './Sort'

type ContentProps = {cat:number, onClickcat:(i:number)=>void}
const ContentTop:React.FC<ContentProps> = ({cat , onClickcat}) => {
  const categories = ['Все', 'Мясные','Вегетарианская','Гриль','Острые','Закрытые']
  function Activ (n:number){
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
            <Sort/>
          </div>
  )
}

export default ContentTop