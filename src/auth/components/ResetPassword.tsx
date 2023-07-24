import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import style from '../css/LoginRegister.module.css'

import { useFormValidation } from "../hooks/useFormValidation";


export const ResetPassword = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


    
  const{email, onInputChange , onSubmitResetPassword ,isEmail } = useFormValidation();

  return (
    <section className={style['login-container']}>

        <div className={style['login-title']}>
            <h2 className="wow animate__animated animate__fadeInUp">Reset Password</h2>
        </div>

        <div className={style['login-content']}>
            <form className={` ${style['login-form']} animate__animated animate__fadeInUp`}  noValidate onSubmit={onSubmitResetPassword} >

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
                    

                <button type='submit' style={{marginTop:'20px'}} className= {`${style.btn} ${style['btn-default']}  animate__animated animate__fadeInUp`} >Reset Password </button>

            </form>
        </div>
        <div>
             <span className={`wow animate__animated animate__fadeInUp ${style.size}`}>
               ¿Recordas tu Password?
              <NavLink 
                to={'/login'}
                style={{cursor:'pointer', padding:'14px 5px 10px'}}
              >
                Login 
              </NavLink>
             </span>
        </div>
    </section>
  )
}
