import { useAppSelector, useAppDispatch } from '../../reducers/hooks/useRedux';
import { useState, useEffect } from 'react';
import { formLogin, startLogin, startRegister, startResetPassword, init, revalidarToken5m, startChangePassword } from '../../reducers/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const useFormValidation = ()=>{

    const token = sessionStorage.getItem('token')

    let regexEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let regexPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {form , user } = useAppSelector(state=>state.authSlice)

    const{ rol } = user
    const { nombre , email, localidad ,  password, password2 } = form ;
    

    
    const [isName, setIsName] = useState(true)
    const [isEmail, setIsEmail] = useState(true)
    const [isLocalidad, setIsLocalidad] = useState(true)
    const [isPassword, setIsPassword] = useState(true)
    const [isPassword2, setIsPassword2] = useState(true)
    const [isValidLogin, setIsValidLogin] = useState(false);
    const [isValidRegister, setIsValidRegister] = useState(false);

    useEffect(() => {
      
     rol==='admin'  && navigate('/admin', {replace:true})
     rol==='candidato'  && navigate('/perfil', {replace:true})

    }, [rol])
    
        
    const validLogin =()=>{
        if(email === '' || password === ''){
     
        email === '' && setIsEmail(false)
        password === '' && setIsPassword(false)   
         setIsValidLogin(false);
         return false
        }
        if(email !== '' && !regexEmail.test(email)){
      
         setIsEmail(false)
         setIsValidLogin(false)
         return false
        }
        if(password !== '' && !regexPassword.test(password)){
    
          setIsPassword(false)
          setIsValidLogin(false)
         return false
        }
        setIsEmail(true)
        setIsPassword(true)
        setIsValidLogin(true)
        return true
    }

    const validRegister =()=>{
        if(nombre === "" || email === '' || password === '' || password2 === '' || localidad === ''){
           
        nombre === '' && setIsName(false)
        email === '' && setIsEmail(false)
        localidad === '' && setIsLocalidad(false)
        password === '' && setIsPassword(false) 
        password2 === '' && setIsPassword2(false)  
         setIsValidLogin(false);
         return false
        }
        if(email !== '' && !regexEmail.test(email)){
         
         setIsEmail(false)
         setIsValidLogin(false)
         return false
        }
        if(password2 !== '' && !regexPassword.test(password2)){
           
          setIsPassword(false)
          setIsValidLogin(false)
         return false
        }
        if(password !== '' && !regexPassword.test(password)){
           
          setIsPassword(false)
          setIsValidLogin(false)
         return false
        }
        setIsName(true)
        setIsEmail(true)
        setIsPassword(true)
        setIsPassword2(true)
        setIsValidRegister(true)
        setIsLocalidad(true)
        return true
    }

    const validEmail = (email:string)=>{
        
        if(email===''){
            setIsEmail(false)
            return false
        }

        if(email !== '' && !regexEmail.test(email)){
            setIsEmail(false)
            return false
        }
        setIsEmail(true);
        return true
    }

    const validPassword = (password:string)=>{

        if(password !== '' && !regexPassword.test(password)){
            setIsPassword(false)
            return false
           }
        setIsPassword(true)
        return true;
    }

    const validPassword2 = (password2:string)=>{
        if(password2 !== '' && password !== password2){
            setIsPassword2(false)
            return false
           }
        setIsPassword2(true)
        return true;
    }    

    const onInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name , value} = e.target
        dispatch(formLogin({name,value}));
        name === 'nombre' && value === '' ? setIsName(false) : setIsName(true) 
        name === 'localidad' && value === '' ? setIsLocalidad(false) : setIsLocalidad(true) 
        name === 'email' && validEmail(value)
        name === 'password' && validPassword(value)
        name === 'password2'&& validPassword2(value)
    }

    const onSubmitLogin = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();  
        if(validLogin()) {
            dispatch(startLogin(email,password))          
        } 
    }

    const onSubmitRegister = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
            
        validRegister() && dispatch(startRegister(nombre,email,password,localidad)) 
    }
    

    const onSubmitResetPassword = (e:React.FormEvent<HTMLFormElement>)=>{
        
        e.preventDefault();
        
        validEmail(email) ?
        dispatch(startResetPassword(email)):
        toast.error('Debe ingresar un Email valido')

    }

    const onSubmitChangePassword = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if( 
            password !== '' && 
            password2!=='' &&
            validPassword(password) &&
            validPassword2(password2)
          )
        {
           token &&  dispatch(startChangePassword(password,token));
        }else{
            toast.error('Complete los campos requeridos')
        }

    }

    return { 
        nombre,
        email,
        password,
        password2,
        isName,
        isEmail,
        isPassword,
        isPassword2,
        onInputChange,
        onSubmitLogin,
        onSubmitRegister,
        isLocalidad,
        onSubmitResetPassword,
        onSubmitChangePassword
     }

}