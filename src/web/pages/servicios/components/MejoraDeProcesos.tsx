import { useEffect } from 'react';
import style from '../servicios.module.css'
import { FormServices } from './FormServices';


export const MejoraDeProcesos =()=>{

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    return(
    <div className={style.contenedor} >
       <div className={style.detalle} >
            <h1 className='wow animate__animated animate__fadeInUp' >Reingeniería y Mejora de Procesos</h1><br/><br/>
            <p>
                Toda organización funciona a partir de la ejecución de distintos
            procesos que se llevan a cabo con el objetivo de entregar un producto
            o servicio de calidad al cliente.<br/><br/>
            Muchas veces estos procesos existen de manera implícita, pero es muy
            importante su documentación y ordenamiento con el objetivo de
            hacerlos más eficientes, eliminar acciones que no agregan valor, así
            como también hacerlos accesibles a todos los integrantes del equipo.
            La mejora de los procesos de gestión se traduce directamente en la
            optimización de los costos y en una mejor experiencia del cliente
            interno y externo.<br/><br/><br/>
            </p>
       </div>
       <FormServices/>
    </div>
  
)}
