import { useEffect, useState } from 'react';
import { startSendContacto } from '../../reducers/serviciosSlice';
import { useAppDispatch, useAppSelector } from '../../reducers/hooks/useRedux';
import { useLocation } from 'react-router-dom';


export const useServices = ()=>{

    const { servicio } = useAppSelector(state=>state.serviciosSlice)

    let regexEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    const dispatch = useAppDispatch();

    const nombreServicio = useLocation().pathname.slice(11);


    useEffect(() => {
     servicio === undefined && setForm({...form , ['servicio'] : nombreServicio}); 
    }, [])
    

     
    const [form, setForm] = useState({
        servicio,
        nombre:'',
        email:'',
        tel:'',
        localidad:'',
        message:'',
        motivo: 'Servicios',
        isOk:false
    });

    const reset = ()=>{
        setForm({
            servicio,
            nombre:'',
            email:'',
            tel:'',
            localidad:'',
            message:'',
            motivo:'',
            isOk:false
        })
    }

    const {nombre, email, tel, localidad , message, isOk} = form


    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{

        const name = e.target.name;
        const value = e.target.value;
        const length = value.trim().length

        length <=250 && setForm({
            ...form,
            [name]:value
        })

    }

    const isValid = ()=>{

        let res=false

        res = nombre.trim().length !==0 &&
        email.trim().length !==0 && regexEmail.test(email) &&
        tel.trim().length !==0 &&
        localidad.trim().length !==0 &&
        message.trim().length !==0 ?
        true : false;
        
        res ? setForm({...form, isOk:false}) : setForm({...form, isOk:true});

        return res
    }

    const onSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        isValid() &&  dispatch(startSendContacto(form, reset));
    }

    return{
        nombre,
        message,
        email,
        tel,
        localidad,
        isOk,
        onSubmit,
        onChange,
    }

}