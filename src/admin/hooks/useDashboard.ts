import { useAppSelector, useAppDispatch } from '../../reducers/hooks/useRedux';
import { useEffect } from 'react';
import { getCandidatos } from '../../reducers/candidatoSlice';



export const useDashboard = ()=>{
    
  const dispatch = useAppDispatch();
  const token = sessionStorage.getItem('token')

  const {jobs} = useAppSelector(state=>state.jobSlice)
  const {user} = useAppSelector(state=>state.authSlice)
  const { candidatoSlice } = useAppSelector(state=>state)
  const { contactosSlice } = useAppSelector(state=>state)

  const cantJobs = jobs.length;
  const cantCandidatos = candidatoSlice.length
  const cantContactos = contactosSlice.length

 
  useEffect(() => {
    token && dispatch(getCandidatos(token));
  }, [])
  
  const cantPost = candidatoSlice.reduce((prev,user)=> prev = prev + user.postulaciones?.length ,0) | 0;


    return {
        user,
        cantPost,
        cantJobs,
        cantCandidatos,
        cantContactos
    }
}