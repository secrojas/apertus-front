import { createSlice } from '@reduxjs/toolkit'
import { getEnvVariables } from '../helpers/getEnvVariables';
import { AppDispatch } from '../store/store';
import axios from 'axios';
import { Buscador } from '../components/Buscador';

interface User{
    _id:string,
    nombre:string,
    rol:string,
    foto:string,
    email:string,
    tel:string,
    cv:string
  }

interface Job {
    _id:string,
    categoria:string,
    compania:string,
    tecnologia:string,
    descShort:string,
    descLarge:string,
    disponibilidad:string
    locacion:string,
    salario:string,
    status:string,
    tipo:string,
    titulo:string,
    postulantes: User[]  
}
interface Check {
  [x:string]:boolean
}
interface Buscador2 {
  [x:string]: Check
}

interface Buscador{
  [x:string]: string
}
 


const searchSlice = createSlice({
  name: 'search',
  initialState: {
    totalJobs:[{} as Job],
    filtroJobs:[{} as Job ],
    buscador:{
      'Disponibilidad': '',
      'Ubicación':'',
      'Tipo':'',
      'Salario':''
    } as Buscador,
    buscador2:{
      'Tecnologías':{} as Check ,
      'Categorías':{} as Check,
      'Empresas':{} as Check
    } as Buscador2 ,
    pagination:{
      currentPage:0, 
      page:1
    }
    },
  reducers: {
    resetBuscador:(state)=>{
      return{
        ...state,
        buscador:{
          'Disponibilidad': '',
          'Ubicación':'',
          'Tipo':'',
          'Salario':''
        },
        buscador2:{
              'Tecnologías':{} as Check,
              'Categorías':{} as Check ,
              'Empresas':{} as Check
            }
      }
    },
    getJobs:(state,action)=>{ 
        return{
            ...state,
            totalJobs:action.payload,
            filtroJobs:action.payload,
        }
    },
    filter:(state,action)=>{
      return{
        ...state,
        filtroJobs:action.payload
      }
    },
    updateBuscador:(state,action)=>{
      return{
        ...state,
        buscador:{
          ...state.buscador,
          ...action.payload
        }
      }
    },
    updateBuscador2:(state,action)=>{
      return{
        ...state,
        buscador2:{
          ...state.buscador2,
          ...action.payload
        }
      }
    },
    setCurrentPage:(state,action)=>{
      return {
        ...state,
        pagination:{
          ...state.pagination,
          currentPage: state.pagination.currentPage + action.payload
        }
      }
    },
    setPage:(state,action)=>{
      return{
        ...state,
        pagination:{
          ...state.pagination,
          page: state.pagination.page + action.payload
        }
      }
    }
  }
})

export const { getJobs, filter, updateBuscador , setCurrentPage , setPage  , resetBuscador , updateBuscador2 } = searchSlice.actions
export default searchSlice.reducer

export const startgetJobs = ()=>{

    const { VITE_API_URL } = getEnvVariables()
    
    return (dispatch:AppDispatch)=>{
  
      axios.get(`${VITE_API_URL}/jobs/getJobs`,)
           .then(({data})=>{
            dispatch(getJobs(data.jobs))
           }) 
           .catch(error=>{
            console.log(error)
           })
    }
  
  }

