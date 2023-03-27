import axios from "axios";

export const postRequest = async (url:string, data: any, config?:any) => {
    try {
       const result = await axios.post(url, data, config?config:null);
       if(result.status === 200){
        let response = {
            requestType:'POST',
            requestStatus:result.status,
            data:result.data
        }
        return response 
       }else{
            let response = {
                requestType:'POST',
                requestStatus:result.status,
                data:result.data
            }
            return response
       }            
    } catch (error) {
        let response = {
            requestType:'POST',
            requestStatus: 500,
            error:error
        }        
        return response
    }
}