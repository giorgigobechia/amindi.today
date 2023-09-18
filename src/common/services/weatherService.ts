import Api from "./api"

interface weatherProps {
  error: boolean,
  response: any
}

 const weatherServices = {
  getTwentyFiveDays: async (setState : any, city : any) => {
    const response = await Api.sendRequest(`weather/${city}/25-days`, 'get') as weatherProps
    setState(response?.response[0])
    return response
  },
  getTodayWeather: async (setState : any, city : any) => {
    const response = await Api.sendRequest(`weather/${city}`, 'get') as weatherProps
    setState(response?.response)
    return response
  },
  getHourlyWeather: async (setState : any, city : any) => {
    const response = await Api.sendRequest(`weather/${city}/hourly`, 'get') as weatherProps
    setState(response?.response[0])
    return response
  },
}


export default weatherServices 
