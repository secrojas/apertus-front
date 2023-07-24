
import { ToastContainer } from 'react-toastify'
import { usePerfil } from '../../../hooks/usePerfil';
import style from '../../contacto/contacto.module.css';
import cvFoto from '../../../../admin/assets/cv.png'
import success from '../assets/success.png';
import error from '../assets/error.png'

export const Perfil = () => { 

  const {file, nombre, email, tel, validName, cv, validLocalidad , validProvincia, validPais,
    validTel,  onInputChange, onChangeCV , sendForm , localidad , provincia , pais} = usePerfil();

    
    
    return (
      <div className={style.container}  
      style={{paddingTop:'40px'}} 
      >
    <form
     noValidate
     onSubmit={sendForm} 
     className={`${style['form-contacto']} animate__animated animate__fadeInUp `}
     >
      {
        cv !=='' ? 
       <div className={style['form-icon']}>
          <a href={cv} target='_blank' >
            <img alt='cv' src={cvFoto} className={style.cv}/>
          </a>
          <img alt='success' src={success} className={style.success}/>
       </div> :
       <div className={style['form-icon']}>
         <img alt='cv' src={cvFoto} className={style.cv}/>
         <img alt='error' src={error} className={style.error}/>
       </div>
      }

      <div className={style['form-inputs']}>
        <input
          className={style['w-100']}
          style={!validName ? {border:'1.5px solid orange'} : {border: '1px solid #ececec'}}
          type='text'
          placeholder="Nombre"
          name="nombre"
          value={nombre}
          onChange={onInputChange}
        />
        <input 
          className={style['w-45']}
          // style={!validEmail ? {border:'1.5px solid orange'} : {border: '1px solid #ececec'}}
          disabled
          type='email' 
          placeholder="Email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <input
          className={style['w-45']}
          style={!validLocalidad? {border:'1.5px solid orange'} : {border: '1px solid #ececec'}}
          type='text'
          placeholder="Localidad"
          name='localidad'
          value={localidad}
          onChange={onInputChange}
        />
         <input
          className={style['w-45']}
          style={!validProvincia? {border:'1.5px solid orange'} : {border: '1px solid #ececec'}}
          type='text'
          placeholder="Provincia"
          name='provincia'
          value={provincia}
          onChange={onInputChange}
        />
         <input
          className={style['w-45']}
          style={!validPais? {border:'1.5px solid orange'} : {border: '1px solid #ececec'}}
          type='text'
          placeholder="País"
          name='pais'
          value={pais}
          onChange={onInputChange}
        />
         <input
          className={style['w-45']}
          style={!validTel? {border:'1.5px solid orange'} : {border: '1px solid #ececec'}}
          type='number'
          placeholder="Telefono"
          name='tel'
          value={tel}
          onChange={onInputChange}
        />
        <div className={style['form-enviar']} >
          {
           file.fileName!==undefined ? <p>{file.fileName.substring(0, 20)}</p> : <p>Agregar CV</p>
          }
          <input
            style={{cursor:'pointer'}}
            type='file'
            name="myCV"
            onChange={onChangeCV}
          />
        </div>
      </div>
      <button className={style['form-button']}>
        Guardar
      </button>
    </form>
    <ToastContainer
    position="bottom-left"
    />
  </div>
  )
}
