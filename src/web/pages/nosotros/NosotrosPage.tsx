import style from './nosotros.module.css'
import { WhatsAppBtn } from '../../components/WhatsAppBtn';
import { useEffect } from 'react';


export const NosotrosPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className={style.contenedor}>
      <h1 className='wow animate__animated animate__fadeInUp' >¿Quienes somos?</h1><br/><br/><br/>
      <p>
       <b>Somos un equipo interdisciplinario de profesionales que comprende que las relaciones con los diferentes clientes internos y externos de las organizaciones está en constante evolución.</b>
       <br/><br/>
          En este marco definimos un modelo de consultoría innovador donde la
          gestión de los recursos humanos y los procesos están
          integrados y alineados a la implementación de nuevas tecnologías que
          permiten a las organizaciones atravesar las transformaciones
          requeridas por contextos cada vez más desafiantes.<br/><br/>
          Nuestro equipo está conformado por profesionales con sólida
          experiencia en gestión de recursos humanos, metodología Lean Six
          Sigma, implementación de modelos de Mejora Contínua, Gestión por
          Procesos, Gestión del Cambio y Transformación Digital con el objetivo
          de construir organizaciones que propongan una mejor experiencia al
          cliente y a sus colaboradores, traduciendo todas estas acciones a una mejora en la rentabilidad de nuestros clientes.
          <br/><br/><br/>
          <b>Nuestro Equipo</b>
          <br/><br/>
          Director Comercial: Javier Durán<br/>
          Directora de RRHH: Anabella Lozano<br/>
          Director de Proyectos: Martín Vallejo<br/>
          Coordinadora Operativa: Valeria Ramajo<br/>
          Asesora: Gabriela Magnoler<br/><br/><br/>
      </p>
      <WhatsAppBtn/>
    </div>
  )
}
