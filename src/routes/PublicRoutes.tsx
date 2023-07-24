
import { useAppSelector } from '../reducers/hooks/useRedux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoutes = () => {

    const { user } = useAppSelector(state=>state.authSlice)
    const { rol } = user
   
  return (
    <>
      {
        rol !=='admin'  ? <Outlet/> : <Navigate to='/admin'/>
      }
    </>
)}

export default PublicRoutes



