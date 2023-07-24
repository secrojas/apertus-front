import style from '../servicios.module.css'
import { useEffect } from 'react';
import { FormServices } from './FormServices';


export const CalidadYMejora =()=>{

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
 
  return(
    <div className={style.contenedor} >
        <div className={style.detalle} >
          <h1 className='wow animate__animated animate__fadeInUp' >Calidad y Mejora Continua</h1><br/><br/>
          <p>
          Trabajamos a través de diferentes enfoques metodológicos como Six Sigma, Agile, COPC e Iso, liderando proyectos de obtención y mejora de indicadores de gestión. Dichos proyectos tienen como finalidad la creación de tableros que posibiliten el monitoreo punta a punta del negocio, logrando detectar oportunidades de mejora en los mismos que apalanquen el resultado operativo de las organizaciones. <br/><br/>
          Implementamos sistemas de gestión de la calidad alineados con
          aquellos elementos que agregan valor a la experiencia del cliente y
          comprometiendo a los colaboradores en ser verdaderos embajadores
          de la marca.<br/><br/><br/>
          </p>
        </div>
        <FormServices />
    </div>
  
          )}