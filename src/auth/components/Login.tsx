import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import style from '../css/LoginRegister.module.css'

import { useFormValidation } from "../hooks/useFormValidation";

export const Login = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    
  const{email ,password, onInputChange , onSubmitLogin ,isEmail, isPassword } = useFormValidation();

  return (
    <section className={style['login-container']}>

        <div className={style['login-title']}>
            <h2 className="wow animate__animated animate__fadeInUp">Login</h2>
        </div>

        <div className={style['login-content']}>
            <form className={` ${style['login-form']} animate__animated animate__fadeInUp`}  noValidate onSubmit={onSubmitLogin} >

                <input type="email"
                    className={style['form-input']}
                    placeholder="Email"          
                    name='email'
                       value={email}
                       onChange={onInputChange}
                    />
                {
                !isEmail &&  <span className={'red'}> ** El email no es Válido</span>
                }
                    
                <input type="password"
                    className={style['form-input']}
                    placeholder="Password" 
                    name='password'
                       value={password}
                       onChange={onInputChange}
                    />
                {
                !isPassword && <span className={'red'}> ** El password debe tener mínimo 8 caracteres , una letra mayúscula, y un número</span> 
                }

                <button type='submit'  style={{marginTop:'20px'}}  className= {`${style.btn} ${style['btn-default'] }  animate__animated animate__fadeInUp`} >Login </button>

            </form>
        </div>
        <div>
             <span className={`wow animate__animated animate__fadeInUp ${style.size}`}>
               ¿Aún no tienes una cuenta?
              <NavLink 
                to={'/registro'}
                style={{cursor:'pointer', padding:'14px 5px 0px'}}
              >
                Registrate  
              </NavLink>
             </span>
             <br/>
             <span 
              className={`wow animate__animated animate__fadeInUp ${style.size}`}
              >
               ¿Olvidaste tu Password?
              <NavLink 
                to={'/resetPassword'}
                style={{cursor:'pointer', padding:'0px 5px 10px'}}
              >
                Reset Password  
              </NavLink>
             </span>
        </div>
    </section>
  )
}
