import { Navigate, Route, Routes } from "react-router-dom"
import { WhatsAppBtn } from "../../components"
import { SectionServicios } from "../home/components"
import { CalidadYMejora, MejoraDeProcesos, ModuloDeRrhh, ProgramasDeCapacitacion, ReclutamientoYseleccion , GeneradoresDeValor, Academia } from "./components"
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';


export const ServicesPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div style={{paddingTop:'120px'}}>
     
     <Routes> 
      
          <Route path='/' element={
            <div className="servicios-background">
              <SectionServicios/>
            </div>
          }/>  
          <Route path='/calidadYMejora' element={<CalidadYMejora/>}/>
          <Route path='/mejoraDeProcesos' element={<MejoraDeProcesos/>}/> 
          <Route path='/moduloDeRRHH' element={<ModuloDeRrhh/>}/>
          <Route path='/programasDeCapacitacion' element={<ProgramasDeCapacitacion/>}/>
          <Route path='/reclutamientoYSeleccion' element={<ReclutamientoYseleccion/>}/>
          <Route path='/generadoresDeValor/*' element={<GeneradoresDeValor/>}/>
          <Route path='/academia/*' element={<Academia/>}/>
          
          <Route path="/*" element={<Navigate to='/' replace/>} /> 
      </Routes>
      <ToastContainer position="bottom-left" />
     <WhatsAppBtn/>
    </div>
  )
}
