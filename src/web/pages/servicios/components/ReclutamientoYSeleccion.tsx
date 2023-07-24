import { useEffect } from 'react';
import style from '../servicios.module.css'
import { FormServices } from './FormServices';

export const ReclutamientoYseleccion = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <div className={style.contenedor} >
      <div className={style.detalle} >
        <h1 className='wow animate__animated animate__fadeInUp' >Reclutamiento y Selección</h1><br/><br/>
          <p>
            Teniendo en cuenta la falta de recursos calificados y el tiempo invertido
            en el reclutamiento, pre selección, testeo técnico y selección de los
            candidatos, es que muchas empresas deciden tercerizar sus
            búsquedas.<br/><br/>
            Desde Apertus llevamos adelante todo tipo de procesos orientados a la atracción de talento, incluido el Reclutamiento IT. Dichos servicios implican la pre selección en base de datos propias, en portales afines pasando luego por un minucioso proceso de entrevistas orientadas a detectar las competencias de cada perfil para luego la presentación de los candidatos a las empresas contratantes.<br/><br/>
            Nos caracterizamos en acompañar las necesidades del cliente con gran celeridad y profesionalismo.
            <br/><br/>
          </p>
      </div>
      <FormServices/>
    </div>
  )
}
