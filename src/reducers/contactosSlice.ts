import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables'
import { AppDispatch } from '../store/store';
import { toast } from 'react-toastify';

interface Contacto {
 _id:string,
 nombre:string,
 email:string,
 tel:string,
 localidad:string,
 consultas:[]
}

const contactosSlice = createSlice({
  name: 'contactos',
  initialState: [{} as Contacto],
  reducers: {
   contactos:(state, action)=>{
    return action.payload
   }
  }
})

export const { contactos } = contactosSlice.actions
export default contactosSlice.reducer


export const getContactos = (token:string)=>{

    const { VITE_API_URL } = getEnvVariables()
    
    return (dispatch:AppDispatch)=>{
  
      axios.get(`${VITE_API_URL}/contactos/getContactos`, { headers: { 'x-token':token } })
           .then(({data})=>{
            dispatch(contactos(data.contactos))
           }) 
           .catch(error=>{
            console.log(error)
           })
    }
  
  
  
  }




