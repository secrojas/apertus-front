import { useEffect } from 'react';
import style from '../servicios.module.css'
import { FormServices } from './FormServices';


export const ProgramasDeCapacitacion =()=>{

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    return(
    <div className={style.contenedor} >
        <div className={style.detalle} >
            <h1 className='wow animate__animated animate__fadeInUp' >Programas de Capacitación</h1><br/><br/>
            <p>
                Trabajamos en la construcción de equipos de alto rendimiento a través
            de distintos programas de formación dirigidos a mandos medios
            como a niveles operativos de la organización.<br/><br/>
            Dichos programas incluyen la formación en herramientas de liderazgo,
            gestión del conflicto, comunicación asertiva, coaching, gestión del
            desempeño, gestión por indicadores, entre otras. Dichos programas se orientan a la profesionalización de los colaboradores de cada compañía. Por otra parte la conformación de un equipo interdisciplinario nos permite abordar programas de corta, mediana y larga duración tanto en temáticas Soft como en aspectos técnicos.<br/><br/>
            Todas las capacitaciones se realizan a medida de la necesidad y estado de situación de cada organización, siendo el diagnóstico nuestro puntapié inicial.
            </p>
        </div>
        <FormServices/>
    </div>
  
)}