import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import style from '../css/LoginRegister.module.css'

import { useFormValidation } from "../hooks/useFormValidation";


export const Registro = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  const {nombre , email, password, password2, onInputChange, isEmail,
   isPassword, isPassword2, onSubmitRegister , isName , isLocalidad } = useFormValidation();


  return (

    <section className={style['login-container']}>

        <div className={style['login-title']}>
            <h2 className="wow animate__animated animate__fadeInUp">Registro</h2>
        </div>

        <div className={style['login-content']} >
          <form className={` ${style['login-form']} animate__animated animate__fadeInUp`} style={{gap:'10px'}} onSubmit={onSubmitRegister}>

              <input type="text"
                        className={style['form-input']}
                        placeholder="Nombre"
                        name='nombre'
                        value={nombre}
                        onChange={onInputChange}
                        />
                        {
                          !isName &&  <span style={{fontSize:'13px',margin:'-10px 0px'}}> ** El campo esta vacio</span>
                        }
              <input type="email"
                    className={style['form-input']}
                    placeholder="Email"
                    name='email'
                    value={email}
                    onChange={onInputChange}
                    />
                    {
                      !isEmail &&  <span style={{fontSize:'13px',margin:'-10px 0px'}}> ** El email no es Valido</span>
                    }
               <input type="text"
                    className={style['form-input']}
                    placeholder="Localidad"
                    name='localidad'
                    // value={email}
                    onChange={onInputChange}
                    />
                    {
                      !isLocalidad &&  <span style={{fontSize:'13px',margin:'-10px 0px'}}> ** El campo no es Valido</span>
                    }
              <input type="password"
                    className={style['form-input']}
                    placeholder="Password" 
                    name='password'
                    value={password}
                    onChange={onInputChange}
                    />
                    {
                    !isPassword && <span style={{fontSize:'13px',margin:'-10px 0px'}}> ** Mínimo 8 caracteres , una mayuscula, y un numero</span> 
                    }
              <input type="password"
                    className={style['form-input']}
                    placeholder="Confirm Password" 
                    name='password2'
                    value={password2}
                    onChange={onInputChange}
                    />
                    {
                    !isPassword2 && <span style={{fontSize:'13px',margin:'-10px 0px 5px 0px'}}> ** El password debe ser el mismo</span> 
                    }

              <button type='submit' className= {`${style.btn} ${style['btn-default']}  animate__animated animate__fadeInUp`} >Registro </button>
          </form>
        </div>
        <div>
             <span className={`wow animate__animated animate__fadeInUp ${style.size}`}>
              ¿Ya tienes usuario y contraseña?
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

