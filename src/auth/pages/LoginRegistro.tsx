import 'react-toastify/dist/ReactToastify.css';
import style from '../css/LoginRegister.module.css'
import logo from '../assets/placa.png'

import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ChangePassword, Glider, Login, Registro, ResetPassword } from '../components';


export const LoginRegistro = () => {

  const pathName = useLocation().pathname
  const navigate = useNavigate();
  
  return (
       <div className='contenedor' >
           <div className={style.contenedor} >
            <div className={style['contenedor-left']}>
              <div className={style.info}>
                <h2>Apertus.</h2>
                <span>Soluciones en Recursos Humanos</span>
              </div>
              <div className={style.glide}>
                <Glider/>
              </div>
            </div>
            <div className={style['contenedor-right']} >

              {
                pathName === '/login' ? <Login/> : 
                pathName === '/registro' ? <Registro/> : 
                pathName === '/resetPassword' ? <ResetPassword/> :
                pathName === '/changePassword' && <ChangePassword/>
              }          
              <img alt='logo' src={logo} onClick={e=>{ navigate('/')}} />
            </div>
         </div>  
         <ToastContainer
            position="bottom-left"
         />
       </div>
  )
}
