import { useAppSelector, useAppDispatch } from '../../reducers/hooks/useRedux';
import { useEffect, useState } from 'react';
import { getContactos } from '../../reducers/contactosSlice';


interface Consulta{
    servicio:string,
    descripcion:string
}
interface Contacto {
    _id:string,
    nombre:string,
    email:string,
    tel:string,
    localidad:string,
    consultas:[]
   }

export const useContactos =()=>{

    const token = sessionStorage.getItem('token');
    const dispatch = useAppDispatch();
    const { contactosSlice } = useAppSelector(state=>state)

    const [consultas, setConsultas] = useState([] as Consulta[])

    const [contactos, setContactos] = useState([] as Contacto[])

    useEffect(() => {
       token && dispatch(getContactos(token))
    }, [])

    useEffect(() => {
        setContactos(contactosSlice);
     }, [contactosSlice])
    

    const getConsultas = ( email:string )=>{
      let res =   contactosSlice.find(contacto=> contacto.email === email)
       res && setConsultas(res?.consultas)
    }

    const filter =(e: React.ChangeEvent<HTMLInputElement>)=>{
        let value = e.target.value;
        const res = contactosSlice.filter(({nombre , email, localidad})=> {
            return nombre.toLowerCase().includes(value) || email.toLowerCase().includes(value) || localidad.toLowerCase().includes(value) 
         })
        setContactos(res);
        
    }

    return{
    
     contactos,
     getConsultas,
     consultas,
     filter

    }
}