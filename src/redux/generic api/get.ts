import axios from "axios";

export const getRequest = async (url:string, config?:any) => {
    try {
       const result = await axios.get(url, config?config:null);
       if(result.status === 200){
        let response = {
            requestType:'GET',
            requestStatus:result.status,
            data:result.data
        }
        return response 
       }else{
            let response = {
                requestType:'GET',
                requestStatus:result.status,
                data:result.data
            }
            return response
       }            
    } catch (error) {
        let response = {
            requestType:'GET',
            requestStatus: 500,
            error:error
        }        
        return response
    }
}