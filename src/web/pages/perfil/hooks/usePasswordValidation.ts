import { useState } from "react"
import { useAppDispatch } from '../../../../reducers/hooks/useRedux';
import { ChangePasswordManual } from '../../../../reducers/authSlice';



export const usePasswordValidation = ()=>{

    let regexPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

    const dispatch = useAppDispatch();

    const token = sessionStorage.getItem('token');

    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPassword2, setNewPassword2] = useState('')


    const [isCurrentPassword, setIsCurrentPassword] = useState(true)
    const [isPassword1, setIsPassword] = useState(true)
    const [isPassword2, setIsPassword2] = useState(true)


    const reset = ()=>{
        
        setCurrentPassword('');
        setNewPassword('');
        setNewPassword2('');
    }


    const isPassword = (password:string)=>{
        
        const result = regexPassword.test(password)

        return result
    }



    const onInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const name = e.target.name;
        const value = e.target.value;

        if(name==='currentpassword'){
            setCurrentPassword(value);
            isPassword(value) ? setIsCurrentPassword(true) : setIsCurrentPassword(false);
        }

        if(name==='password'){
            setNewPassword(value)
            isPassword(value) ? setIsPassword(true) : setIsPassword(false)
        }

        if(name==='password2'){
            setNewPassword2(value);
            value === newPassword ? setIsPassword2(true) : setIsPassword2(false) 
        }


    }


    const isValid = ()=>{
    
     return    isPassword(currentPassword) && isPassword(newPassword) && newPassword===newPassword2 ? true : false

    }


    const onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    
       e.preventDefault();

       if(!isValid()) return;

       const body = {
        currentPassword,
        newPassword,
       }
       
      token && dispatch(ChangePasswordManual(body,token,reset));

    }


    return {
        onInputChange,
        currentPassword,
        newPassword,
        newPassword2,
        isCurrentPassword,
        isPassword1,
        isPassword2,
        onSubmit,
    }

} 