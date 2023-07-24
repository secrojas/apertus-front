import { Button, Form, InputGroup } from 'react-bootstrap'
import style from '../styles/admin.module.css'
import insta from '../../assets/imgs/theme/icons/insta.svg'
import link from '../../assets/imgs/theme/icons/linked.svg'
import whats from '../../assets/imgs/theme/icons/WhatsApp.svg'
import { useConfig } from '../hooks/useConfig';
import { ToastContainer } from 'react-toastify'

 
export const RedesSociales = () => {
  
  const {instagram, linkedin, whatsapp, emailAdmin, emailServicio, onChange , saveChanges, logo, isOk , onChangeLogoApertus} = useConfig();

  return (
    <div className={style['sociales-contenedor']} >
       <div className={style.foto}  >
            { 
              // logo!=='logo'&&
              <>
                  <img src={logo} style={{cursor:'pointer',width:'auto',height:'auto'}}/> 
                  <input
                  style={{cursor:'pointer'}}
                  type='file'
                  name="myLogoApertus" 
                  onChange={onChangeLogoApertus}
                  />        
              </>
            }
        </div>
      <Form noValidate validated={isOk} >
        <InputGroup className="mb-3"  style={{width:'60%'}} hasValidation >
              <InputGroup.Text id="basic-addon1">
                  <img src={insta} style={{width:'20px'}}/>
              </InputGroup.Text>
                  <Form.Control
                  required
                  name='instagram'
                  placeholder={instagram}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={instagram}
                  onChange={onChange}
                  />
        </InputGroup>
        <InputGroup className="mb-3" style={{width:'60%'}} hasValidation >
            <InputGroup.Text id="basic-addon1">
                <img src={link} style={{width:'20px'}}/>
            </InputGroup.Text>
                <Form.Control
                required
                name='linkedin'
                placeholder={linkedin}
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={linkedin}
                onChange={onChange}
                />
        </InputGroup>
        <InputGroup className="mb-3" style={{width:'60%'}} hasValidation >
            <InputGroup.Text id="basic-addon1">
                <img src={whats} style={{width:'20px'}}/>
            </InputGroup.Text>
                <Form.Control
                required
                name='whatsapp'
                placeholder={whatsapp}
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={whatsapp}
                onChange={onChange}
                />
        </InputGroup>
        <InputGroup className="mb-3" style={{width:'60%'}} hasValidation >
        <InputGroup.Text id="basic-addon1">@Seleccion</InputGroup.Text>
                <Form.Control
                required
                type='email'
                name='emailAdmin'
                placeholder={emailAdmin}
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={emailAdmin}
                onChange={onChange}
                />
        </InputGroup>
        <InputGroup className="mb-3" style={{width:'60%'}} hasValidation >
        <InputGroup.Text id="basic-addon1">@Servicios</InputGroup.Text>
                <Form.Control
                required
                type='email'
                name='emailServicio'
                placeholder={emailServicio}
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={emailServicio}
                onChange={onChange}
                />
        </InputGroup>
        <Button type="button" style={{marginRight:'10px'}} onClick={saveChanges}>Guardar</Button>
      </Form>
      <ToastContainer
        position="bottom-left"
        />
    </div>
  )
}
 