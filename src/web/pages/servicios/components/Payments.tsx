import style from '../servicios.module.css'
import { useEffect } from 'react';
import { FormServices } from './FormServices';
import PaymentsButton from './academia-pdf/PaymentsButton';


export const Payments =()=>{

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
 
  return(
    <div className={style.contenedor} >
        <div className={style.detalle} >
          <h1 className='wow animate__animated animate__fadeInUp' >Liquidación de sueldos</h1><br/><br/>
          <p>
            Con el curso de Liquidación de Sueldos podras introducirte en la actividad abordando los principales conceptos a contemplar en la liquidación de haberes y las normativas vigentes. Vas a conocer los 
            principales conceptos de los convenios colectivos de trabajo, y aprenderás el funcionamiento y objetivos del proceso de liquidación de sueldos.
          </p>
          <br/>
          <p>
            Inicio: Martes 8 de agosto
            <br/>
            Horario: 18 a 20hs
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
            <PaymentsButton />
          </p>
          <br/>
          <p>
            Envianos un mail a academia@apertus.com.ar o escribinos por WhatsApp al 2236819683 para conocer costos y modalidad de inscripción.
          </p>
        </div>
        {/* <FormServices /> */}
    </div>
)}