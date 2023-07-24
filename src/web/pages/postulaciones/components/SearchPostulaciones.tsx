import style from '../css/searchPostulaciones.module.css';
import { JobsCard } from '../../../components';
import { Buscador1 } from './Buscador1';
import { Paginator } from './Paginator';
import { useSearch } from '../../../hooks/useSearch';
import { useNavigate } from 'react-router-dom';
import { Filtro } from './Filtro';
import { Buscador2 } from './Buscador2';


export const SearchPostulaciones = () => {

    const navigate = useNavigate(); 

    const {currentJobs , jobs } = useSearch();

  return (
    <div className={style.contenedor} > 
        <div className={style['layout-up']}>
            <Buscador1/>
        </div>
        <div className={style['layout-down']}>
            <div className={style['layout-down--left']} >
                <Buscador2/>
            </div>
            <div className={style['layout-down--right']} >
                <div className={style['layout-down--right-1']} > 
                    <p> Total: <b>{jobs.length}</b> Trabajos</p>
                    <div className={style.sortBy}>
                        <Filtro name='Ordenar por' data={['Primeros','Ultimos']} />
                    </div>
                </div> 
                <div className={style['layout-down--right-2']} >
                {
                    currentJobs().map((job,indx)=>(
                    
                        
                    <div 
                            key={indx}
                            onClick={e=>navigate(`/postulaciones/postulacion?id=${job._id}`,{state:{id:job._id}})}
                            style={{cursor:'pointer'}}
                    >
                            <JobsCard data={job} />
                    </div> 
                    
                    )) 
                } 
                </div>
                <div className={style['layout-down--right-3']} >
                    <Paginator/>
                </div>
            </div>
        </div>
    </div>
  )
}
