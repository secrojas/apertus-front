import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from '../store/store';
import  axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';
import { toast } from 'react-toastify';



const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status:'checking',
    user:{
      id:'',
      nombre:'',
      token:'',
      rol:'',
      foto:'',
      email:'',
      tel:'',
      cv:'',
      localidad:'',
      provincia:'',
      pais:''
    },
    form:{
      nombre:'',
      email:'',
      localidad:'',
      provincia:'',
      pais:'',
      password:'',
      password2:''
     }
  },
  reducers: {
      init:(state)=>{
        return {
          status:'checking',
          user:{
            id:'',
            nombre:'',
            token:'',
            rol:'',
            foto:'',
            email:'',
            tel:'',
            cv:'',
            localidad:'',
            provincia:'',
            pais:''
              },
          form:{
            nombre:'',
            email:'',
            localidad:'',
            provincia:'',
            pais:'',
            password:'',
            password2:''
          }
        }
      },
     formLogin:(state,action)=>{
      const {name,value} = action.payload
      return{
        ...state,
        ['form']:{
          ...state['form'],
          [name]:value
        }
      }
     },
     login:(state,action)=>{
   
      return {
        ...state,
        ['user']:{
          ...action.payload
        },
        'status': "auth"
      }
     },
     logout:(state)=>{
      return{
        ...state,
        'status': "not-auth"
      }
     },
     resetForm:(state)=>{
      return{
        ...state,
        form:{
          nombre:'',
          email:'',
          localidad:'',
          provincia:'',
          pais:'',
          password:'',
          password2:''
        }
      }
     }
  }
})

export const {  formLogin ,login, logout , resetForm ,init} = authSlice.actions
export default authSlice.reducer


export const startLogout= ()=>{

  return (dispatch:AppDispatch)=>{
    sessionStorage.removeItem('token');
    dispatch(init());
    dispatch(logout());
  }
}

export const startLogin = (email:string,password:string)=>{
    
  const { VITE_API_URL } = getEnvVariables()
  toast.info('Enviando Formulario. Aguarde')
  
  return (dispatch:AppDispatch)=>{
    axios
    .post(`${VITE_API_URL}/auth/`,{
      email,
      password
    })
    .then(({data})=>{
      const {uid , nombre, token, rol, foto, email,tel,cv,localidad,provincia,pais} = data 

      dispatch(login({
        id:uid,
        nombre,
        token,
        rol,
        foto,
        email,
        tel,
        cv,
        localidad,
        provincia,
        pais
      }));
      sessionStorage.setItem('token',token);
    })
    .catch(({response})=>{
      toast.error(response.data.msg)
    })

  }

}

export const startRegister = (nombre:string , email: string , password : string, localidad:string)=>{
  
  const { VITE_API_URL } = getEnvVariables()
  toast.info('Enviando Formulario. Aguarde')

  return (dispatch:AppDispatch)=>{
    
    axios
    .post(`${VITE_API_URL}/auth/new`,{
      nombre,
      email,
      localidad,
      password
    })
    .then(({data})=>{
      const {uid , nombre, token ,rol,foto, email,tel,cv,localidad,provincia,pais} = data

      dispatch(login({
        id:uid,
        nombre,
        token,
        rol,
        foto,
        email,
        tel,
        cv,
        localidad,
        provincia,
        pais
      }))
      sessionStorage.setItem('token',token);
    })
    .catch(({response})=>{
      toast.error(response.data.msg)
    })
    

  }
}

export const revalidarToken = (token:string)=>{

  const { VITE_API_URL } = getEnvVariables()
  
  return (dispatch:AppDispatch)=>{

    axios.get(`${VITE_API_URL}/auth/renew`, { headers: { 'x-token':token } })
         .then(({data})=>{
          const{uid,nombre,token,rol,foto,email,tel,cv,localidad,provincia,pais}=data
          
          dispatch(login({
            id:uid,
            nombre,
            token,
            rol,
            foto,
            email,
            tel,
            cv,
            localidad,
            provincia,
            pais
          }))
          sessionStorage.setItem('token',token);
         }) 
         .catch(error=>{
          if(error.response.data.ok===false){
            sessionStorage.removeItem('token')
          }
         })
  }

}

export const revalidarToken5m = (token:string)=>{

  const { VITE_API_URL } = getEnvVariables()
  
  return (dispatch:AppDispatch)=>{

    axios.get(`${VITE_API_URL}/auth/renew5m`, { headers: { 'x-token':token } })
         .then(({data})=>{
          const {token} = data;
          sessionStorage.setItem('token',token);
          toast.success('OK. Puedes cambiar tu password')
         }) 
         .catch(error=>{
          if(error.response.data.ok===false){
          toast.error('el Token ha expirado, vuelve a Reset Password ')
          }
         })
  }

}



export const startResetPassword = ( email: string )=>{
  
  const { VITE_API_URL } = getEnvVariables()
  toast.info('Enviando Formulario. Aguarde')

  return (dispatch:AppDispatch)=>{
    
    axios
    .post(`${VITE_API_URL}/auth/reset`,{ email })
    .then(({data})=>{
      toast.success(data.msg)
      dispatch(resetForm())
    })
    .catch(({response})=>{
      toast.error(response.data.msg)
    })
    

  }
}


export const startChangePassword = ( password:string , token:string )=>{
  
  const { VITE_API_URL } = getEnvVariables()
  toast.info('Enviando Formulario. Aguarde')

  return (dispatch:AppDispatch)=>{
    
    axios
    .post(`${VITE_API_URL}/auth/changePassword`, { password }, { headers: { 'x-token':token } } )
    .then(({data})=>{
      toast.success('Contraseña actualizada')
      dispatch(resetForm())
      const{uid,nombre,token,rol,foto,email,tel,cv, localidad, provincia, pais}=data
          dispatch(login({
            id:uid,
            nombre,
            token,
            rol,
            foto,
            email,
            tel,
            cv,
            localidad,
            provincia,
            pais
          }))
          sessionStorage.setItem('token',token);
    })
    .catch(({response})=>{
      toast.error(response.data.msg)
    })
    

  }
}

export const startSetPhotoPerfil = (body:FormData,token:string)=>{
  
  const { VITE_API_URL } = getEnvVariables()

  return(dispatch:AppDispatch)=>{
      
    axios
    .post(`${VITE_API_URL}/users/setPhoto`, body, { headers: { 'x-token':token }})
    .then(({data})=>{
      const{uid,nombre,token,rol,foto,email,tel,cv, localidad, provincia, pais}=data
    
      dispatch(login({
        id:uid,
        nombre,
        token,
        rol,
        foto,
        email,
        tel,
        cv,
        localidad,
        provincia,
        pais
      }))
    sessionStorage.setItem('token',token);
     toast.success(data.msg)
    })
    .catch(({response})=>{
      toast.error(response.data.msg)
    })
    

  }
}

export const startSetCV = (body:FormData,token:string)=>{
  
  const { VITE_API_URL } = getEnvVariables()

  return(dispatch:AppDispatch)=>{
      
    axios
    .post(`${VITE_API_URL}/users/setCV`, body, { headers: { 'x-token':token }})
    .then(({data})=>{
      const{uid,nombre,token,rol,foto,email,tel,cv, localidad, provincia, pais}=data
      dispatch(login({
        id:uid,
        nombre,
        token,
        rol,
        foto,
        email,
        tel,
        cv,
        localidad,
        provincia,
        pais
      }))
     toast.success(data.msg)
     sessionStorage.setItem('token',token);
    })
    .catch(({response})=>{
      toast.error(response.data.msg)
    })
    

  }
}

export const startSetPerfilData = (body:{nombre:string,email:string,tel:string,localidad:string, provincia:string,pais:string},token:string)=>{
  
  const { VITE_API_URL } = getEnvVariables()

  return(dispatch:AppDispatch)=>{
      
    axios
    .post(`${VITE_API_URL}/users/setPerfilData`, body, { headers: { 'x-token':token }})
    .then(({data})=>{
      const{id,nombre,token,rol,foto,email,tel,cv, localidad, provincia, pais}=data
      dispatch(login({
        id,
        nombre,
        token,
        rol,
        foto,
        email,
        tel,
        cv,
        localidad,
        provincia,
        pais
      }))
     toast.success(data.msg)
     sessionStorage.setItem('token',token);
    })
    .catch(({response})=>{
      toast.error(response.data.msg)
    })
    

  }
}


export const ChangePasswordManual = (body:{currentPassword:string,newPassword:string},token:string,reset:()=>void)=>{
  
  const { VITE_API_URL } = getEnvVariables()

  return(dispatch:AppDispatch)=>{
      
    axios
    .post(`${VITE_API_URL}/auth/changePasswordManual`, body, { headers: { 'x-token':token }})
    .then(({data})=>{
      const{id,nombre,token,rol,foto,email,tel, cv , msg , localidad, provincia, pais}=data
      dispatch(login({
        id,
        nombre,
        token,
        rol,
        foto,
        email,
        tel,
        cv,
        localidad,
        provincia,
        pais
      }))
      sessionStorage.setItem('token',token);
      toast.success(msg);
      reset();
    })
    .catch(({response})=>{
      toast.error(response.data.msg)
    })
    

  }
}
