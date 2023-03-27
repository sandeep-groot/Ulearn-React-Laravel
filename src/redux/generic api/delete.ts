import axios from "axios";

export const postRequest = async (url:string, config?:any) => {
    try {
       const result = await axios.delete(url, config?config:null);
       if(result.status === 200){
        let response = {
            requestType:'DELETE',
            requestStatus:result.status,
            data:result.data
        }
        return response 
       }else{
            let response = {
                requestType:'DELETE',
                requestStatus:result.status,
                data:result.data
            }
            return response
       }            
    } catch (error) {
        let response = {
            requestType:'DELETE',
            requestStatus: 500,
            error:error
        }        
        return response
    }
}