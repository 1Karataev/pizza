import React, { useMemo, useState, useEffect } from 'react';
import ContentTop from './components/ContentTop';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import './scss/app.scss'
import Servis from './API/Servis.js'


function App() {
 const [Pizza, setPizza] = useState([])

 
useEffect(()=>{
Servis.get(setPizza)
},[])
 

  
  return (
    
      <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <ContentTop/>
          
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              Pizza.map((pizza,i ) => <PizzaBlock  key={i} {...pizza}/>)
            }
            
            
            
          </div>
        </div>
      </div>
    </div>
    
      
  );
}

export default App;
