import style from '../servicios.module.css'
import { useEffect } from 'react';
import { FormServices } from './FormServices';

export const ModuloDeRrhh = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  
  return (
    <div className={style.contenedor} >
       <div className={style.detalle} >
          <h1 className='wow animate__animated animate__fadeInUp' >Módulo de RRHH</h1><br/><br/>
          <p>
              La tercerización del área de Recursos Humanos está apuntada a
          Pymes que se encuentran en un proceso de crecimiento con una
          población laboral de hasta 50 empleados. Esta subcontratación tiene
          como finalidad acompañar a las organizaciones en todas las aristas
          relacionadas a la gestión de personas, permitiendo así que las líneas
          de Alto Mando puedan orientar sus esfuerzo al core de su negocio.<br/><br/>
          APERTUS le da la posibilidad de contar con un equipo especializado
          para asumir las necesidades que impone el mercado laboral actual.<br/><br/>
          </p>
       </div>
       <FormServices/>
    </div>
  )
}
