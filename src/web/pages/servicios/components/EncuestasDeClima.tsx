import style from '../servicios.module.css'
import { useEffect } from 'react';
import { FormServices } from './FormServices';


export const EncuestasDeClima =()=>{

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
 
  return(
    <div className={style.contenedor} >
        <div className={style.detalle} >
          <h1 className='wow animate__animated animate__fadeInUp' >Encuestas de Clima</h1><br/><br/>
          <p>
          Las encuestas de clima laboral son herramientas que permiten conocer la percepción de las personas sobre la organización en diversas aristas, y por lo tanto, identificar cómo repercute dicha percepción en el rendimiento de las personas con la compañía.<br/><br/>
          Así, los resultados obtenidos son volcados en informes que permiten desarrollar planes de acción para abordar oportunidades de mejora.<br/><br/><br/>
          </p>
        </div>
        <FormServices />
    </div>
  
          )}