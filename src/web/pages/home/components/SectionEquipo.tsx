import triangle from '../../../../assets/imgs/theme/service-arrow.png'
import { EquipoDatosPerfil } from '../../equipo/components/EquipoDatosPerfil'
import fotoJavi from '../../../../assets/imgs/teamMembers/javi.jpeg'
import fotoAnabella from '../../../../assets/imgs/teamMembers/Anabella.jpeg'
import fotoMartin from '../../../../assets/imgs/teamMembers/Martin.jpeg'
import fotoFlorencia from '../../../../assets/imgs/teamMembers/Florencia-Fiaschetti.jpeg'
import fotoRocio from '../../../../assets/imgs/teamMembers/Rocio-Mastromey.jpeg'
import fotoFacundo from '../../../../assets/imgs/teamMembers/Facundo-Varela.jpeg'
import fotoSantiago from '../../../../assets/imgs/teamMembers/Santiago-Rodriguez.jpeg'
import fotoClaudia from '../../../../assets/imgs/teamMembers/Claudia-Blanco.jpeg'
import fotoValeria from '../../../../assets/imgs/teamMembers/Valeria.jpeg'
import fotoRita from '../../../../assets/imgs/teamMembers/Rita.jpeg'
import fotoGisele from '../../../../assets/imgs/teamMembers/Gisele.jpeg'
import fotoRenee from '../../../../assets/imgs/teamMembers/Renee-Cobo.jpeg'
import fotoConstanza from '../../../../assets/imgs/teamMembers/constanza-paz.jpeg'
import fotoGabriela from '../../../../assets/imgs/teamMembers/gabriela-magnoler.jpg'

export const SectionEquipo = () => {
  return (
 
    <div className='equipo-container'>
        <div className='equipo-content'>
            <div className='equipo-content-title' >
            <img className='equipo-triangle' src={triangle} alt='triangulo'></img>
            <h2 className="section-title  wow animate__animated animate__fadeInUp">Nuestro Equipo</h2>
            </div>
            <span className='equipo-content-desc' >
                    Conformado por profesionales con sólida experiencia en gestión de recursos humanos,<br/>
                     implementación de modelos de Mejora Contínua, Gestión<br/> 
                    por Procesos, Gestión del Cambio y Transformación Digital con el objetivo de construir<br/>
                    organizaciones que propongan una mejor experiencia al cliente y a sus colaboradores.
            </span>
            <span className='equipo-content-responsive' >
                    Conformado por profesionales con sólida experiencia en gestión de recursos humanos,
                    metodología Lean Six Sigma, implementación de modelos de Mejora Contínua, Gestión 
                    por Procesos, Gestión del Cambio y Transformación Digital con el objetivo de construir
                    organizaciones que propongan una mejor experiencia al cliente y a sus colaboradores.
            </span>
        </div>
        <div className='equipo-integrantes'>
          <EquipoDatosPerfil nombre='Javier Durán' puesto='Socio & Director comercial' imagen={fotoJavi}/>
          <EquipoDatosPerfil nombre='Anabella Lozano' puesto='Socia & Directora de RRHH' imagen={fotoAnabella}/>
          <EquipoDatosPerfil nombre='Martín Vallejo' puesto='Socio & Director de Proyectos' imagen={fotoMartin}/>
          <EquipoDatosPerfil nombre='Valeria Ramajo' puesto='Coordinadora Operativa' imagen={fotoValeria}/>
          <EquipoDatosPerfil nombre='Gabriela Magnoler' puesto='Asesora' imagen={fotoGabriela}/>
          <EquipoDatosPerfil nombre='Reneé Cobo' puesto='Recruiter & Consultora' imagen={fotoRenee}/>
          <EquipoDatosPerfil nombre='Claudia Blanco' puesto='Recruiter & consultora' imagen={fotoClaudia}/>
          <EquipoDatosPerfil nombre='Florencia Fiaschetti' puesto='Recruiter' imagen={fotoFlorencia}/>
          <EquipoDatosPerfil nombre='Rocío Maestromey' puesto='Recruiter & Consultora' imagen={fotoRocio}/>
          <EquipoDatosPerfil nombre='Facundo Varela' puesto='Recruiter' imagen={fotoFacundo}/>
          <EquipoDatosPerfil nombre='Santiago Rodríguez' puesto='Recruiter & Consultor' imagen={fotoSantiago}/>
          <EquipoDatosPerfil nombre='Constanza Paz Campos' puesto='Recruiter & Consultora' imagen={fotoConstanza}/>
          <EquipoDatosPerfil nombre='Gisele Hassan' puesto='Consultora' imagen={fotoGisele}/>  
          <EquipoDatosPerfil nombre='Rita Degiovanni' puesto='Consultora' imagen={fotoRita}/>                  
        </div>
    </div>

  )
}
