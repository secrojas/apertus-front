import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from '../store/store';
import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';
import { toast } from "react-toastify";

interface Postulacion {
  _id:string
  logo?:string,
  titulo:string,
  compania:string, 
  disponibilidad:string,
  locacion:string,
  tiempo?:string,
  descShort:string,
  tipo:string,
}


interface Candidato {
 
  nombre:string,
  email:string,
  tel:string,
  cv:string,
  localidad?:string,
  foto:string,
  perfil:string 
  postulaciones:Postulacion[],
}

const candidatoSlice = createSlice({
  name: 'candidato',
  initialState:[ {} as Candidato ],
  reducers: {
    loadCandidatos:(state, action)=>{
        return action.payload
    }

    
  }
})

export const { loadCandidatos } = candidatoSlice.actions
export default candidatoSlice.reducer


export const getCandidatos = (token:string)=>{

  const { VITE_API_URL } = getEnvVariables()
  
  return (dispatch:AppDispatch)=>{

    axios.get(`${VITE_API_URL}/users/getCandidatos`, { headers: { 'x-token':token } })
         .then(({data})=>{
          const{candidatos} = data
          dispatch(loadCandidatos(candidatos))
         }) 
         .catch(error=>{
          console.log(error)
         })
  }



}

export const sendEmailPostulante = (body:FormData,reset:any)=>{
  
  const { VITE_API_URL } = getEnvVariables()
  
  return (dispatch:AppDispatch)=>{
    
  
      axios
      .post(`${VITE_API_URL}/email/newUser`, body)
      .then(({data})=>{
       toast.success(data.msg)
       reset();
      })
      .catch(({response})=>{
        // console.log(response)
        toast.error(response.data.msg)
      })
      
  
    }
  }

  export const sendEmailContratarServicio = (body:{},reset:any)=>{
  
    const { VITE_API_URL } = getEnvVariables()
    
    return (dispatch:AppDispatch)=>{
      
    
        axios
        .post(`${VITE_API_URL}/email/newContacto`, body)
        .then(({data})=>{
         toast.success(data.msg)
         reset();
        })
        .catch(({response})=>{
          toast.error(response.data.msg)
        })
        
    
      }
    }


  export const sendEmailConsulta = (body:{},reset:any)=>{

    const { VITE_API_URL } = getEnvVariables()
    
    return (dispatch:AppDispatch)=>{
      
    
        axios
        .post(`${VITE_API_URL}/email/consultas`, body)
        .then(({data})=>{
          toast.success(data.msg)
          reset();
        })
        .catch(({response})=>{
          toast.error(response.data.msg)
        })
        
    
      }
    }
    

 