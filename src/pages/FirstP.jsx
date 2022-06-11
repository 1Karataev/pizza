import React, { useMemo, useState, useEffect } from 'react';
import PizzaBlock from '../components/PizzaBlock';
import '../scss/app.scss'
import Servis from '../API/Servis.js'
import Skeleton from '../components/Skeleton';
import ContentTop from '../components/ContentTop';

const FirstP = () => {
 const [Pizza, setPizza] = useState([])
 const [fake, setFake] = useState(true)

useEffect( ()=>{
  Servis.pizza(setPizza,setFake)
},[])
 

  
  return (
     <div className="content">
        <div className="container">
          <ContentTop/>
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
      
  );
}
export default FirstP