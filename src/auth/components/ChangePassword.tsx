import { NavLink, useLocation } from 'react-router-dom';
import style from '../css/LoginRegister.module.css'

import { useFormValidation } from "../hooks/useFormValidation";
import { useEffect } from 'react';
import { useAppDispatch } from '../../reducers/hooks/useRedux';
import { revalidarToken5m } from '../../reducers/authSlice';



export const ChangePassword = () => {

  const dispatch = useAppDispatch();
  const token = useLocation().search.slice(7);

  const { password, password2, onInputChange,
   isPassword, isPassword2, onSubmitChangePassword  } = useFormValidation();

   useEffect(() => {
    
    token.trim().length !==0 &&
     dispatch(revalidarToken5m(token))

   }, [])
   


  return (

    <section className={style['login-container']}>

        <div className={style['login-title']}>
            <h2 className="wow animate__animated animate__fadeInUp">Cambio de Password</h2>
        </div>

        <div className={style['login-content']} >
          <form 
          className={` ${style['login-form']} animate__animated animate__fadeInUp`}
          style={{gap:'10px'}}
          onSubmit={onSubmitChangePassword}>

              <input type="password"
                    className={style['form-input']}
                    placeholder="Nueva Password" 
                    name='password'
                    value={password}
                    onChange={onInputChange}
                    />
                    {
                    !isPassword && <span style={{fontSize:'13px'}}> **El password debe tener minimo 8 caracteres , una letra mayuscula, y un numero</span> 
                    }
              <input type="password"
                    className={style['form-input']}
                    placeholder="Confirm Password" 
                    name='password2'
                    value={password2}
                    onChange={onInputChange}
                    />
                    {
                    !isPassword2 && <span style={{fontSize:'13px'}}> **El password debe ser el mismo</span> 
                    }

              <button 
                type='submit'
                className= {`${style.btn} ${style['btn-default']} ${style['btn-reset']} animate__animated animate__fadeInUp`}
              >Cambiar Password </button>
          </form>
        </div>
        <div>
             <span className="wow animate__animated animate__fadeInUp">
              ¿Recordas tu Password?
              <NavLink 
                to={'/login'}
                style={{cursor:'pointer', padding:'0px 5px 0px'}}
              >
                  Login  
              </NavLink>
             </span>
             <br/>
             <span className="wow animate__animated animate__fadeInUp">
              ¿Expiró el token? Vuelve a generarlo
              <NavLink 
                to={'/resetPassword'}
                style={{cursor:'pointer', padding:'0px 5px 0px'}}
              >
                  Reset Password 
              </NavLink>
             </span>
        </div>
    </section>
 
  )
}

