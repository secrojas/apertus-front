import style from '../servicios.module.css'
import { useEffect } from 'react';
import { FormServices } from './FormServices';


export const EntrevistasPorCompetencias =()=>{

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
 
  return(
    <div className={style.contenedor} >
        <div className={style.detalle} >
          <h1 className='wow animate__animated animate__fadeInUp' >Entrevistas por Competencias</h1><br/><br/>
          <p>
          Las entrevistas profesionales por competencias permiten identificar, detectar y analizar la presencia de competencias específicas que las personas requieren para desempeñarse exitosamente en un puesto laboral.<br/><br/>
          Bajo dicha modalidad, podemos anticipar el comportamiento del postulante en la organización.<br/><br/><br/>
          </p>
        </div>
        <FormServices />
    </div>
  
          )}