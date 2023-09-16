import Api from "./api"

 const zodiacServices = {
   getZodiacDetail : async (setFunction : any,detail: string , zodiacName : string) => {
    const data = await Api.sendRequest(
      `horoskopi/${zodiacName}/${detail}`,
      "GET",
      detail
    );
    setFunction((prev: any) => ({ ...prev, [detail]: data.response }));
  }
}



export default zodiacServices 
