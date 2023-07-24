
import { Navigate, Route, Routes } from 'react-router-dom'
import { SideBar } from '../components';
import { Categories, Companies, Dashboard, Jobs, Technologies, Users, Contactos, RedesSociales , ListadoGeneral } from '../pages';

import style from '../styles/admin.module.css'
import placa from '../../auth/assets/placa.png'



const Admin = () => {

  
  return (
    
      
        <div className= {style['flex-layout-panel']}>
          <SideBar />
          <Routes>
              <Route path='/dashboard' element={<Dashboard />}/>
              <Route path='/jobs' element={<Jobs/>}/>
              <Route path='/categories' element={<Categories/>}/>
              <Route path='/technologies' element={<Technologies/>}/>
              <Route path='/companies' element={<Companies/>}/>
              <Route path='/users' element={<Users/>}/>
              <Route path='/contacts' element={<Contactos/>}/>
              <Route path='/redesSociales' element={<RedesSociales/>}/>
              <Route path='/general' element={<ListadoGeneral/>}/>
              <Route path='/*' element={<Navigate to='/admin/dashboard' replace/>}/>
          </Routes>
          <img alt='logo' src={placa}
           style={{
            position:'fixed',
            bottom:'10px',
            right:'10px',
            width:'50px'
            }}/>
        </div> 
   
  
  )
  
}

export default Admin; 