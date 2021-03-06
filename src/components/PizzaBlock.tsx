import React, {useState} from 'react'
import '../scss/app.scss'
import { useDispatch, useSelector} from 'react-redux';
import { setCart } from '../Redux/components/Cart';
import { RootState } from '../Redux/store';
const PizzaBlock: React.FC <{id:number, imageUrl:string,types:any, siz:any ,name:string , price:number, category:string  ,rating:number}> = ({id, imageUrl ,types, siz, name , price, category ,rating}) =>{
  const [num, setNum] = useState<number>(0);
  const dispach = useDispatch()
  const type = ['Тонкое', 'Традиционное']
  const [activtyp, setActivtyp] = useState<number>(0)
  const [activs, setActivs] = useState<number>(0)
  const cart = useSelector((state:RootState)=>state.cart.cart)
  const currentCart = cart.find((obj) =>obj.id == id)
  const addCart = ()=>{
    dispach(setCart({id, imageUrl,name , price, type: type[activtyp], size:siz[activs], count: num}))
  }
   function numAdd () {
    setNum(num + 1)
  }
  return (
    
    <div className="pizza-block">
  <img
    className="pizza-block__image"
    src={imageUrl}
    alt="Pizza"
  />
  <h4 className="pizza-block__title">{name}</h4>
  <div className="pizza-block__selector">
    <ul>
      
      {types.map((typ:any, i:number) => <li key={i} onClick = {(()=> setActivtyp(i))} className ={activtyp == i? 'active':''}>{type[typ]}</li>)}
      
      
    </ul>
    <ul>
      {siz.map((siz:number,i:number) => <li key={i} onClick = {(()=> setActivs(i))}  className ={activs == i? 'active':''}>{siz} см.</li>)}
     
     
    </ul>
  </div>
  <div onClick={addCart} className="pizza-block__bottom">
    <div className="pizza-block__price">{`от ${price} р`}</div>
    <div className="button button--outline button--add" onClick={numAdd}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span>Добавить</span>
      <i>{currentCart?.count? currentCart.count:num}</i>
    </div>
  </div>
</div>

  )
}

export default PizzaBlock