import axios from 'axios';
export default class Servis{
  static async get (setPizza){
    const response = await axios.get('https://62a375d45bd3609cee6a9053.mockapi.io/pizza')
    setPizza(response.data)
    
  }

}