import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from '../store/store';
import axios from 'axios';
import { toast } from "react-toastify";
import { getEnvVariables } from '../helpers/getEnvVariables';

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

interface Category {
  _id:string,
  nombre:string,
  status:string,
  descripcion:string
}
interface Technology {
  _id:string,
  nombre:string,
  status:string,
  descripcion:string
}

interface Company {
  _id:string,
  nombre:string,
  ubicacion:string,
  descripcion:string,
  status:string,
  logo:string,
}

const jobSlice = createSlice({
  name: 'job',
  initialState:{
    jobs:[{} as Job],
    categories:[{} as Category],
    technologies:[{} as Technology],
    companies:[{} as Company]
  },
  reducers: {

    getJobs:(state,action)=>{
      return {
          ...state,
          jobs:action.payload
      }
    },

    getCategories:(state,action)=>{
      return {
         ...state,
         categories:action.payload
      }
    },

    getTechnologies:(state,action)=>{
      return {
        ...state,
        technologies:action.payload
      }
    },

    getCompanies:(state,action)=>{
      return {
        ...state,
        companies:action.payload
      }
    }
   
  }
})

export const { getJobs, getCategories, getTechnologies, getCompanies } = jobSlice.actions
export default jobSlice.reducer




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

export const startSendJob = (body:{},token:string,reset:()=>void)=>{
  
  const { VITE_API_URL } = getEnvVariables()
  
  return (dispatch:AppDispatch)=>{
    
  
      axios
      .post(`${VITE_API_URL}/jobs/setJobData`, body, { headers: { 'x-token':token }})
      .then(({data})=>{
       const {msg,token} = data
       toast.success(msg);
       sessionStorage.setItem('token',token);
       reset();
       dispatch(startgetJobs());
      })
      .catch(({response})=>{
        toast.error(response.data.msg)
      })
      
  
    }
  }

  export const startdeleteJob = (id:string,token:string,reset:()=>void)=>{
  
    const { VITE_API_URL } = getEnvVariables()
    
    return (dispatch:AppDispatch)=>{
      
    
        axios
        .post(`${VITE_API_URL}/jobs/deleteJob`, {id}, { headers: { 'x-token':token }})
        .then(({data})=>{
         const {msg,token} = data
         sessionStorage.setItem('token',token);
         toast.success(msg);
         reset();
         dispatch(startgetJobs());
        })
        .catch(({response})=>{
          toast.error(response.data.msg)
        })
        
    
      }
    }


    export const startSavePostulante = (id:string,token:string)=>{
  
      const { VITE_API_URL } = getEnvVariables()
      
      return (dispatch:AppDispatch)=>{
        
      
          axios
          .post(`${VITE_API_URL}/jobs/savePostulante`, {id}, { headers: { 'x-token':token }})
          .then(({data})=>{
           const {msg,token} = data
           sessionStorage.setItem('token',token);
           toast.success(msg);
           dispatch(startgetJobs());
          })
          .catch(({response})=>{
            toast.error(response.data.msg)
          })
          
      
        }
      }


      export const startSalirDePostulacion = (id:string,token:string)=>{
  
        const { VITE_API_URL } = getEnvVariables()
        
        return (dispatch:AppDispatch)=>{
          
        
            axios
            .post(`${VITE_API_URL}/jobs/salirDePostulacion`, {id}, { headers: { 'x-token':token }})
            .then(({data})=>{
             const {msg,token} = data
             sessionStorage.setItem('token',token);
             toast.success(msg);
             dispatch(startgetJobs());
            })
            .catch(({response})=>{
              toast.error(response.data.msg)
            })
            
        
          }
        }
      
    
        // CATEGORIAS *******************************************************

        export const startgetCategories = ()=>{

          const { VITE_API_URL } = getEnvVariables()
          
          return (dispatch:AppDispatch)=>{
        
            axios.get(`${VITE_API_URL}/jobs/getCategories`,)
                 .then(({data})=>{
                  dispatch(getCategories(data.categories))
                 }) 
                 .catch(error=>{
                  console.log(error)
                 })
          }
        
        
        
        }


        export const startSaveCategory = (body:{},token:string,reset:()=>void)=>{
  
          const { VITE_API_URL } = getEnvVariables()
          
          return (dispatch:AppDispatch)=>{
            
          
              axios
              .post(`${VITE_API_URL}/jobs/setCategoryData`, body, { headers: { 'x-token':token }})
              .then(({data})=>{
               const {msg,token} = data
               sessionStorage.setItem('token',token);
               toast.success(msg);
               reset();
               dispatch(startgetCategories());
              })
              .catch(({response})=>{
                toast.error(response.data.msg)
              })
              
          
            }
          }

          export const startdeleteCategory = (id:string,token:string,reset:()=>void)=>{
  
            const { VITE_API_URL } = getEnvVariables()
            
            return (dispatch:AppDispatch)=>{
              
            
                axios
                .post(`${VITE_API_URL}/jobs/deleteCategory`, {id}, { headers: { 'x-token':token }})
                .then(({data})=>{
                 const {msg,token} = data
                 sessionStorage.setItem('token',token);
                 toast.success(msg);
                 reset();
                 dispatch(startgetCategories());
                })
                .catch(({response})=>{
                  toast.error(response.data.msg)
                })
                
            
              }
            }
  

          // TECNOLOGIAS*****************************************************************



          export const startgetTechnologies = ()=>{

            const { VITE_API_URL } = getEnvVariables()
            
            return (dispatch:AppDispatch)=>{
          
              axios.get(`${VITE_API_URL}/jobs/getTechnologies`,)
                   .then(({data})=>{
                    dispatch(getTechnologies(data.technologies))
                   }) 
                   .catch(error=>{
                    console.log(error)
                   })
            }
          
          
          
          }
  
  
          export const startSaveTechnology = (body:{},token:string,reset:()=>void)=>{
    
            const { VITE_API_URL } = getEnvVariables()
            
            return (dispatch:AppDispatch)=>{
              
            
                axios
                .post(`${VITE_API_URL}/jobs/setTechnologyData`, body, { headers: { 'x-token':token }})
                .then(({data})=>{
                 const {msg,token} = data
                 sessionStorage.setItem('token',token);
                 toast.success(msg);
                 reset();
                 dispatch(startgetTechnologies());
                })
                .catch(({response})=>{
                  toast.error(response.data.msg)
                })
                
            
              }
            }
  
            export const startdeleteTechnology = (id:string,token:string,reset:()=>void)=>{
    
              const { VITE_API_URL } = getEnvVariables()
              
              return (dispatch:AppDispatch)=>{
                
              
                  axios
                  .post(`${VITE_API_URL}/jobs/deleteTechnology`, {id}, { headers: { 'x-token':token }})
                  .then(({data})=>{
                   const {msg,token} = data
                   sessionStorage.setItem('token',token);
                   toast.success(msg);
                   reset();
                   dispatch(startgetTechnologies());
                  })
                  .catch(({response})=>{
                    toast.error(response.data.msg)
                  })
                  
              
                }
              }
    

          // COMPANIAS**************************************************************************

          export const startgetCompanies = ()=>{

            const { VITE_API_URL } = getEnvVariables()
            
            return (dispatch:AppDispatch)=>{
          
              axios.get(`${VITE_API_URL}/jobs/getCompanies`,)
                   .then(({data})=>{
                    dispatch(getCompanies(data.companies))
                   }) 
                   .catch(error=>{
                    console.log(error)
                   })
            }
          
          
          
          }
  
  
          export const startSaveCompany = (body:{},token:string,reset:()=>void)=>{
    
            const { VITE_API_URL } = getEnvVariables()
            
            return (dispatch:AppDispatch)=>{
              
            
                axios
                .post(`${VITE_API_URL}/jobs/setCompanyData`, body, { headers: { 'x-token':token }})
                .then(({data})=>{
                 const {msg,token} = data
                 sessionStorage.setItem('token',token);
                 toast.success(msg);
                 reset();
                 dispatch(startgetCompanies());
                })
                .catch(({response})=>{
                  toast.error(response.data.msg)
                })
                
            
              }
            }
  
            export const startdeleteCompany = (id:string,token:string,reset:()=>void)=>{
    
              const { VITE_API_URL } = getEnvVariables()
              
              return (dispatch:AppDispatch)=>{
                
              
                  axios
                  .post(`${VITE_API_URL}/jobs/deleteCompany`, {id}, { headers: { 'x-token':token }})
                  .then(({data})=>{
                   const {msg,token} = data
                   sessionStorage.setItem('token',token);
                   toast.success(msg);
                   reset();
                   dispatch(startgetCompanies());
                  })
                  .catch(({response})=>{
                    toast.error(response.data.msg)
                  })
                  
              
                }
              }

              export const startSetLogoCompany = (body:FormData,token:string)=>{
    
                const { VITE_API_URL } = getEnvVariables()
                
                return (dispatch:AppDispatch)=>{
                  
                
                    axios
                    .post(`${VITE_API_URL}/jobs/setLogoCompany`, body, { headers: { 'x-token':token }})
                    .then(({data})=>{
                     const {msg,token} = data
                     sessionStorage.setItem('token',token);
                     toast.success(msg);
                     dispatch(startgetCompanies());
                    })
                    .catch(({response})=>{
                      toast.error(response.data.msg)
                    })
                    
                
                  }
                }



              