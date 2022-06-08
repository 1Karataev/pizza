import React,{useState} from 'react'
import '../scss/app.scss'
import Sort from './Sort'
const ContentTop = () => {
  const [activ, setActiv] = useState(0)
  const categories = ['Все', 'Мясные','Вегетарианская','Гриль','Острые','Закрытые']
  function Activ (n){
    setActiv(n)
  }
  return (
    <div className="content__top">
            <div className="categories">
              <ul>
                
                {categories.map((k,i)=>(<li onClick={()=> Activ(i)} className={activ == i?'active':''} key={i}>{k}</li>))}
                
              </ul>
            </div>
            <Sort/>
          </div>
  )
}

export default ContentTop