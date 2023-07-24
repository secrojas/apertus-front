import { useUsers } from '../hooks/useUsers'
import style from '../styles/admin.module.css'
import avatar from '../../assets/imgs/theme/avatar.png'
import cvIcon from '../assets/cv.png'
import { useNavigate } from 'react-router-dom'
import { Buscador } from '../../components/Buscador'


export const ListadoGeneral = () => {

 
 const navigate = useNavigate();

 const {candidatos, showData , nombre, email, tel ,cv, foto, localidad, filter, perfil } = useUsers();
 
 

  return (
    <div className={style['panel-content']}>
      <div className={style['cont-layout']}>

      <div className={style.buscador}>
          <Buscador filter={filter} paramBusqueda={'Nombre, Email , Localidad'}/>
      </div>


        <div className={style['cont-down']} >
         
            <div className={style['cont-down-1']}>
                <h1>LISTA DE USUARIOS</h1>
                <div style={{overflowY:'auto', height:'60vh'}}>
                  <table className={style['table-listado']} >
                    <thead>
                        <tr>
                            <th>NOMBRE</th>
                        </tr>
                    </thead>
                    <tbody >
                        {  
                            Object.entries(candidatos).map(([key,{nombre,email,foto}])=>(
                                <tr key={key} 
                                    className='animate__animated animate__fadeIn' 
                                    onClick={e=>showData(email)} 
                                >
                                    <td>
                                      {nombre}
                                    </td>
                                </tr>
                            )) 
                        }
                        
                    </tbody>              
                  </table>
                </div>
            </div>
            <div className={style['cont-down-2']}>
              <h1>CATEGORIA</h1>
              <div style={{overflowY:'auto', height:'60vh'}} >
                <table className={style['table-listado']} >
                      <thead >
                          <tr>
                              <th>CATEGORIA</th>
                          </tr>
                      </thead>
                      <tbody > 
                        <tr className='animate__animated animate__fadeIn'>
                           
                            {
                            
                            perfil  &&  <td> {perfil} </td>
                            
                            }
                        
                        </tr>                          
                      </tbody>              
                </table>
              </div>
            </div>
            <div className={style['cont-down-3']} >
              <h1>PERFIL</h1>
              <div className={style['cont-up']} >     
                  <div className={style['cont-up--item2']} >
                    {
                      foto!==''?
                      <img src={foto} />:
                      <img src={avatar} />
                    }
                  </div>     
              </div>   
              <div style={{overflowY:'auto', height:'55vh'}} >
                <table className={style['table-listado']} >

                      <tbody style={{textAlign:'initial'}} >
                        <tr>                         
                          <td style={{ fontWeight:'bold'}} >Nombre:</td>
                          <td>{nombre}</td>
                        </tr>   
                        <tr>
                          <td style={{ fontWeight:'bold'}} >Email:</td>
                          <td>{email}</td>
                        </tr>                  
                        <tr>
                          <td style={{ fontWeight:'bold'}} >Teléfono:</td>
                          <td>{tel}</td>
                        </tr>        
                        <tr> 
                              <td style={{ fontWeight:'bold'}} >Localidad:</td>
                              <td>{localidad}</td>
                        </tr>              
                        <tr>
                          
                              <td style={{fontWeight:'bold'}} >cv:</td>
                              <td >
                                { cv!=='' &&
                                  <>                     
                                      <a href={cv} target='_blank' style={{fontWeight:'600'}} > 
                                        <img alt='cv' src={cvIcon} style={{width:'20px',height:'20px'}} />
                                      </a>
                                  </>
                                }    
                             </td>
                        </tr>                     
                      </tbody>              
                </table>
              </div>
            </div>
            
        </div>

      </div>
    </div>
  )
}
