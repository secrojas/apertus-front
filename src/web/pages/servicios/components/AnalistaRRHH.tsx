import style from '../servicios.module.css'
import { useEffect } from 'react';
import { FormServices } from './FormServices';
import AnalystButton from './academia-pdf/AnalystButton';


export const AnalistaRRHH =()=>{

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
 
  return(
    <div className={style.contenedor} >
        <div className={style.detalle} >
          <h1 className='wow animate__animated animate__fadeInUp' >Analista de Recursos Humanos</h1><br/><br/>
          <p>
            Con el curso de Analista de RRHH podras adquirir herramientas para desempeñarte en áreas de recursos humanos, contemplando una mirada integral e innovadora de las organizaciones en el contexto actual. 
            Vas a aprender sobre el funcionamiento del departamento de recursos humanos, los distintos roles que se pueden desempeñar y las principales funciones de la posición.
          </p>
          <br/>
          <p>
            Inicio: Jueves 10 de agosto
            <br/>
            Horario: 18.30 a 20.30 hs
          </p>
          <br/>
          <p>
            Duración: 2 meses
          </p>
          <br/>
          <p>
            La modalidad de cursada es virtual. Se dictará una clase sincrónica semanal y tendrás acceso a través de nuestra plataforma a contenidos, foros y actividades para completar la capacitación de manera exitosa. 
          </p>
          <br/>
          <p>
            Conocé el programa completo haciendo click aquí abajo
            <br/><br/>
            <AnalystButton />
          </p>
          <br/>
          <p>
            Envianos un mail a academia@apertus.com.ar o escribinos por WhatsApp al 2236819683 para conocer costos y modalidad de inscripción.
          </p>
        </div>
        {/* <FormServices /> */}
    </div>
)}