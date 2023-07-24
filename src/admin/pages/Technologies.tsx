import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import style from '../styles/admin.module.css'
import { ToastContainer } from 'react-toastify';
import { useTechnologies } from '../hooks/useTechnologies';
import { Buscador } from '../../components/Buscador';



export const Technologies = () => {
 
  const { copiaTechnologies, deleteData,  id, nombre,  status,  descripcion, isStatus, onChange, reset, showData, onSubmit, isOk, filter } = useTechnologies();

return (
 
<>
 
  <div className={ style['panel-content']} >
    <div className={style['cont-layout-categories']}>
      <div className={style['cont-left-categories']} >
        <Form noValidate validated={isOk} onSubmit={onSubmit}>
              <Row className="mb-3">
                <Form.Group  controlId="validationCustom01">
                  <Form.Label>Nombre Tecnología</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name='nombre'
                    onChange={onChange}
                    placeholder="Ingrese Nombre"
                    value={nombre}
                  
                  />
                  <Form.Control.Feedback type="invalid" >Ingrese un Nombre</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group controlId="validationCustom03">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                  as='textarea'
                  name='descripcion'
                  onChange={onChange}
                  type="text" 
                  placeholder="Ingrese una Descripción "
                  required
                  value={descripcion}
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingrese una Descripción
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" >
              Status: <br/>
              <label className={isStatus === false ? style['color-orange'] : ''}  style={{marginRight:'10px'}} >
                            <Form.Check
                            type="radio"
                            id='status'
                            name="status" 
                            onChange={onChange}
                            value="Activo"
                            checked={status==="Activo"? true : false}
                            style={{display:'inline',marginRight:'10px'}}
                            />
                            Activo
                          </label>
                          <label className={isStatus === false ? style['color-orange'] : ''} >
                            <Form.Check
                            type="radio"
                            id='status'
                            name="status"
                            onChange={onChange}
                            value="Inactivo"
                            checked={status==="Inactivo"? true : false}
                            style={{display:'inline',marginRight:'10px'}}
                            />
                            Inactivo
                          </label>
              </Form.Group>
              <Button type="submit" style={{marginRight:'10px'}}>Guardar</Button>
              <Button type="button" style={{marginRight:'10px'}} onClick={reset} >Nueva Tecnología</Button>
              <Button 
                      onClick={deleteData}
                      type='button' 
                      style={id==='' ? {display:'none'} : {}}
              >Eliminar
              </Button>
          </Form>  
      </div> 

              <div className={style['cont-right-categories']} >
              <div className={style['buscador-tecno']}>
                 <Buscador filter={filter} paramBusqueda={'Nombre, Descripción, Status'}/>
              </div>
                <div 
                style={{flexBasis:'90%'}}
                >
                    <h1>LISTADO DE TECNOLOGIAS</h1>
                    <div style={{overflowY:'auto' , height:'73vh'}}>
                      <table className={style['table-listado']} >
                        <thead >
                            <tr>
                                <th>NOMBRE</th>
                                <th>DESCRIPCION</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody >
                        {  
                          copiaTechnologies.map((techno:{nombre:string,descripcion:string,status:string},indx)=>(
                            <tr key={indx} 
                                className='animate__animated animate__fadeIn' 
                                onClick={e=>showData(indx)} 
                            >
                                <td>   
                                  {techno.nombre}
                                </td>
                                <td>
                                  {techno.descripcion}
                                </td>
                                <td>
                                  {techno.status}
                                </td>
                            </tr>
                          ))
                        }
                        </tbody>              
                      </table>
                    </div>
                </div>
              
              </div>

    </div>
    <ToastContainer
    position="bottom-left"
    />
  </div>
  
</>
)
}
