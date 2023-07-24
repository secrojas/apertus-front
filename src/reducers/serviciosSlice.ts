import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables'
import { AppDispatch } from '../store/store';
import { toast } from 'react-toastify';

interface Servicio{
  servicio:string
}

const serviciosSlice = createSlice({
  name: 'servicios',
  initialState: {  } as Servicio,
  reducers: {
    service:(state,action)=>{
      return {
        ...state,
        servicio:action.payload
      }
    }
  }
})

export const { service } = serviciosSlice.actions
export default serviciosSlice.reducer



export const startSendContacto = (form:{},reset:()=>void)=>{

    const { VITE_API_URL } = getEnvVariables()
    
    return (dispatch:AppDispatch)=>{

      axios
      .post(`${VITE_API_URL}/contactos/consultaServicio`, form)
      .then(({data})=>{
       const {msg} = data
       toast.success(msg);
       reset();
      })
      .catch(({response})=>{
        console.log(response)
        toast.error(response.data.msg)
      })
      
    }
    
  }
