import style from '../Perfil.module.css'
import { usePasswordValidation } from '../hooks/usePasswordValidation';
import { ToastContainer } from 'react-toastify';

 

export const Password = () => {

   const { onInputChange , currentPassword , newPassword , newPassword2 , isCurrentPassword , isPassword1 , isPassword2, onSubmit } = usePasswordValidation();


  return (
    <div className={style['login-content']} >
          <form className={` ${style['login-form']} animate__animated animate__fadeInUp`} style={{gap:'10px'}} onSubmit={onSubmit}  >

           
              <input type="password"
                    className={style['form-input']}
                    placeholder="Password" 
                    name='currentpassword'
                    value={currentPassword}
                    onChange={onInputChange}
                    />
                    {
                    !isCurrentPassword && <span style={{fontSize:'13px'}}> **El password debe tener minimo 8 caracteres , una letra mayuscula, y un numero</span> 
                    }
            <input type="password"
                    className={style['form-input']}
                    placeholder="Nueva Password" 
                    name='password'
                    value={newPassword}
                    onChange={onInputChange}
                    />
                    {
                    !isPassword1 && <span style={{fontSize:'13px'}}> **El password debe tener minimo 8 caracteres , una letra mayuscula, y un numero</span> 
                    }
              <input type="password"
                    className={style['form-input']}
                    placeholder="Confirme Password" 
                    name='password2'
                    value={newPassword2}
                    onChange={onInputChange}
                    />
                    {
                    !isPassword2 && <span style={{fontSize:'13px'}}> **El password debe ser el mismo</span> 
                    }

              <button type='submit' style={{marginTop:'10px'}} className= {`${style.btn} ${style['btn-default']}  animate__animated animate__fadeInUp`} >Actualizar </button>
          </form>
          <ToastContainer
            position="bottom-left"
            />
        </div>
  )
}
