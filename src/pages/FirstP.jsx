import React, {  useState, useEffect } from 'react';
import PizzaBlock from '../components/PizzaBlock';
import '../scss/app.scss'
import Servis from '../API/Servis.js'
import Skeleton from '../components/Skeleton';
import ContentTop from '../components/ContentTop';
import {useSelector, useDispatch} from 'react-redux'
import { setCategoryid } from '../Redux/components/Filter';
export const ContextSearch = React.createContext();

const FirstP = () => {
 const [Pizza, setPizza] = useState([])
 const [fake, setFake] = useState(true)
 const {category, sort} = useSelector((state) => state.filter)
 const [search, setSearch] = useState('')
 const dispach = useDispatch()
useEffect( ()=>{
  Servis.pizza(setPizza,setFake, category, sort, search)
},[category, sort, search])
 const setCat = (id) => {
  dispach(setCategoryid(id))
 }
  

  return (
    <ContextSearch.Provider value={{search, setSearch}}>
     <div className="content">
        <div className="container">
          <ContentTop cat = {category} onClickcat = {(i)=>setCat(i)}/>
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
