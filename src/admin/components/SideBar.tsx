import { NavLink } from 'react-router-dom'
import style from '../styles/admin.module.css'
import dash from '../assets/dashboard.svg'
import cat from '../assets/categories.svg'
import company from '../assets/companies.svg'
import jobs from '../assets/jobs.svg'
import techno from '../assets/technologies.svg'
import user from '../assets/users.svg'
import log from '../assets/logout.svg'
import { useAppDispatch } from '../../reducers/hooks/useRedux';
import { startLogout } from '../../reducers/authSlice';
import placa from '../../auth/assets/placa.png'

export const SideBar = () => {

   const dispatch = useAppDispatch();

  return (
    <div className={style.sidebar}>
      <div className={style['sidebar-logo']}>
         <img alt='logo' src={placa} style={{width:'20px',height:'20px',objectFit:'contain'}}/>
         <h5>Apertus</h5>
      </div>
      <ul>
        <li>
           <NavLink to={'/admin/dashboard'}>
              <img src={dash}/>
              <span>Dashboard</span>
           </NavLink>
        </li>
        <li>
           <NavLink to={'/admin/general'}>
            <img src={user}/>
              <span>Listado General</span>
           </NavLink>
        </li>
        <li>
           <NavLink to={'/admin/users'}>
            <img src={user}/>
              <span>Candidatos</span>
           </NavLink>
        </li>
        <li>
           <NavLink to={'/admin/jobs'}> 
              <img src={jobs}/>
              <span>Postulaciones</span>
           </NavLink>
        </li>
        <li>
           <NavLink to={'/admin/contacts'}>
            <img src={user}/>
              <span>Contactos</span>
           </NavLink>
        </li>
        <li>
           <NavLink to={'/admin/companies'}>
              <img src={company}/>
              <span>Companías</span>
           </NavLink>
        </li>
        <li>
           <NavLink to={'/admin/technologies'}>
              <img src={techno}/>
              <span>Tecnologías</span>
           </NavLink>
        </li>
        <li>
           <NavLink to={'/admin/categories'}>
              <img src={cat}/>
              <span>Categorías</span> 
           </NavLink>    
        </li>
        <li>
           <NavLink to={'/admin/redesSociales'}>
            <img src={user}/>
              <span>Configuraciones</span>
           </NavLink>
        </li>
      </ul>
      <li className={style['end-item']} 
          onClick={e=>dispatch(startLogout())}>
            <NavLink to={''}>
               <img src={log}></img>
               <span>Salir</span>
            </NavLink>
      </li>
    </div>
  )
}
