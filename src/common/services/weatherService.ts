import { useGlobalContext } from "../context/store"
import Api from "./api"

interface TwentyFiveDays {
  error: boolean,
  response: any
}

 const weatherServices = {
  getTwentyFiveDays: async (setFunction : any, city : any) => {
    const response = await Api.sendRequest(`weather/${city}/25-days`, 'get') as TwentyFiveDays
    setFunction(response?.response[0])
    return response
  },
}


export default weatherServices 
