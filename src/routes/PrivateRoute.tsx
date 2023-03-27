import {useEffect, useState} from 'react';
import { isLoggedIn } from '../utils/localstorage'
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}:any) => {

  const navigate = useNavigate();
  const [next, handleNext] = useState(false);

  useEffect(() => {
    if(isLoggedIn()){
      handleNext(true);
    }else{
      navigate('/');
    }
  }, [navigate])

return(
  <div>
       { next ? children : <h1>Loading...</h1>}
  </div>
)
}

export default PrivateRoute