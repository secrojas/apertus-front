import { sendEmailPostulante } from '../../reducers/candidatoSlice';
import { useAppDispatch, useAppSelector } from "../../reducers/hooks/useRedux";
import { useEffect, useState } from 'react';


import { toast } from "react-toastify";
import { startgetCategories } from '../../reducers/jobSlice';

interface FileData {
    fileRaw : Blob,
    fileName:string
}

export const useCargaCV = ()=>{

    const { categories } = useAppSelector(state=> state.jobSlice)

    useEffect(() => {
        dispatch(startgetCategories());
      }, []) 


    let regexEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    const dispatch =  useAppDispatch();

    const [nombre, setName] = useState('')
    const [email, setEmail] = useState('')
    const [localidad, setLocalidad] = useState('')
    const [tel, setTel] = useState('')
    const [file, setFile] = useState({ } as FileData)
    const [perfil, setPerfil] = useState('')

    const [validName, setValidName] = useState(true)
    const [validEmail, setValidEmail] = useState(true)
    const [validTel, setValidTel] = useState(true)
    const [validFile, setValidFile] = useState(true)
    const [validLocalidad, setValidLocalidad] = useState(true)
    const [validPerfil, setValidPerfil] = useState(true)
 
    const onChangeSelect = (e:React.ChangeEvent<HTMLSelectElement>)=>{

        const value = e.target.value;
        
        setPerfil(value);
    }           

    const onInputChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)=>{


        const {name , value} = e.target;
        if (name === 'nombre'){
            if(value.trim().length<30){
                setName(value);
            }
            isEmpty(value) ? setValidName(false) : setValidName(true);
        }
        if (name === 'email'){
            if(value.trim().length<30){
                setEmail(value);
            }
            isValidEmail(value);
        }
        if (name === 'tel'){
            if(value.trim().length<30){
                setTel(value);
            }
            isEmpty(value) ? setValidTel(false) : setValidTel(true);
        }
        if (name === 'localidad'){
            if(value.trim().length<30){
                setLocalidad(value);
            }
            isEmpty(value) ? setValidLocalidad(false) : setValidLocalidad(true);
        }
    }

    const onChangeFile =(e:React.ChangeEvent<HTMLInputElement>)=>{
       if(e.target.files !== null && e.target.files.length!==0){
        setFile({
            fileRaw:e.target.files[0],
            fileName:e.target.files[0].name
        })
       }else{
        setFile({ } as FileData)
       }
    }

    const isEmpty = (value:string)=>{
        return value.trim().length === 0 ? true : false
    }

    const isValidEmail = (email:string)=>{

        if(email === '' || !regexEmail.test(email)){
            setValidEmail(false)
            return false
        }
        setValidEmail(true);
        return true;
    }

    const isValidForm = ()=>{

        
        if(isEmpty(nombre)){
            setValidName(false) 
        }

        isValidEmail(email);

        if(isEmpty(tel)||tel==='+'){
            setValidTel(false)
        }

        if(isEmpty(localidad)){
            setValidLocalidad(false)
        }

        if(isEmpty(perfil)){
            setValidPerfil(false)
        }        
        

        if(!isEmpty(nombre) && !isEmpty(email) && !isEmpty(tel) && !isEmpty(localidad) && !isEmpty(perfil) && file.fileName!==undefined){
            return true;
        }

        return false
      
    } 


    const sendForm = (e:React.FormEvent<HTMLFormElement>)=>{
        
        e.preventDefault();


        if(isValidForm()){

            toast.info('Enviando Formulario. Aguarde')
            
        
            let body = new FormData();
            body.append('myFile', file.fileRaw , file.fileName)
            body.append('nombre', nombre)
            body.append('email', email)
            body.append('localidad', localidad)
            body.append('tel', tel)
            body.append('perfil', perfil)
            body.append('message', 'enviando Cv')  
           
             dispatch(sendEmailPostulante(body,reset)); 
        
            
            
        }else{
            toast.error('Complete los campos faltantes')
        }

    }

    const reset =()=>{
        setName(''); 
        setEmail('');
        setTel('');
        setFile({ } as FileData);
        setLocalidad('');
        setPerfil('');
    }

    return { 
         nombre,
         email,
         localidad,
         tel,
         file,
         validName,
         validEmail,
         validTel,
         validFile,
         onInputChange,
         onChangeFile,
         sendForm, 
         reset,
         onChangeSelect,
         categories   
         }


}