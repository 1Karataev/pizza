import axios from 'axios';
import { CartType } from '../Redux/components/Cart';
import { Sort } from '../Redux/components/Filter';
export default class Servis{
  static async pizza(setPizza: React.Dispatch<React.SetStateAction<CartType[]|undefined>> , setFake: React.Dispatch<React.SetStateAction<boolean>>, cat:number|string, sort:Sort,search:string){
    setFake(true)
    cat = cat == 0? '':`&category=${cat}`
    const response = await axios.get(`https://62a375d45bd3609cee6a9053.mockapi.io/pizza?&search=${search? search:''}${cat}&sortBy=${sort.sortProperty}&order=desc`)
    setPizza(response.data)
    setFake(false)
    
}
}