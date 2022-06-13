import axios from 'axios';
export default class Servis{
  static async pizza(setPizza, setFake, cat, sort,search){
    setFake(true)
    cat = cat == 0? '':`&category=${cat}`
    const response = await axios.get(`https://62a375d45bd3609cee6a9053.mockapi.io/pizza?&search=${search? search:''}${cat}&sortBy=${sort.sortProperty}&order=desc`)
    setPizza(response.data)
    setFake(false)
    
}
}