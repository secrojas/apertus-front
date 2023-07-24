
import { Route, Routes, Navigate } from 'react-router-dom';
import { Footer, Header } from '../components'
import ProtectedRoute from './ProtectedRoute';
import { CargaCvPage } from '../pages/cargaCv/cargaCvPage';
import { ContactoPage, EquipoPage, Home, NosotrosPage,
         PerfilPage, PostulacionesPage, ServicesPage } from '../pages';


export const Web = () => {


  
  return (
    <div className='contenedor'>
     
      <Header/>

        <Routes>
          <Route path='/' element={<Home />}/>  
          <Route path='/servicios/*' element={<ServicesPage />}/>
          <Route path='/postulaciones/*' element={<PostulacionesPage />}/> 
          <Route path='/equipo' element={<EquipoPage />}/>
          <Route path='/cargaCv' element={<CargaCvPage />}/>
          <Route path='/contacto' element={<ContactoPage />}/>
          <Route path='/nosotros' element={<NosotrosPage/>}/>
   
          <Route element={<ProtectedRoute/>}>
            <Route path='/perfil/*' element={<PerfilPage/>}/>
          </Route>
          
          <Route path="/*" element={<Navigate to='/' replace/>} /> 
        </Routes>

        <Footer/>
    </div>
  )
}
