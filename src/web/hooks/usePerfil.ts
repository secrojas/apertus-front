import { useAppSelector, useAppDispatch } from '../../reducers/hooks/useRedux';
import { useState, useEffect } from 'react';
import { startSetCV, startSetPerfilData, startSetPhotoPerfil } from '../../reducers/authSlice';
import { toast } from 'react-toastify';



interface FileData {
    fileRaw : Blob,
    fileName:string
  }



export const usePerfil = ()=>{


    const dispatch = useAppDispatch();

    const {user} = useAppSelector(state=>state.authSlice);
    const {nombre:userNombre, email:userEmail, tel:userTel , cv:userCV , foto: userFoto ,token:load, localidad:userLoc , provincia:userProv , pais:userPais  } = user;

    const [file, setFile] = useState({} as FileData);
    const [nombre, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [cv, setCV] = useState('')
    const [foto, setFoto] = useState('')
    const [localidad, setLocalidad] = useState('')
    const [provincia, setProvincia] = useState('')
    const [pais, setPais] = useState('')


    const [validName, setValidName] = useState(true)
    const [validEmail, setValidEmail] = useState(true)
    const [validTel, setValidTel] = useState(true)
    const [validLocalidad, setValidLocalidad] = useState(true)
    const [validProvincia, setValidProvincia] = useState(true)
    const [validPais, setValidPais] = useState(true)

    const token = sessionStorage.getItem('token');


    // todo habilitar luego de ajustar back
    useEffect(() => {

 
     setName(userNombre);
     setEmail(userEmail);
     setTel(userTel);
     setCV(userCV);
     setFoto(userFoto);
     setLocalidad(userLoc);
     setProvincia(userProv);
     setPais(userPais);
    }, [])

    useEffect(() => {
       
        setCV(userCV)
        setFoto(userFoto)
    }, [load])


    

    const isEmpty = (value:string)=>{
      return value.trim().length === 0 ? true : false
  }


  const isValidForm = ()=>{

        
    if(isEmpty(nombre)){
        setValidName(false) 
    }

    if(isEmpty(localidad)){
        setValidLocalidad(false) 
    }
    if(isEmpty(provincia)){
        setValidProvincia(false) 
    }
    if(isEmpty(pais)){
        setValidPais(false) 
    }  

    if(isEmpty(tel)||tel==='+'){
        setValidTel(false)
    }


 
    if(!isEmpty(nombre) && !isEmpty(tel) && !isEmpty(localidad) && !isEmpty(provincia) && !isEmpty(pais) ){
        return true
    } 
  
    return false
  
} 

  
    const onChangeFoto =(e:React.ChangeEvent<HTMLInputElement>)=>{
      if(e.target.files !== null && e.target.files.length!==0){
      

       let body = new FormData();

       
        body.append('myFoto', e.target.files[0] , e.target.files[0].name)
        
        if (token && e.target.files[0].name !==undefined){
             dispatch(startSetPhotoPerfil(body,token))
        } 

      }
   }

   const onChangeCV =(e:React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.files !== null && e.target.files.length!==0){
    

     let body = new FormData();

      body.append('myCV', e.target.files[0] , e.target.files[0].name)
      
      if (token && e.target.files[0].name !==undefined){
           dispatch(startSetCV(body,token))
      } 

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
    if (name === 'localidad'){
        if(value.trim().length<30){
            setLocalidad(value);
        }
        isEmpty(value) ? setValidLocalidad(false) : setValidLocalidad(true);
    }
    if (name === 'provincia'){
        if(value.trim().length<30){
            setProvincia(value);
        }
        isEmpty(value) ? setValidProvincia(false) : setValidProvincia(true);
    }
    if (name === 'pais'){
        if(value.trim().length<30){
            setPais(value);
        }
        isEmpty(value) ? setValidPais(false) : setValidPais(true);
    }
    if (name === 'email'){
        if(value.trim().length<30){
            setEmail(value);
        }

    }
    if (name === 'tel'){
        if(value.trim().length<30){
            setTel(value);
        }
        isEmpty(value) ? setValidTel(false) : setValidTel(true);
    }
}

const sendForm = (e:React.FormEvent<HTMLFormElement>)=>{
        
  e.preventDefault();

  if(isValidForm()){

      toast.info('Enviando Formulario. Aguarde')
                      
      token && dispatch(startSetPerfilData({nombre,tel,email,localidad,provincia,pais},token)); 
  }else{
      toast.error('Complete los campos faltantes')
  }

}

    
 return{
    foto,
    file,
    user,
    nombre,
    email,
    tel,
    cv,
    validEmail,
    validName,
    validTel,
    validLocalidad,
    validProvincia,
    validPais,
    onChangeFoto,
    onChangeCV,
    onInputChange,
    sendForm,
    localidad,
    provincia,
    pais
 }

}