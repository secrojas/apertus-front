import { useEffect } from 'react';
import { useAppDispatch} from '../reducers/hooks/useRedux';
import { logout, revalidarToken } from "../reducers/authSlice";

 
export const useToken = ()=>{

    const token = sessionStorage.getItem('token');
    const dispatch = useAppDispatch();
  
    useEffect(() => {
    token ?  dispatch(revalidarToken(token)) : dispatch(logout())   
    }, [dispatch])


    return {token}

}