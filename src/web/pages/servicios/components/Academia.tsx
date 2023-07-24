import {coursesAcademy} from '../../objectos'
import triangle from '../../../../assets/imgs/theme/service-arrow.png'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../../reducers/hooks/useRedux';
import { service } from '../../../../reducers/serviciosSlice';
import { ToastContainer } from 'react-toastify';
import { WhatsAppBtn } from '../../../components';
import { AnalistaRRHH, ReclutamientoIT, Marketing, Payments  } from './index';


export const Academia = () => {
  
    const navigate = useNavigate(); 
    const dispatch = useAppDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    
    return ( 
    
    <div>
     
    <Routes> 
     
         <Route path='/' element={
            <div className="servicios-background">
            
                <div className='servicios-container'>
                    <div className='servicios-titulo'>
                        <img className='servicios-triangle' src={triangle} alt='triangulo'></img>
                        <h2 className="section-title   wow animate__animated animate__fadeInUp">Academia Apertus</h2>
                    </div>
                    <div className='servicios-content' >
                        <div className='row'>
                            <div className="col-2"></div>
                            <div className="col-8">
                                <p>
                                Brindamos servicios de capacitación orientados a fortalecer competencias necesarias para afrontar las demandas del contexto laboral actual y hacer frente de ese modo a la complejidad que 
                                nos plantea la realidad. Con un equipo interdisciplinario de docentes de primer nivel, nuestros cursos están destinados a personas que deseen resignificar su empleabilidad y aumentar su capital de conocimiento.             
                                </p>
                            </div>             
                        </div> 
                    </div>
                    <div className='servicios-content' >
                        {
                            Object.entries(coursesAcademy).map(([key,value])=>(
                                <div key={key} className='services-card'  onClick={e=>{
                                    dispatch(service(value.name));
                                    navigate(`/servicios${value.to}`);
                                }} >
                                    
                                    <img className='services-card--img' alt='servicios' src={value.img} />
                                    <div className='services-card--title' >
                                        <h1>{value.name}</h1>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
           
         }/>  
         <Route path='analistaRRHH' element={<AnalistaRRHH/>}/>
         <Route path='reclutamientoIT' element={<ReclutamientoIT/>}/>
         <Route path='marketingEmprendedores' element={<Marketing/>}/>         
         <Route path='liquidacionSueldos' element={<Payments/>}/>
         
         <Route path="/*" element={<Navigate to='/' replace/>} /> 
     </Routes>
     <ToastContainer position="bottom-left" />
    <WhatsAppBtn/>
   </div>
 
  )
}
