
import Form from 'react-bootstrap/Form';
import { JobsCard } from '../../components/JobsCard'
import style from '../styles/admin.module.css'
import {img} from '../assets/images'
import { useJobs } from '../hooks/useJobs';
import { ToastContainer } from 'react-toastify';
import { MyEditor } from '../components/MyEditor';
import { useAppSelector } from '../../reducers/hooks/useRedux';
import { useNavigate } from 'react-router-dom';
import { Buscador } from '../../components/Buscador';



export const Jobs = () => {

  const navigate = useNavigate();

  const { companies , categories, technologies } = useAppSelector(state => state.jobSlice)

  const { descOn, copiaJobs, showJob , deleteJob, editDesc , id, titulo, categoria, tecnologia, compania, locacion, salario, status, disponibilidad, tipo,  descShort,
          isTitulo,isCategoria, isTecnologia, isCompania, isLocacion, isSalario, isStatus, isDisponibilidad, isTipo,  isDescShort, descLarge, setDescLarge,
          onChange, onSubmit, reset, postulantes , onChangeSelect ,filter } = useJobs();

  const data ={
    titulo,
    compania,
    locacion,
    disponibilidad,
    tiempo:'',
    descShort,
    tipo
  } 

 
 
    
  return (
    
    <>
        <div className={descOn ? style.draft : style['draft-off'] } >
            <MyEditor descLarge={descLarge} setDescLarge={setDescLarge} />
            <button className={style['btn-edit']} title='Minimizar Ventana' onClick={editDesc} >
              <img alt='descripcion' src={img.edit}/>
            </button>
        </div> 
        <div className={descOn ? style['panel-content-off'] : style['panel-content']} >
          <div className={style['cont-layout']}>
            <div className={style['cont-up--center']} >        
                      <Form className={style['cont-up--item2--50']} onSubmit={onSubmit} >
                        <div className={style['cont-up--item2--up']}>
                          <div className={style['cont-up--item2--up--left']}>
                            <Form.Control
                            className={isTitulo===false ? style['border-orange'] : style['border-grey']}
                            placeholder='Título'
                            name='titulo'
                            value={titulo}
                            onChange={onChange}
                            style={{width:'100%'}}
                              />
                            <Form.Control
                            className={isLocacion===false ? style['border-orange'] : style['border-grey']}
                            placeholder='Locación'
                            name='locacion'
                            value={locacion}
                            onChange={onChange}
                            style={{width:'100%'}}
                              />
                            <Form.Select
                            className={isCategoria===false ? style['border-orange'] : style['border-grey']}
                            placeholder='Categoría'
                            name='categoria'
                            value={categoria}
                            onChange={onChangeSelect}
                            style={{width:'49%'}}
                              >
                                <option value='ninguna'>Categoría</option>
                                {
                                  categories.map((category,indx) =>(
                                    <option key={indx}  value={category.nombre}>{category.nombre}</option>
                                  ))
                                }
                              </Form.Select>
                            <Form.Select
                            className={isTecnologia===false ? style['border-orange'] : style['border-grey']}
                            placeholder='Tecnología'
                            name='tecnologia'
                            value={tecnologia}
                            onChange={onChangeSelect}
                            style={{width:'49%'}}
                              >
                                 <option value='ninguna'>Tecnología</option>
                                {
                                  technologies.map((tecnology,indx) =>(
                                    <option key={indx} value={tecnology.nombre}>{tecnology.nombre}</option>
                                  ))
                                }
                              </Form.Select>
                            <Form.Select
                             className={isCompania===false ? style['border-orange'] : style['border-grey']}
                             placeholder='Companía'
                             name='compania'
                             value={compania}
                             onChange={onChangeSelect}
                             style={{width:'49%'}}
                            >
                              <option value='ninguna'>Companía</option>
                              {
                                companies.map((company,indx) =>(
                                  <option key={indx} value={company.nombre}>{company.nombre}</option>
                                ))
                              }
                            </Form.Select>
                            <Form.Control
                            className={isSalario===false ? style['border-orange'] : style['border-grey']}
                            placeholder='Salario'
                            name='salario'
                            value={salario}
                            onChange={onChange}
                            style={{width:'49%'}}
                              />
                          </div>
                          <div className={style['cont-up--item2--up--right']} >
                            <div>
                              <label className={isStatus === false ? style['color-orange'] : ''}  >
                                <Form.Check
                                type="radio"
                                id='status'
                                name="status" 
                                onChange={onChange}
                                value="Activo"
                                checked={status==="Activo"? true : false}
                                style={{display:'inline'}}
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
                                style={{display:'inline'}}
                                />
                                Inactivo
                              </label>
                            </div>
                            <div>
                              <label className={isDisponibilidad === false ? style['color-orange'] : ''} >
                                <Form.Check 
                                type="radio"
                                id='disponibilidad'
                                name="disponibilidad"
                                onChange={onChange}
                                value="Full-Time"
                                checked={disponibilidad==="Full-Time"? true : false}
                                style={{display:'inline'}}
                                />
                                Full-Time
                              </label>
                              <label className={isDisponibilidad === false ? style['color-orange'] : ''} >
                                <Form.Check
                                type="radio"
                                id='disponibilidad'
                                name="disponibilidad"
                                onChange={onChange}
                                value="Part-Time"
                                checked={disponibilidad==="Part-Time"? true : false}
                                style={{display:'inline'}}
                                />
                                Part-Time
                              </label>
                            </div>
                            <div>
                              <label className={isTipo === false ? style['color-orange'] : ''} >
                                <Form.Check
                                type="radio"
                                id='tipo'
                                name="tipo" value="Remoto"
                                onChange={onChange}
                                checked={tipo==="Remoto"? true : false}
                                style={{display:'inline'}}
                                />
                                Rem
                              </label>
                              <label className={isTipo === false ? style['color-orange'] : ''} >
                                <Form.Check
                                type="radio"
                                id='tipo'
                                name="tipo"
                                onChange={onChange}
                                value="Hibrido"
                                checked={tipo==="Hibrido"? true : false}
                                style={{display:'inline'}}
                                />
                                Híbrido
                              </label>
                              <label className={isTipo === false ? style['color-orange'] : ''} >
                                <Form.Check
                                type="radio"
                                id='tipo'
                                name="tipo"
                                onChange={onChange}
                                value="Presencial"
                                checked={tipo==="Presencial"? true : false}
                                style={{display:'inline'}}
                                />
                                Pres
                              </label>
                            </div>
                          </div>     
                        </div>
                        <div className={style['cont-up--item2--down']} >
                            <Form.Control
                              as='textarea'
                              className={isDescShort===false ? style['border-orange'] : style['border-grey']}
                              name='descripcionCorta'
                              placeholder='Descripción Corta'
                              value={descShort}
                              onChange={onChange}
                              
                            />
                            <div>
                              <button 
                                title='Descripción Larga'
                                type='button'
                                onClick={editDesc}
                              >
                              <img alt='descripcion' src={img.edit}/>
                              </button>
                              <button 
                                title='Borrar Publicación'
                                onClick={deleteJob}
                                type='button' 
                                style={id==='' ? {display:'none'} : {}}>
                                  <img alt='descripcion' src={img.del}/>
                              </button>
                              <button type='submit' title='Guardar Publicación'><img alt='descripcion' src={img.save}/></button>
                              <button type='button' title='Nueva Publicación' onClick={reset} ><img alt='descripcion' src={img.add}/></button>
                            </div>
                        </div>
                      </Form>  
                      <div className={style['cont-up--item1--40']} >
                        <h5>Preview</h5>
                        <JobsCard data={data}/>
                      </div>   
                    </div> 
                    <div className={style['buscador-jobs']}>
                            <Buscador filter={filter} paramBusqueda={'Titulo, Categoría , Companía'} />
                    </div>
                    <div className={style['cont-down']} >
                    
                      <div className={style['cont-down-left']}>
                          
                          {/* <h1>EMPLEOS DISPONIBLES</h1> */}
                          <div style={{overflowY:'auto', height:'50vh'}}>
                            <table className={style['table-listado']} >
                              <thead >
                                  <tr>
                                      <th>EMPLEOS DISPONIBLES</th>
                                      <th>CATEGORIA</th>
                                      <th>COMPANIA</th>
                                  </tr>
                              </thead>
                              <tbody>
                              {  
                                copiaJobs.map((job:{titulo:string,compania:string,categoria:string},indx)=>(
                                  <tr key={indx} 
                                      className='animate__animated animate__fadeIn' 
                                      onClick={e=>showJob(indx)} 
                                  >
                                      <td  >   
                                        {job.titulo}
                                      </td>
                                      <td  >
                                        {job.categoria}
                                      </td>
                                      <td  >
                                        {job.compania}
                                      </td>
                                  </tr>
                                ))
                              }
                              </tbody>              
                            </table>
                          </div>
                      </div>
                      <div className={style['cont-down-right']}>
                      {/* <h1>POSTULANTES</h1> */}
                      <div style={{overflowY:'auto', height:'50vh'}} >
                        <table className={style['table-listado']} >
                          <thead >
                              <tr>
                                  <th>POSTULANTES</th>
                              </tr>
                          </thead>
                          <tbody>
                             {
                                 postulantes.map((post,indx)=>(
                                  <tr key={post._id} 
                                      className='animate__animated animate__fadeIn'  
                                      onClick={e=>navigate(`/admin/users?email=${post.email}`)}
                                  >
                                      <td>
                                        {post.nombre}
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
