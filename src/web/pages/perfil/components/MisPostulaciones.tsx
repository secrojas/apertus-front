import style from '../Perfil.module.css'
import { usePostulaciones } from '../../../hooks/usePostulaciones';
import { JobsCard } from '../../../../components/JobsCard';
import { useNavigate } from 'react-router-dom';


export const MisPostulaciones = () => {

 const  {postulante} = usePostulaciones();
 const navigate = useNavigate();


  return (
<div className={style['container-postulaciones']} style={{paddingTop:'15px'}} >
  <div className={style.postulaciones} >
          {
            postulante?.postulaciones.map( (job,indx) =>(
              <div 
              key={indx}
              onClick={e=>navigate(`/postulaciones/postulacion?id=${job._id}`)}
              style={{cursor:'pointer', textAlign:'left'}}
            >
              <JobsCard data={job} />
                      
             </div> 
            ))
          }
        </div>
</div>
  )
} 
