import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'
import { getEnvVariables } from '../helpers/getEnvVariables'
import { AppDispatch } from '../store/store'



const globalSlice = createSlice({
  name: 'global',
  initialState: {

    isInView:false,
    config:{
      logo:'logo',
      linkedin:'linkedin',
      instagram:'instagram',
      whatsapp:'whatsapp',
      emailAdmin:'correo',
      emailServicio:'correo'
    }

  },
  reducers: {
      
    isInView:(state,action)=>{
        return{
            ...state,
            isInView:action.payload
        }
    },
    loadConfig:(state,action)=>{
      return{
        ...state,
        config:action.payload
      }
    },
    setConfig:(state,action)=>{
      const{ name, value }=action.payload
      return{
        ...state,
        config:{
          ...state.config,
          [name]:value
        }
        
      }
    }

  }
})

export const { isInView, loadConfig, setConfig  } = globalSlice.actions
export default globalSlice.reducer


export const getConfig = ()=>{

  const { VITE_API_URL } = getEnvVariables()
  
  return (dispatch:AppDispatch)=>{

    axios.get(`${VITE_API_URL}/config/getConfig`)
         .then(({data})=>{
          dispatch(loadConfig(data.config))
         }) 
         .catch(error=>{
          console.log(error)
         })
  }

}

export const startSaveChangesConfig = (body:{}, token:string)=>{
  const { VITE_API_URL } = getEnvVariables()
  
  return (dispatch:AppDispatch)=>{

      axios
      .post(`${VITE_API_URL}/config/setConfig`, body, { headers: { 'x-token':token }})
      .then(({data})=>{
        const {msg,token} = data
       toast.success(msg);
       sessionStorage.setItem('token',token);
      })
      .catch(({response})=>{
        console.log(response)
      })
      
  
    }
}


export const startSetLogoApertus = (body:FormData,token:string)=>{
  
  const { VITE_API_URL } = getEnvVariables()

  return(dispatch:AppDispatch)=>{
      
    axios
    .post(`${VITE_API_URL}/config/setLogoApertus`, body, { headers: { 'x-token':token }})
    .then(({data})=>{
     
    sessionStorage.setItem('token',token);
     toast.success(data.msg)
    })
    .catch(({response})=>{
      console.log(response);
      toast.error(response.data.msg)
    })
    

  }
}
