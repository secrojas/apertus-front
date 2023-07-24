import { WhatsAppBtn } from "../../components";
import style from '../cargaCv/cargaCv.module.css'
import triangle from '../../../assets/imgs/theme/service-arrow.png';
import { useCargaCV } from '../../hooks/useCargaCv';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { Form } from "react-bootstrap";

export const CargaCvPage = () => { 

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  

    const {file, nombre, email, tel,  validName, validEmail, 
           validTel, onInputChange, onChangeFile , sendForm, localidad , onChangeSelect , categories} = useCargaCV();


  return (
    <div className={style.background} >
      <div className={style.container}>
      <div className={style['container-title']} >
         <img className='equipo-triangle' src={triangle} alt='triangulo'></img>
         <h2 className="wow animate__animated animate__fadeInUp" >Cargá tu Cv</h2>
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
            placeholder="Teléfono"
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
                                placeholder='Area de interés'
                                name='perfil'
                                // value={motivo}
                                onChange={onChangeSelect}
                                style={{height:'50px'}}
                                >
                                  <option value='' style={{color:"grey"}}>Area de interés</option>
                                  {
                                    categories.map((item , indx)=>{
                                      if(item.nombre !=='Sin Definir'){
                                        return <option
                                        value={item.nombre}
                                        key={indx}  
                                        > {item.nombre} </option>
                                      }
                                    })
                                  }
              </Form.Select>
           </div>
          <div className={style['form-enviar']} >
                {
                  file.fileName!==undefined ? <p>{file.fileName.substring(0, 20)}</p> : <p>Agregar CV</p>
                }
                <input 
                  style={{cursor:'pointer'}}
                  type='file'
                  name="myFile"
                  onChange={onChangeFile}
                />
            </div>
        </div>
        <button className={style['form-button']}>
          Enviar CV
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
