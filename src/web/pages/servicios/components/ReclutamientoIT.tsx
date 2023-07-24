import style from '../servicios.module.css'
import { useEffect } from 'react';
import { FormServices } from './FormServices';
import RecruiterItButton from './academia-pdf/RecruiterItButton';


export const ReclutamientoIT = () =>{

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])  
 
  return(
    <div className={style.contenedor} >
        <div className={style.detalle} >
          <h1 className='wow animate__animated animate__fadeInUp' >Reclutamiento IT</h1><br/><br/>
          <p>
            Con el curso de reclutamiento IT podrás conocer las necesidades y demandas del mercado actual, y aprenderás a identificar las claves para atraer perfiles laborales para la industria de la tecnología. 
            Podrás conocer e interpretar las fortalezas de los candidatos orientados al sector, conocerás las principales funciones y lenguajes necesarios en el rubro y podrás desarrollar estrategias de captación de talentos.
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
            Modalidad: La modalidad de cursada es virtual. Se dictará una clase sincrónica semanal y tendrás acceso a través de nuestra plataforma a contenidos, foros y actividades para completar la capacitación de manera exitosa. 
          </p>
          <br/>
          <p>
            Conocé el programa completo haciendo click aquí abajo
            <br/><br/>
            <RecruiterItButton />
          </p>
          <br/>
          <p>
            Envianos un mail a academia@apertus.com.ar o escribinos por WhatsApp al 2236819683 para conocer costos y modalidad de inscripción.
          </p>
        </div>
        {/* <FormServices /> */}
    </div>  
)}