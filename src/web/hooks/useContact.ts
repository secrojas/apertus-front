import { sendEmailContratarServicio , sendEmailConsulta } from '../../reducers/candidatoSlice';
import { useAppDispatch } from "../../reducers/hooks/useRedux";
import { useState } from 'react';

import { toast } from "react-toastify";

interface FileData {
    fileRaw : Blob,
    fileName:string
}

export const useContact = ()=>{

    let regexEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    const dispatch =  useAppDispatch();

    const [nombre, setName] = useState('')
    const [email, setEmail] = useState('')
    const [localidad, setLocalidad] = useState('')
    const [tel, setTel] = useState('')
    const [message, setMessage] = useState('')

    const [motivo, setMotivo] = useState('ninguna')
    const [servicio, setServicio] = useState('ningun Servicio')

    const [validName, setValidName] = useState(true)
    const [validEmail, setValidEmail] = useState(true)
    const [validTel, setValidTel] = useState(true)
    const [validMessage, setValidMessage] = useState(true)
    const [validLocalidad, setValidLocalidad] = useState(true)
 

    const onChangeSelect = (e:React.ChangeEvent<HTMLSelectElement>)=>{

        const value = e.target.value;
        console.log(value)
        
        switch (value) {
            case 'ninguna':
                setMotivo(value)
               return
            case 'Consulta':
                setMotivo(value)
            return
            case 'Contratar servicios':
                setMotivo(value)
            return
            default:
                setServicio(value);
                return;
        }
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
        if (name === 'message'){
            if(value.trim().length<800){
                setMessage(value);
            }
            isEmpty(value) ? setValidMessage(false) : setValidMessage(true);
        }
        if (name === 'localidad'){
            if(value.trim().length<30){
                setLocalidad(value);
            }
            isEmpty(value) ? setValidLocalidad(false) : setValidLocalidad(true);
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


        if(isEmpty(message)){
            setValidMessage(false)
        }

        if(isEmpty(localidad)){
            setValidLocalidad(false)
        }

        switch (motivo) {
            case 'Consulta':
                
                if(!isEmpty(nombre) && !isEmpty(tel) && !isEmpty(message) && isValidEmail(email)){
                    return true
                } 
                break;
            
            case 'Contratar servicios':
   
                if(!isEmpty(nombre) && !isEmpty(tel) && !isEmpty(message) && isValidEmail(email) && servicio!=='ningun Servicio'){
                    return true
                } 
                break;
        
            default:
                break;
        }
    
        
      
        return false
      
    } 


    const sendForm = (e:React.FormEvent<HTMLFormElement>)=>{
        
        e.preventDefault();


        if(isValidForm()){

            toast.info('Enviando Formulario. Aguarde')
            
            if(motivo==='Consulta'){
             
             
            let body = {
                nombre,
                email,
                tel,
                localidad,
                message,
                motivo: 'Consulta General',
                servicio: 'Sin Definir'
                }

                dispatch(sendEmailConsulta(body,reset))
           

            }
            
            if(motivo==='Contratar servicios'){

              let body = {
                nombre,
                email,
                tel,
                localidad,
                message,
                motivo,
                servicio
              }

             dispatch(sendEmailContratarServicio(body,reset))
            }
            
        }else{
            toast.error('Complete los campos faltantes')
        }

    }

    const reset =()=>{
        setName(''); 
        setEmail('');
        setTel('');
        setMessage('');
        setLocalidad('');
    }

    return { 
         nombre,
         email,
         localidad,
         tel,
         message,
         validName,
         validLocalidad,
         validEmail,
         validTel,
         validMessage,
         onInputChange,
         sendForm, 
         reset,
         onChangeSelect,
         motivo       
         }


}