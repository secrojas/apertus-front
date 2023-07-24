import style from '../servicios.module.css'
import { useEffect } from 'react';
import { FormServices } from './FormServices';
import MarketingButton from './academia-pdf/MarketingButton';


export const Marketing =()=>{

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
 
  return(
    <div className={style.contenedor} >
        <div className={style.detalle} >
          <h1 className='wow animate__animated animate__fadeInUp' >Marketing para emprendedores</h1><br/><br/>
          <p>
            Con el curso de Marketing de Emprendedores podrás analizar y establecer estrategias de generación de contenido digital en busca de mejorar el posicionamiento en el entorno web de tu emprendimiento, 
            marca o servicio.
          </p>
          <br/>
          <p>
            Inicio: Miércoles 9 de agosto
            <br/>
            Horario: 18.30 a 20.30 hs
          </p>
          <br/>
          <p>
            Duración: 2 meses
          </p>
          <br/>
          <p>
            Modalidad: La modalidad de cursada es virtual. Se dictará una clase sincrónica semanal y tendrás acceso a través de nuestra plataforma a contenidos, foros y actividades para completar la capacitación de manera exitosa. 
          </p>
          <br/>
          <p>
            Conocé el programa completo haciendo click aquí abajo
            <br/><br/>
            <MarketingButton />
          </p>
          <br/>
          <p>
            Envianos un mail a academia@apertus.com.ar o escribinos por WhatsApp al 2236819683 para conocer costos y modalidad de inscripción.
          </p>          
        </div>
        {/* <FormServices /> */}
    </div>
)}