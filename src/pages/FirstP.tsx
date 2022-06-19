import React, {  useState, useEffect } from 'react';
import PizzaBlock from '../components/PizzaBlock';
import '../scss/app.scss'
import Servis from '../API/Servis'
import Skeleton from '../components/Skeleton';
import ContentTop from '../components/ContentTop';
import {useSelector} from 'react-redux'
import { setCategoryid } from '../Redux/components/Filter';
import { RootState, useAppDispatch } from '../Redux/store';
import { CartType } from '../Redux/components/Cart';
export const ContextSearch = React.createContext<any>('');

const FirstP: React.FC = () => {
 const [Pizza, setPizza] = useState<CartType[]>()
 const [fake, setFake] = useState<boolean>(true)
 const {category, sort} = useSelector((state:RootState) => state.filter)
 const [search, setSearch] = useState<string>('')
 const dispach = useAppDispatch()
useEffect( ()=>{
  Servis.pizza(setPizza,setFake, category, sort, search)
},[category, sort, search])
 const setCat = (id:number) => {
  dispach(setCategoryid(id))
 }
  

  return (
    <ContextSearch.Provider value={{search, setSearch}}>
     <div className="content">
        <div className="container">
          <ContentTop cat = {category} onClickcat = {(i:number)=>setCat(i)}/>
          <h2 className="content__title">Все пиццы</h2>
          <div className='content__items-div'>
          <div className="content__items">
            {
             fake? 
            [...new Array(6)].map((_ ,i)=> <Skeleton key={i}/>)
              : Pizza?.map((pizza:any,i:number  ) => <PizzaBlock key={i} {...pizza}/>)
            }
            
          </div>
          </div>
    </div>
      </div>
      </ContextSearch.Provider>
  );
}
export default FirstP
