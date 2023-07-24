import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

import { useAppDispatch, useAppSelector } from '../../reducers/hooks/useRedux';
import { startdeleteCompany, startgetCompanies, startSaveCompany, startSetLogoCompany } from '../../reducers/jobSlice';


interface Company {
    _id:string,
    nombre:string,
    ubicacion:string,
    descripcion:string,
    status:string,
    logo:string,
  }


export const useCompanies = ()=>{

    const token = sessionStorage.getItem('token')
    const {companies} = useAppSelector(state => state.jobSlice)

    const dispatch = useAppDispatch();

    const [id, setId] = useState('')

    const [nombre, setNombre] = useState('')
    const [status, setStatus] = useState('')
    const [ubicacion, setUbicacion] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [logo, setLogo] = useState('')

    const [copiaCompany, setCopiaCompany] = useState([] as Company[])
  
    const [isNombre, setIsNombre] = useState(true)
    const [isStatus, setIsStatus] = useState(true)
    const [isUbicacion, setIsUbicacion] = useState(true)
    const [isDesc, setIsDesc] = useState(true)
    const [isOk, setIsOk] = useState(false)

    useEffect(() => {
        dispatch(startgetCompanies());
    }, [])

    useEffect(() => {
        setCopiaCompany(companies);
    }, [companies])

    useEffect(() => {
      let company = companies.find(com => com._id == id)
       company && setLogo(company.logo)
    }, [token])
    
  


    const reset = ()=>{
        setId('')
        setStatus('')
        setNombre('');
        setDescripcion('');
        setUbicacion('');
        setLogo('')
        setIsNombre(true)
        setIsStatus(true)
        setIsDesc(true);
        setIsUbicacion(true);
    }
      
    const isValid = ()=>{
        
        let valid = true;
        valid =  nombre === '' || status === '' ||  descripcion === '' || ubicacion === '' ? false : true
        
        nombre === '' ? setIsNombre(false) : setIsNombre(true)
        status === '' ? setIsStatus(false) : setIsStatus(true)
        descripcion === '' ? setIsDesc(false) : setIsDesc(true)
        ubicacion === '' ? setIsUbicacion(false) : setIsUbicacion(true)
        return valid
    }

    const showData =(indx:number)=>{
        const company = companies[indx]
        setId(company._id)
        setNombre(company.nombre)
        setStatus(company.status)
        setDescripcion(company.descripcion)
        setUbicacion(company.ubicacion)
        setLogo(company.logo)
        
    }

    const deleteData = ()=>{
     
        Swal.fire({
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            },
            text: 'Borrar Datos?',
            showCancelButton: true,
            confirmButtonColor: 'black',
            cancelButtonColor: 'black',
            confirmButtonText: 'Si',
            cancelButtonText:'No'
          }).then((result) => {
            if (result.isConfirmed) {
               token  &&  dispatch(startdeleteCompany(id, token, reset))
            }
          })


    }

    const filter =(e: React.ChangeEvent<HTMLInputElement>)=>{
        let value = e.target.value;
        const res = companies.filter(({nombre , descripcion, ubicacion,  status})=> {
            return nombre.toLowerCase().includes(value) || descripcion.toLowerCase().includes(value) || status.toLowerCase().includes(value) || ubicacion.toLowerCase().includes(value)
        })
        setCopiaCompany(res);
        
    }

     
    const onChangeLogo =(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files !== null && e.target.files.length!==0){
      

            let body = new FormData();
     
            
             body.append('myLogoCompany', e.target.files[0] , e.target.files[0].name);
             body.append('id', id );
             
             if (token && e.target.files[0].name !==undefined){
                  dispatch(startSetLogoCompany(body,token))
             } 
     
           }
     }

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)=>{

        const name = e.target.name;
        const value = e.target.value;
        const length = value.trim().length
        
        switch (name) {
            case 'nombre':
               length === 0 ? setIsNombre(false) : setIsNombre(true) 
               length <= 50 && setNombre(value)
               return
            case 'ubicacion':
               length === 0 ? setIsUbicacion(false) : setIsUbicacion(true) 
               length <= 50 && setUbicacion(value)
            return
            case 'descripcion':
               length === 0 ? setIsDesc(false) : setIsDesc(true)
               length <= 250 && setDescripcion(value)
               return
            case 'status':
                length === 0 ? setIsStatus(false) : setIsStatus(true)
                return setStatus(value)
            default:
                break;
        }

    }


    const onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        
        if(isValid()){
            setIsOk(false)
            Swal.fire({
                showClass: {
                popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
                },
                text: 'Guardar Datos?',
                confirmButtonText: 'Si',
                cancelButtonText:'No',
                confirmButtonColor: 'black',
                cancelButtonColor: 'black',
                showCancelButton: true,
              }).then((result) => {
                if (result.isConfirmed) {

                    const body ={
                        id,
                        nombre,
                        status,
                        descripcion,
                        ubicacion
                    }
                   token  &&  dispatch(startSaveCompany(body, token, reset))
                }
              })
            
        }else{
            toast.error('Complete los campos requeridos')
            setIsOk(true)
        }

    }



return {
    id,
    logo,
    ubicacion,
    showData,
    copiaCompany,
    nombre,
    status,
    descripcion,
    isNombre,
    isStatus,
    isDesc,
    isUbicacion,
    reset,
    deleteData,
    onChange,
    onSubmit,
    onChangeLogo,
    isOk,
    filter,
}

}