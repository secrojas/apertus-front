import { Button, Form, Row } from 'react-bootstrap'
import style from '../servicios.module.css'
import { useServices } from '../../../hooks/useServices';


export const FormServices = () => {

    const {isOk , onSubmit, onChange , nombre , message , email , tel , localidad} = useServices();
     

  return (
    <div className={style.formulario} >
            <h1>Consultanos tus dudas</h1><br/>
            <Form noValidate validated={isOk} onSubmit={onSubmit}>
            <Row className="mb-3">
              <Form.Group  controlId="validationCustom01">
                {/* <Form.Label>Nombre Completo</Form.Label> */}
                <Form.Control
                  required
                  type="text"
                  name='nombre'
                  onChange={onChange}
                  placeholder="Nombre Completo"
                  value={nombre}
                />
                <Form.Control.Feedback type="invalid" >Ingrese su Nombre Completo</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group  controlId="validationCustom01">
                {/* <Form.Label>Email</Form.Label> */}
                <Form.Control
                  required
                  type="email"
                  name='email'
                  onChange={onChange}
                  placeholder="Email"
                  value={email}
                />
                <Form.Control.Feedback type="invalid">Ingrese un email válido</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group  controlId="validationCustom01">
                {/* <Form.Label>Teléfono</Form.Label> */}
                <Form.Control
                  required
                  type="text"
                  name='tel'
                  onChange={onChange}
                  placeholder="Teléfono"
                  value={tel}
                 
                />
                <Form.Control.Feedback type="invalid" >Ingrese un Teléfono</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group  controlId="validationCustom01">
                {/* <Form.Label>Localidad</Form.Label> */}
                <Form.Control
                  required
                  type="text"
                  name='localidad'
                  onChange={onChange}
                  placeholder="Localidad"
                  value={localidad}
                 
                />
                <Form.Control.Feedback type="invalid" >Ingrese una Localidad</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom03">
                {/* <Form.Label>Consulta</Form.Label> */}
                <Form.Control
                 as='textarea'
                 name='message'
                 onChange={onChange}
                 type="text" 
                 placeholder="Su Consulta "
                 required
                 style={{height:'100px'}}
                 value={message}
                 />
                <Form.Control.Feedback type="invalid">
                  Ingrese una Descripción
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
        
            <Button type="submit" className={style.btn} style={{marginRight:'10px'}}>Enviar</Button>

            </Form>
    </div>
  )
}
 