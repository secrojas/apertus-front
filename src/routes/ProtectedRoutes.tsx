import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from '../reducers/hooks/useRedux';



 const ProtectedRoutes = () => {

    
    const { user } = useAppSelector(state=>state.authSlice)
    const { rol } = user
   
  return (
    <>
      {
        rol ==='admin' ? <Outlet/> : <Navigate to='/#'/>
      }
    </>
  )
}


export default ProtectedRoutes;