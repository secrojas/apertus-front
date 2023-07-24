import { WhatsAppBtn } from "../../components"
import style from '../perfil/Perfil.module.css'
import { usePerfil } from '../../hooks/usePerfil';
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { MisPostulaciones, Password, Perfil } from "./components";
import avatar from '../../../assets/imgs/theme/avatar.png'
import { useEffect } from 'react';


export const PerfilPage = () => {

  useEffect(() => { 
    window.scrollTo(0, 0);
  }, [])

  const {foto, onChangeFoto} = usePerfil();

  return (
    <div className={style.container} >
      <div className={style['container--foto']} >
        <div className={style['foto']} >
              
              { foto !==''?
                <img alt="perfil" src={foto} style={{objectFit:'cover' , width:'100%', height:'100%'}} />:
                <img alt="perfil" src={avatar} style={{objectFit:'cover' , width:'100%', height:'100%'}} />
              }
              
              <input
                style={{cursor:'pointer'}}
                type='file'
                name="myFoto" 
                onChange={onChangeFoto}
              />
        </div>
      </div>
      <div className={style['container--links']} >
        <NavLink to={'/perfil/data'}>
                <span>Perfil</span>
        </NavLink>
        <NavLink to={'/perfil/password'}>
                <span>Password</span>
        </NavLink>
        <NavLink to={'/perfil/misPostulaciones'}>
                <span>Mis Postulaciones</span>
        </NavLink>
      </div>
      <div className={style['container--data']} >
      <Routes>
        <Route path='/data' element={<Perfil />}/>
        <Route path='/password' element={<Password/>}/>
        <Route path='/misPostulaciones' element={<MisPostulaciones/>}/>
        <Route path='/*' element={<Navigate to='/perfil/data' replace/>}/>
      </Routes>
      </div>
      <WhatsAppBtn/>
    </div>
  )
}
