import style from '../servicios.module.css'
import { useEffect } from 'react';
import { FormServices } from './FormServices';


export const EvaluacionesPsicotecnicas =()=>{

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
 
  return(
    <div className={style.contenedor} >
        <div className={style.detalle} >
          <h1 className='wow animate__animated animate__fadeInUp' >Evaluaciones Psicotécnicas</h1><br/><br/>
          <p>
          A través de diferentes pruebas certificadas por profesionales calificados en el área, evaluamos las competencias laborales de las personas, contribuyendo así con valiosa información para la toma de decisiones respecto a la incorporación o evaluación del potencial de los colaboradores.<br/><br/><br/>
          </p>
        </div>
        <FormServices />
    </div>
  
          )}