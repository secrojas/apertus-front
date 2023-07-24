import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { startSaveCategory, startgetCategories, startdeleteCategory} from '../../reducers/jobSlice';
import { useAppDispatch, useAppSelector } from '../../reducers/hooks/useRedux';

interface Category {
    _id:string,
    nombre:string,
    status:string, 
    descripcion:string
  }


export const useCategories = ()=>{

    const token = sessionStorage.getItem('token')
    const {categories} = useAppSelector(state => state.jobSlice)

    const dispatch = useAppDispatch();

    const [id, setId] = useState('')

    const [nombre, setNombre] = useState('')
    const [status, setStatus] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const [copiaCategories, setcopiaCategories] = useState([] as Category[])

    const [isNombre, setIsNombre] = useState(true)
    const [isStatus, setIsStatus] = useState(true)
    const [isDesc, setIsDesc] = useState(true)
    const [isOk, setIsOk] = useState(false)

    useEffect(() => {
        dispatch(startgetCategories());
    }, [])
    
    useEffect(() => {
        console.log('bug')
        setcopiaCategories(categories)
    }, [categories])


    const reset = ()=>{
        setId('')
        setStatus('')
        setNombre('');
        setDescripcion('')
        setIsNombre(true)
        setIsStatus(true)
    }
      
    const isValid = ()=>{
        
        let valid = true;
        valid =  nombre === '' || status === '' ||  descripcion === '' ? false : true
        
        nombre === '' ? setIsNombre(false) : setIsNombre(true)
        status === '' ? setIsStatus(false) : setIsStatus(true)
        descripcion === '' ? setIsDesc(false) : setIsDesc(true)
        return valid
    }

    const showData =(indx:number)=>{
        const category = categories[indx]
        setId(category._id)
        setNombre(category.nombre)
        setStatus(category.status)
        setDescripcion(category.descripcion)
        
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
               token  &&  dispatch(startdeleteCategory(id, token, reset))
            }
          })


    }

    const filter =(e: React.ChangeEvent<HTMLInputElement>)=>{
        let value = e.target.value;
        const res = categories.filter(({nombre , descripcion, status})=> {
            return nombre.toLowerCase().includes(value) || descripcion.toLowerCase().includes(value) || status.toLowerCase().includes(value) 
        })
        setcopiaCategories(res);
        
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
                    }
                   token  &&  dispatch(startSaveCategory(body, token, reset))
                }
              })
            
        }else{
            toast.error('Complete los campos requeridos')
            setIsOk(true);
        }

    }



return {
    id,
    showData,
    copiaCategories,
    nombre,
    status,
    descripcion,
    isNombre,
    isStatus,
    isDesc,
    reset,
    deleteData,
    onChange,
    onSubmit,
    isOk,
    filter
}

}