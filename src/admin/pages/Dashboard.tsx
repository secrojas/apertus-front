import { DashboardCard } from '../components/DashboardCard'
import { useDashboard } from '../hooks/useDashboard'
import style from '../styles/admin.module.css'
import {img} from '../assets/images'


export const Dashboard = () => {

  const {cantCandidatos, cantJobs, cantPost, user , cantContactos} = useDashboard();

  return ( 
  <div className={style['panel-content']}>
    <div className={style.center} >
      <div className={style.dashboardTitle}>
        <h2 style={{fontSize:'30px', fontWeight:'300'}} >Dashboard</h2>
        <br/>
        <p style={{display:'flex', alignItems:'center', gap:'5px'}} >
          Usuario Autenticado : {user.nombre}
          <img src={img.check}/>  
        </p>
      </div>
      <div className={style.dashboardCards}>
        <DashboardCard data={{titulo:'Candidatos', cantidad: cantCandidatos, backColor:'#121111c8', color:'white', url:'general'}} />
        <DashboardCard data={{titulo:'Postulaciones',cantidad:cantPost, backColor:'#f1edfd' , url:'users'}} />
        <DashboardCard data={{titulo:'Contacto - Servicios',cantidad:cantContactos, backColor:'#f6a420bc' , url:'contacts'}} />
        <DashboardCard data={{titulo:'Trabajos', cantidad:cantJobs, backColor:'#121111c8', color:'white' , url:'jobs'}} />
      </div>
    </div>
  </div> 
  )
}
