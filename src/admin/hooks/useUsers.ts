import { useAppDispatch, useAppSelector } from "../../reducers/hooks/useRedux";
import { useEffect, useState } from 'react';
import { getCandidatos } from "../../reducers/candidatoSlice";
import { useLocation } from 'react-router-dom';

interface Postulacion {
  _id:string
  logo?:string,
  titulo:string,
  compania:string, 
  disponibilidad:string,
  locacion:string,
  tiempo?:string,
  descShort:string,
  tipo:string,
}  

interface Candidato {
 
  nombre:string,
  email:string,
  tel:string,
  cv:string,
  localidad?:string,
  foto:string,
  perfil:string,
  postulaciones:Postulacion[] 
}

export const useUsers = ()=>{

    const param = useLocation().search.slice(7);


    const token = sessionStorage.getItem('token');
    const dispatch = useAppDispatch();
    const { candidatoSlice } = useAppSelector(state=>state);

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [cv, setCv] = useState('')
    const [perfil, setPerfil] = useState('')
    const [localidad, setLocalidad] = useState('')
    const [foto, setFoto] = useState('')
    const [postulaciones, setPostulaciones] = useState([] as Postulacion[])


    const [candidatos, setCandidatos] = useState([] as Candidato[])

  
    useEffect(() => {
      token && dispatch(getCandidatos(token));
      param.trim().length !==0 && showData(param);
    }, [])

     
    useEffect(() => {
      setCandidatos(candidatoSlice)
    }, [candidatoSlice])
    
    const showData = (email:string)=>{
      const user =   candidatoSlice.find(value=> value.email === email)
      if(user){
        const { nombre , email, tel, cv , foto , postulaciones, localidad, perfil } = user;
        setNombre(nombre);
        setEmail(email);
        setTel(tel);
        setCv(cv);
        setFoto(foto);
        setPerfil(perfil);
        setPostulaciones(postulaciones)
        localidad && setLocalidad(localidad)
      }
    }

    
    const filter =(e: React.ChangeEvent<HTMLInputElement>)=>{
      let value = e.target.value;
      const res = candidatoSlice.filter(({nombre , email , localidad})=> {
          return nombre.toLowerCase().includes(value) || email.toLowerCase().includes(value) || localidad?.toLowerCase().includes(value) 
        })
      setCandidatos(res);
      
  }    

return{
    postulaciones,
    candidatos,
    showData,
    nombre,
    email,
    tel,
    cv,
    foto,
    localidad,
    filter,
    perfil,
}

}


