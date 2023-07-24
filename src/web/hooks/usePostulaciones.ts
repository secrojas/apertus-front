import { useAppSelector, useAppDispatch } from '../../reducers/hooks/useRedux';
import { useEffect, useState } from 'react';
import { startgetJobs, startSalirDePostulacion, startSavePostulante } from '../../reducers/jobSlice';
import { getCandidatos } from '../../reducers/candidatoSlice';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';




export const usePostulaciones = ()=>{  

    const navigate = useNavigate();
    const { jobs } = useAppSelector(state => state.jobSlice)
    const {status, user} = useAppSelector(state=>state.authSlice)
    const { candidatoSlice } = useAppSelector(state => state)
    
    const [isPost, setIsPost] = useState(false)
    
    
    const dispatch = useAppDispatch();
    const token = sessionStorage.getItem('token')
    const jobsDefault = [];

    const param = useLocation().search.slice(4);
    const job  = jobs.find(job=>job._id===param)
    const postulante = candidatoSlice.find(postulante => postulante.email === user.email);
 
  
    useEffect(() => {
      dispatch(startgetJobs())
      token &&  dispatch(getCandidatos(token))
    }, [])

    useEffect(() => {
    const findPostulante = job?.postulantes.find(postulante => postulante.email === user.email);
    findPostulante === undefined ? setIsPost(true) : setIsPost(false)
    }, [token])
    

    

    if(jobs.length<6){
      for (let index = 0; index < 6-jobs.length; index++) {
        jobsDefault.push(1);
      }
    }

    const enviarPostulacion = (id:string)=>{

      if(status==='not-auth'){
        document.getElementById('element')?.setAttribute('class','ov-h');
        Swal.fire({
            
          text:'Para poder postularte debes estar registrado.',
          confirmButtonText: 'Ingresar',
          confirmButtonColor:'black',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          customClass:{
            container:'swal'
          }
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {replace:true});
          }
           document.getElementById('element')?.removeAttribute('class');
          
        })
      }else{

        if(user.cv.trim().length===0){
          document.getElementById('element')?.setAttribute('class','ov-h');
          Swal.fire({
            text:'Para poder postularte debes ingresar un CV',
            confirmButtonText: 'Cargar CV',
            confirmButtonColor:'black',
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/perfil/data', {replace:true});
            }
              document.getElementById('element')?.removeAttribute('class');

          })
        }

      }
      
      if(status==='auth' && user.cv.trim().length!==0){
        toast.info('Aguarde')
        token &&  dispatch(startSavePostulante(id,token))
      }

    }

    const salirDePostulacion = (id:string)=>{
      toast.info('Aguarde');
      token && dispatch(startSalirDePostulacion(id,token))
    }


return{
    postulante,
    isPost,
    job,
    user,
    jobs,
    jobsDefault,
    enviarPostulacion,
    salirDePostulacion
}

}