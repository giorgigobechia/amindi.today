import Api from "./api"

interface weatherProps {
  error: boolean,
  response: any
}

 const weatherServices = {
  getTwentyFiveDays: async (setFunction : any, city : any) => {
    const response = await Api.sendRequest(`weather/${city}/25-days`, 'get') as weatherProps
    setFunction(response?.response[0])
    return response
  },
  getTodayWeather: async (setFunction : any, city : any) => {
    const response = await Api.sendRequest(`weather/${city}`, 'get') as weatherProps
    setFunction(response?.response)
    return response
  },
}


export default weatherServices 
