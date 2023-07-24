
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import style from '../styles/admin.module.css'
import {img} from '../assets/images'
import { ToastContainer } from 'react-toastify';
import { useCompanies } from '../hooks/useCompanies';
import { Buscador } from '../../components/Buscador';


export const Companies = () => {

  const { id, logo, nombre ,onChange , isStatus, status, descripcion, ubicacion,
         deleteData, reset, copiaCompany , showData, onSubmit, onChangeLogo, isOk , filter} = useCompanies();


  return (
    
    <>
      
                 <div className={ style['panel-content']} >
                      <div className={style['cont-layout-company']}>
                        <div className={style['cont-left-company']} >
                        <div className={`${style.foto} animate__animated animate__fadeIn`}  >
                          
                          {
                            logo===''&& id!=='' &&
                            <>
                                <img src={img.cam} style={{cursor:'pointer'}}/> 
                                <input
                                style={{cursor:'pointer'}}
                                type='file'
                                name="myLogoCompany" 
                                onChange={onChangeLogo}
                                />
                             </>
                          } 
                          { id!=='' && logo!=='' &&
                          <>
                          <img src={logo} style={{cursor:'pointer',width:'100px', height:'100px'}}/>
                              <input
                              style={{cursor:'pointer'}}
                              type='file'
                              name="myLogoCompany" 
                              onChange={onChangeLogo}
                            />
                          </>
                          }
                      </div>     
                      <Form noValidate validated={isOk} onSubmit={onSubmit}>
                            <Row className="mb-3">
                              <Form.Group  controlId="validationCustom01">
                                <Form.Label>Nombre Companía</Form.Label>
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
                              <Form.Group  controlId="validationCustom01">
                                <Form.Label>Ubicación</Form.Label>
                                <Form.Control
                                  required
                                  type="text"
                                  name='ubicacion'
                                  onChange={onChange}
                                  placeholder="Ingrese Ubicación"
                                  value={ubicacion}
                                
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
                            <Button type="button" style={{marginRight:'10px'}} onClick={reset} >Nueva Companía</Button>
                            <Button 
                                    onClick={deleteData}
                                    type='button' 
                                    style={id==='' ? {display:'none'} : {}}
                            >Eliminar
                            </Button>
                      </Form>       
                    </div> 

                    <div className={style['cont-right-company']}  > 
                      <div className={style['buscador-company']}>
                        <Buscador filter={filter} paramBusqueda={`Nombre , Descripción, Status`}/>
                      </div>
                      <div
                
                       style={{flexBasis:'90%'}}
                       >
                        <h1>LISTADO DE COMPANIAS</h1>
                        <div style={{overflowY:'auto' , height:'73vh'}} >
                          <table className={style['table-listado']} >
                            <thead>
                                <tr>
                                    <th>NOMBRE</th>
                                    <th>DESCRIPCION</th>
                                    <th>UBICACION</th>
                                    <th>STATUS</th>
                                </tr>
                            </thead>
                            <tbody >
                            {  
                               copiaCompany.map((company,indx)=>(
                                <tr key={indx} 
                                    className='animate__animated animate__fadeIn' 
                                    onClick={e=>showData(indx)} 
                                >
                                    <td
                                    >
                                      {company.nombre}
                                    </td>
                                    <td>
                                      {company.descripcion}
                                    </td>
                                    <td>
                                      {company.ubicacion}
                                    </td>
                                    <td>
                                      {company.status}
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
