
import style from '../styles/admin.module.css'
import { Buscador } from '../../components/Buscador'
import { useContactos } from '../hooks/useContactos';


export const Contactos = () => {

  const { contactos , getConsultas , consultas, filter} = useContactos();
  
  return (
    <div className={style['panel-content']}>
      <div className={style['cont-layout']}>

      <div className={style.buscador}>
          <Buscador filter={filter} paramBusqueda={`Nombre, Email , Localidad`} />
      </div>


        <div className={style['cont-down']} >
         
            <div className={style['contacto-1']}>
                <h1>LISTA DE CONTACTOS</h1>
                <div style={{overflowY:'auto', height:'60vh'}}>
                  <table className={style['table-listado']} >
                    <thead>
                        <tr>
                            <th>NOMBRE</th>
                            <th>EMAIL</th>
                            <th>TELEFONO</th>
                            <th>LOCALIDAD</th>
                        </tr>
                    </thead>
                    <tbody >
                       {
                        contactos.map((contacto,indx)=>(
                          <tr key={indx} 
                          className='animate__animated animate__fadeIn' 
                          onClick={e=>getConsultas(contacto.email)}
                          >
                          <td>   
                          {contacto.nombre}
                          </td>
                          <td>
                          {contacto.email}
                          </td>
                          <td>
                          {contacto.tel}
                          </td>
                          <td>
                          {contacto.localidad}
                          </td>
                      </tr>
                        ))
                       }
                    </tbody>              
                  </table>
                </div>
            </div>
            <div className={style['contacto-2']}>
              <h1>SUS CONSULTAS</h1>
              <div style={{overflowY:'auto', height:'60vh'}} >
                <table className={style['table-listado']} >
                      <thead >
                          <tr>
                              <th>SERVICIO</th>
                              <th>CONSULTA</th>
                          </tr>
                      </thead>
                      <tbody >
                      {
                        consultas.map((consulta,indx)=>(
                          <tr key={indx} 
                          className='animate__animated animate__fadeIn' 
                          >
                            <td style={{overflow:'hidden'}} > 
                          {consulta.servicio} : 
                          </td>
                          <td style={{overflow:'hidden'}} > 
                          {consulta.descripcion}
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
    </div>
  )
}
