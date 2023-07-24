import {generadoresDeValor} from '../../objectos'
import triangle from '../../../../assets/imgs/theme/service-arrow.png'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../../reducers/hooks/useRedux';
import { service } from '../../../../reducers/serviciosSlice';
import { ToastContainer } from 'react-toastify';
import { WhatsAppBtn } from '../../../components';
import { EvaluacionesPsicotecnicas , EncuestasDeClima , EntrevistasPorCompetencias } from './index';


export const GeneradoresDeValor = () => {
  
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
                    <h2 className="section-title   wow animate__animated animate__fadeInUp">Generadores de Valor</h2>
                </div>
                <div className='servicios-content' >
                    {
                        Object.entries(generadoresDeValor).map(([key,value])=>(
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
         <Route path='/evaluacionesPsicotecnicas' element={<EvaluacionesPsicotecnicas/>}/>
         <Route path='/encuestasDeClima' element={<EncuestasDeClima/>}/> 
         <Route path='/entrevistasPorCompetencias' element={<EntrevistasPorCompetencias/>}/>
         
         <Route path="/*" element={<Navigate to='/' replace/>} /> 
     </Routes>
     <ToastContainer position="bottom-left" />
    <WhatsAppBtn/>
   </div>
 
  )
}
