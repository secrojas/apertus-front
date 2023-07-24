import { JobsCard } from "../../../components"
import swiper from  '../../../../assets/imgs/jobs/swiper.svg'
import triangle from '../../../../assets/imgs/theme/service-arrow.png'
import { usePostulaciones } from '../../../hooks/usePostulaciones';
import { useNavigate } from "react-router-dom";


export const SectionPostulaciones = () => {

  const navigate = useNavigate();

  const {jobs , jobsDefault} =  usePostulaciones(); 
 
  return (
    <div className='postulaciones-container'>
            <div className='postulaciones-title'>
                <img className='postulaciones-triangle' src={triangle} alt='triangulo'></img>
                <h2 className="section-title text-center  wow animate__animated animate__fadeInUp">Búsquedas Vigentes</h2>
            </div>
            <span className='postulaciones-desc' style={{fontWeight:600}} >La bolsa de trabajo para contratar profesionales creativos</span>
            <div className='postulacionces-content'>
              {
                jobs.map((job,indx)=>{
                  if(indx<6){
                     
                     return <div 
                              key={indx}
                              onClick={e=>navigate(`/postulaciones/postulacion?id=${job._id}`,{state:{id:job._id},replace:true})}
                              style={{cursor:'pointer'}}
                            >
                              <JobsCard data={job} />
                            </div> 
                  } 
                }) 
              } 
              {
               jobsDefault.map((job,indx)=>( <JobsCard key={indx} /> ))
              }
            </div>
            <div className='postulaciones-swipers'>
                <div className='swipers-container'>
                  <img alt='swiper' src={swiper}/>
                  <img alt='swiper' src={swiper}/>
                  <img alt='swiper' src={swiper}/>
                  <img alt='swiper' src={swiper}/>
                  <img alt='swiper' src={swiper}/>
                </div>
            </div>
        </div>
  )
}
