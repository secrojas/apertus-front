import { setConfig, startSaveChangesConfig, startSetLogoApertus, getConfig, loadConfig } from '../../reducers/general';
import { useAppSelector, useAppDispatch } from '../../reducers/hooks/useRedux';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';


export const useConfig = ()=>{

    let regexEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    const [isOk, setIsOk] = useState(false); 

    const dispatch = useAppDispatch();

    const { config } = useAppSelector(state=>state.globalSlice);

    const token = sessionStorage.getItem('token');

    const { instagram , linkedin , whatsapp , emailAdmin , logo , emailServicio } = config;


    useEffect(() => {     
         dispatch(getConfig());
    }, []) 


    const isValid = ()=>{ 

        let res=false

        res = instagram.trim().length !==0 &&
        linkedin.trim().length !==0 &&
        whatsapp.trim().length !==0 &&
        emailServicio.trim().length !==0 && regexEmail.test(emailAdmin) 
        emailAdmin.trim().length !==0 && regexEmail.test(emailAdmin)  ?
        true : false;
        
        res ? setIsOk(false) : setIsOk(true);

        return res
    }


    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{

        const name = e.target.name;
        const value = e.target.value;
        dispatch(setConfig({name,value}))
       
    } 

    const onChangeLogoApertus =(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files !== null && e.target.files.length!==0){
        
  
         let body = new FormData();
  
         
          body.append('myLogoApertus', e.target.files[0] , e.target.files[0].name)
          
          if (token && e.target.files[0].name !==undefined){
               dispatch(startSetLogoApertus(body,token));
          } 
  
        }
     }

    const saveChanges =()=>{
        
       if(!isValid()){
        toast.error('Complete los Campos')
        return;
       } ;

       const body = {
        instagram,
        linkedin,
        whatsapp,
        emailAdmin,
        emailServicio
       } 

      token &&   dispatch(startSaveChangesConfig(body, token));

    }
 
    return {
        logo,
        instagram,
        linkedin,
        whatsapp,
        emailAdmin,
        emailServicio,
        onChange,
        saveChanges,
        isOk,
        onChangeLogoApertus
    }

} 