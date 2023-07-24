import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { useAppDispatch, useAppSelector } from '../../reducers/hooks/useRedux';
import { startgetJobs, startSendJob, startdeleteJob, startgetCompanies, startgetCategories, startgetTechnologies } from '../../reducers/jobSlice';

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


export const useJobs = ()=>{

    const param = useLocation().search.slice(4);
    

    const {jobs} = useAppSelector(state=>state.jobSlice)

    const token = sessionStorage.getItem('token')

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(startgetJobs())
        dispatch(startgetCompanies())
        dispatch(startgetCategories())
        dispatch(startgetTechnologies())    
      }, [])

    useEffect(() => {
      const indx = jobs.findIndex(item => item._id === param)
      indx !== -1 && showJob(indx);
    }, [jobs])

    useEffect(() => {
        setCopiaJobs(jobs)
      }, [jobs])
    
      
    const [id, setId] = useState('')

    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('categoria')
    const [tecnologia, setTecnologia] = useState('tecnologia')
    const [compania, setCompania] = useState('compania')
    const [locacion, setLocacion] = useState('')
    const [salario, setSalario] = useState('')
    const [status, setStatus] = useState('')
    const [disponibilidad, setDisponibilidad] = useState('')
    const [tipo, setTipo] = useState('')
    const [descShort, setDescShort] = useState('')
    const [descLarge, setDescLarge] = useState('')
    const [postulantes, setPostulantes] = useState([] as User[]);

    const [copiaJobs, setCopiaJobs] = useState([] as Job[]);


    const [isTitulo, setIsTitulo] = useState(true)
    const [isCategoria, setIsCategoria] = useState(true)
    const [isTecnologia, setIsTecnologia] = useState(true)
    const [isCompania, setIsCompania] = useState(true)
    const [isLocacion, setIsLocacion] = useState(true)
    const [isSalario, setIsSalario] = useState(true)
    const [isStatus, setIsStatus] = useState(true)
    const [isDisponibilidad, setIsDisponibilidad] = useState(true)
    const [isTipo, setIsTipo] = useState(true)
    const [isDescShort, setIsDescShort] = useState(true)
    const [isDescLarge, setisDescLarge] = useState(true)
  


    const [descOn, setDescOn] = useState(false)


    const reset = ()=>{
        setId('')
        setTitulo('')
        setCategoria('')
        setTecnologia('')
        setCompania('')
        setLocacion('')
        setSalario('')
        setStatus('')
        setDisponibilidad('')
        setTipo('')
        setDescShort('')
        setDescLarge('')
        setPostulantes([])

        setIsTitulo(true)
        setIsCategoria(true)
        setIsTecnologia(true)
        setIsCompania(true)
        setIsLocacion(true)
        setIsSalario(true)
        setIsStatus(true)
        setIsDisponibilidad(true)
        setIsTipo(true)
        setIsDescShort(true)
        setisDescLarge(true)
    }

    
     const isValid = ()=>{
        
        let valid = true;
        valid =  titulo === '' || categoria === '' || tecnologia === '' || compania === '' || locacion === '' ||
                 salario === ''|| status === '' || disponibilidad === ''|| tipo === '' || descShort === ''|| descLarge ==='' ? false : true
        
        titulo === '' ? setIsTitulo(false) : setIsTitulo(true)
        categoria === '' ? setIsCategoria(false) : setIsCategoria(true)
        tecnologia === '' ? setIsTecnologia(false) : setIsTecnologia(true)
        compania === '' ? setIsCompania(false) : setIsCompania(true)
        locacion === '' ? setIsLocacion(false) : setIsLocacion(true)
        salario === '' ? setIsSalario(false) : setIsSalario(true)
        status === '' ? setIsStatus(false) : setIsStatus(true)
        disponibilidad === '' ? setIsDisponibilidad(false) : setIsDisponibilidad(true)
        tipo === '' ? setIsTipo(false) : setIsTipo(true)
        descShort === '' ? setIsDescShort(false) : setIsDescShort(true)
        descLarge === '' ? setisDescLarge(false) : setisDescLarge(true)
        return valid
    }

    const showJob =(indx:number)=>{
        const job = jobs[indx]
        setId(job._id)
        setTitulo(job.titulo)
        setCategoria(job.categoria)
        setTecnologia(job.tecnologia)
        setCompania(job.compania)
        setLocacion(job.locacion)
        setSalario(job.salario)
        setStatus(job.status)
        setDisponibilidad(job.disponibilidad)
        setTipo(job.tipo)
        setDescShort(job.descShort)
        setDescLarge(job.descLarge)
        setPostulantes(job.postulantes)
        
    } 

    const editDesc = ()=>{
        setDescOn(!descOn);
    }

    const deleteJob = ()=>{
     
        Swal.fire({
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            },
            text: 'Borrar Publicación?',
            showCancelButton: true,
            confirmButtonColor: 'black',
            cancelButtonColor: 'black',
            confirmButtonText: 'Si',
            cancelButtonText:'No'
          }).then((result) => {
            if (result.isConfirmed) {
               token  &&  dispatch(startdeleteJob(id, token, reset))
            }
          })


    }

    const filter =(e: React.ChangeEvent<HTMLInputElement>)=>{
        let value = e.target.value;
        const res = jobs.filter(({titulo , categoria, compania,  salario})=> {
            return titulo.toLowerCase().includes(value) || categoria.toLowerCase().includes(value) || compania.toLowerCase().includes(value) || salario.toLowerCase().includes(value)
        })
        setCopiaJobs(res);
        
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)=>{

        const name = e.target.name;
        const value = e.target.value;
        const length = value.trim().length
        
        switch (name) {
            case 'titulo':
               length === 0 ? setIsTitulo(false) : setIsTitulo(true) 
               length <= 50 && setTitulo(value)
               return
            case 'locacion':
               length === 0 ? setIsLocacion(false) : setIsLocacion(true)
               length <= 20 && setLocacion(value)
               return
            case 'salario':
               length === 0 ? setIsSalario(false) : setIsSalario(true)
               length <= 20 && setSalario(value)
               return
            case 'descripcionCorta':
               length === 0 ? setIsDescShort(false) : setIsDescShort(true)
               length <= 250 && setDescShort(value)
               return
            case 'status':
                length === 0 ? setIsStatus(false) : setIsStatus(true)
                return setStatus(value)
            case 'disponibilidad':
                length === 0 ? setIsDisponibilidad(false) : setIsDisponibilidad(true)
                return setDisponibilidad(value)
            case 'tipo':
                length === 0 ? setIsTipo(false) : setIsTipo(true)
                return setTipo(value)
            default:
                break;
        }

    }

    const onChangeSelect = (e:React.ChangeEvent<HTMLSelectElement>)=>{

        const name = e.target.name;
        const value = e.target.value;
     
        
        switch (name) {
            case 'compania':
               value === 'ninguna' ? setIsCompania(false) : setIsCompania(true);
               setCompania(value)
               return
            case 'categoria':
                value === 'ninguna' ? setIsCategoria(false) : setIsCategoria(true)  
                setCategoria(value)
            return
            case 'tecnologia':
                value === 'tecnologia' ? setIsTecnologia(false) : setIsTecnologia(true)
                setTecnologia(value)
            return
            default:
                break;
        }
    }

    const onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        
        if(isValid()){
            Swal.fire({
                showClass: {
                popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
                },
                text: 'Guardar Publicación?',
                confirmButtonText: 'Si',
                cancelButtonText:'No',
                confirmButtonColor: 'black',
                cancelButtonColor: 'black',
                showCancelButton: true,
              }).then((result) => {
                if (result.isConfirmed) {
                    const body ={
                        id,
                        titulo,
                        categoria,
                        tecnologia,
                        compania,
                        locacion,
                        salario,
                        status,
                        disponibilidad,
                        tipo,
                        descShort,
                        descLarge
                    }
                   token  &&  dispatch(startSendJob(body, token, reset))
                }
              })
            
        }else{
            toast.error('Complete los campos requeridos')
        }

    }

   
    return {
        postulantes,
        descOn,
        copiaJobs,
        showJob,
        deleteJob,
        editDesc,
        id,
        titulo,
        categoria,
        tecnologia,
        compania,
        locacion,
        salario,
        status,
        disponibilidad,
        tipo,
        descShort,
        descLarge,
        setDescLarge,
        onChange,
        onSubmit,
        reset,
        isTitulo,
        isCategoria,
        isTecnologia,
        isCompania,
        isLocacion,
        isSalario,
        isStatus,
        isDisponibilidad,
        isTipo,
        isDescShort,
        onChangeSelect,
        filter

    }
}