import { WhatsAppBtn } from "../../components";
import style from '../contacto/contacto.module.css';
import triangle from '../../../assets/imgs/theme/service-arrow.png';
import { useContact } from '../../hooks/useContact';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Form } from "react-bootstrap";
import { useEffect } from 'react';

export const ContactoPage = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
 

    const { nombre, email, tel, message, validName, validEmail, 
           validTel, validMessage, onInputChange, sendForm, onChangeSelect, motivo, localidad} = useContact();


  return (
    <div className={style.background}>
      <div className={style.container}>
      <div className={style['container-title']} >
         <img className='equipo-triangle' src={triangle} alt='triangulo'></img>
         <h2 className="wow animate__animated animate__fadeInUp" >Contactate</h2>
      </div>
      <form
       noValidate 
       onSubmit={sendForm} 
       className={style['form-contacto']}
       >
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
            className={style['w-100']}
            style={!validEmail ? {border:'1.5px solid orange'} : {border: '1px solid #ececec'}}
            type='email'
            placeholder="Email"
            name="email"
            value={email}
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
           <input
            className={style['w-45']}
            style={!validTel? {border:'1.5px solid orange'} : {border: '1px solid #ececec'}}
            type='text'
            placeholder="Localidad"
            name='localidad' 
            value={localidad} 
            onChange={onInputChange}
          />
           <div className={style['form-phone']} >
              <Form.Select
                                placeholder='Motivo de Contacto'
                                name='motivo'
                                // value={motivo}
                                onChange={onChangeSelect}
                                style={{height:'50px'}}
                                >
                                  <option value='ninguna' style={{color:"grey"}}>Motivo de Contacto</option>
                                  <option value='Consulta'>Consultas</option>
                                  <option value='Contratar servicios'>Contratar servicios</option>
              </Form.Select>
           </div>
          {
            motivo!=='Contratar servicios' ?
            <div className={style['form-enviar']} >
                
            </div>:
            <div className={style['form-phone']} >
              <Form.Select
                  placeholder='Motivo de Contacto'
                  name='servicio'
                  onChange={onChangeSelect}
                  style={{height:'50px'}}
                  >
                    <option value='ningun Servicio' style={{color:"grey"}}>Elige un Servicio</option>
                    <option value='Reclutamiento y Selección'>Reclutamiento y Selección</option>
                    <option value='Módulo de RRHH'>Módulo de RRHH</option>
                    <option value='Reingeniería y Mejora de Procesos'>Reingeniería y Mejora de Procesos</option>
                    <option value='Calidad y Mejora Continua'>Calidad y Mejora Continua</option>
                    <option value='Programas de Capacitación'>Programas de Capacitación</option>
              </Form.Select>
           </div>
          }
        </div>
        <div className={style['form-message']}>
          <textarea
            style={!validMessage ? {border:'1.5px solid orange'} : {border: '1px solid #ececec'}}
            placeholder="Mensaje no mas de 800 caracteres"
            name='message'
            value={message}
            onChange={onInputChange}
          />
        </div>
        <button className={style['form-button']}>
          Enviar Mensaje
        </button>
      </form>
      <WhatsAppBtn/>
      <ToastContainer
      position="bottom-left"
      />
      </div>
    </div>
  )
}
