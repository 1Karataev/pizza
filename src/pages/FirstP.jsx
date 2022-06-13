import React, { useMemo, useState, useEffect } from 'react';
import PizzaBlock from '../components/PizzaBlock';
import '../scss/app.scss'
import Servis from '../API/Servis.js'
import Skeleton from '../components/Skeleton';
import ContentTop from '../components/ContentTop';

export const ContextSearch = React.createContext();

const FirstP = () => {
 const [Pizza, setPizza] = useState([])
 const [fake, setFake] = useState(true)
 const [cat, setCat] = useState(0)
 const [sort,setSort] = useState({
  name:'Популярности',
  sortProperty:'rating'
 })
  const [search, setSearch] = useState('')
useEffect( ()=>{
  Servis.pizza(setPizza,setFake, cat, sort,search)
},[cat, sort, search])
 
   
  
  return (
    <ContextSearch.Provider value={{search, setSearch}}>
     <div className="content">
        <div className="container">
          <ContentTop cat = {cat} onClickcat = {setCat} sort = {sort} onClicksort = {setSort} />
          <h2 className="content__title">Все пиццы</h2>
          <div className='content__items-div'>
          <div className="content__items">
            {
             fake? 
            [...new Array(6)].map((_ ,i)=> <Skeleton key={i}/>)
              : Pizza.map((pizza,i ) => <PizzaBlock key={i} {...pizza}/>)
            }
            
          </div>
          </div>
    </div>
      </div>
      </ContextSearch.Provider>
  );
}
export default FirstP
