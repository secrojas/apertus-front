import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from '../../reducers/hooks/useRedux';




 const ProtectedRoute = () => {

    
    const { user } = useAppSelector(state=>state.authSlice)
    const { rol } = user
   
  return (
    <>
      {
        rol ==='candidato' ? <Outlet/> : <Navigate to='/'/>
      }
    </>
  )
}


export default ProtectedRoute;