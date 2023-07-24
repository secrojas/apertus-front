
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import style from '../styles/admin.module.css'
import { ToastContainer } from 'react-toastify';
import { useCategories } from '../hooks/useCategories';
import { Buscador } from '../../components/Buscador';

 
export const Categories = () => {

  const { copiaCategories, deleteData,  id, nombre,  status,  descripcion, isStatus, onChange, reset , onSubmit , showData , isOk , filter} = useCategories();

return (
 
<>
  
  <div className={ style['panel-content']} >
    <div className={style['cont-layout-categories']}> 
      <div className={style['cont-left-categories']} >
            <Form noValidate validated={isOk} onSubmit={onSubmit}>
            <Row className="mb-3">
              <Form.Group  controlId="validationCustom01">
                <Form.Label>Nombre Categoría</Form.Label>
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
            <Button type="button" style={{marginRight:'10px'}} onClick={reset} >Nueva Categoría</Button>
            <Button 
                    onClick={deleteData}
                    type='button' 
                    style={id==='' ? {display:'none'} : {}}
            >Eliminar
            </Button>
            </Form>
      </div>  

              <div className={style['cont-right-categories']} >
              <div className={style['buscador-category']}>
                <Buscador filter={filter} paramBusqueda={'Nombre , Status, Descripción'} />
              </div>
                <div
                 style={{flexBasis:'90%'}}
                 >
                    <h1>LISTADO DE CATEGORIAS</h1>
                    <div style={{overflowY:'auto' , height:'73vh'}} >
                      <table className={style['table-listado']} >
                        <thead>
                            <tr>
                                <th>NOMBRE</th>
                                <th>DESCRIPCION</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody >
                        {  
                          copiaCategories.map((category:{nombre:string,status:string,descripcion:string},indx)=>(
                            <tr key={indx} 
                                className='animate__animated animate__fadeIn' 
                                onClick={e=>showData(indx)} 
                            >
                                <td>   
                                  {category.nombre}
                                </td>
                                <td>
                                  {category.descripcion}
                                </td>
                                <td>
                                  {category.status}
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
