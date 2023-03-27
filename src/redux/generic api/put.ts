import axios from "axios";

export const putRequest = async (url:string, data: any, config?:any) => {
    try {
       const result = await axios.put(url, data, config?config:null);
       if(result.status === 200){
        let response = {
            requestType:'PUT',
            requestStatus:result.status,
            data:result.data
        }
        return response 
       }else{
            let response = {
                requestType:'PUT',
                requestStatus:result.status,
                data:result.data
            }
            return response
       }            
    } catch (error) {
        let response = {
            requestType:'PUT',
            requestStatus: 500,
            error:error
        }        
        return response
    }
}