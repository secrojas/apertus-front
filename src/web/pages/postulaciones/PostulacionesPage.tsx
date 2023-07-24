import { Navigate, Route, Routes } from "react-router-dom"
import { WhatsAppBtn } from "../../components"
import { Postulacion } from "./components/Postulacion"
import { SearchPostulaciones } from './components/SearchPostulaciones';


export const PostulacionesPage = () => {
  return (
    <div style={{paddingTop:'130px'}}>

      <Routes>  
        {/* <Route path={'/'} element={  <Postulaciones/>   }/> */}
        <Route path={'/'} element={  <SearchPostulaciones/>   }/>
        <Route path={'/postulacion'} element={ <Postulacion/>}/> 

        <Route path="/*" element={<Navigate to='/' replace/>} /> 
      </Routes>
     
      <WhatsAppBtn/>
    </div>
  )
}
