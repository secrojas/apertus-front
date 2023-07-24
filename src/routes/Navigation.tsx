import { Route, Routes } from "react-router-dom"
import { useToken } from "../hooks/useToken";
import { useAppSelector } from "../reducers/hooks/useRedux";
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from "./PublicRoutes";
import { routes } from "./routes";
import { LoginRegistro } from '../auth/pages/LoginRegistro';


export const Navigation = () => {
 
   useToken();

   const { status } = useAppSelector(state=>state.authSlice);

   const { Component:Web } = routes[0]
   const { Component:Admin} = routes[1]

   if(status === 'checking'){

    return <></>
    
   }


  return (
    <Routes>

      <Route element={<PublicRoutes/>}>
        <Route path={routes[0].path} element={ <Web />  }/>
        <Route path={routes[2].path} element={<LoginRegistro />}/> 
        <Route path={routes[3].path} element={<LoginRegistro />}/>
        <Route path={routes[4].path} element={<LoginRegistro />}/>
        <Route path={routes[5].path} element={<LoginRegistro />}/>
      </Route>

      <Route element={<ProtectedRoutes/>}>
          <Route path={routes[1].path} element={ <Admin /> }/>
      </Route>  
    
    </Routes>
  )
}
