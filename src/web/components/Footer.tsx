import logo from '../../assets/imgs/theme/logo.png'
import linked from '../../assets/imgs/theme/icons/linked.svg'
import insta from '../../assets/imgs/theme/icons/insta.svg' 

import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../reducers/hooks/useRedux';

export const Footer = () => {
 
    const { config } = useAppSelector(state=>state.globalSlice)
    
  return (

           <footer className="mt-50 footer">
            <div className="footer-display">
            <div className="footer-up footer-div pb-15">
                <div className="footer-up--left" >
                <NavLink 
                    to={'/'}
                    style={{cursor:'pointer'}}
                >
                    <img className='footer-logo' alt="apertus" src={config.logo} style={{width:'150px',height:'30px',  objectFit:'contain'}} />
                </NavLink>    
                </div>
                <div className="footer-up-right" >
                    <ul className='footer-ul'>
                        <li className='liFooter'>
                            <NavLink 
                                to={'/nosotros'}
                                style={{cursor:'pointer'}}
                            >
                                Nosotros
                            </NavLink>      
                        </li>
                        <li className='liFooter'>
                            <NavLink 
                                to={'/servicios'}
                                style={{cursor:'pointer'}}
                            >
                                Servicios
                            </NavLink> 
                        </li>
                        {/* <li className='liFooter'>
                            <NavLink 
                                to={'/#'}
                                style={{cursor:'pointer'}}
                            >
                                Cargá tu Cv
                            </NavLink> 
                        </li> */}
                        <li className='liFooter'>
                            <NavLink 
                                to={'/postulaciones'}
                                style={{cursor:'pointer'}}
                            >
                                Búsquedas Activas
                            </NavLink> 
                        </li>
                        <li className='liFooter'>
                            <NavLink 
                                to={'/equipo'}
                                style={{cursor:'pointer'}}
                            >
                                Equipo
                            </NavLink> 
                        </li>
                        <li className='contactClass' >
                            <NavLink 
                                to={'/contacto'}
                                style={{cursor:'pointer',color:'white'}}
                            >
                                Contactate
                            </NavLink> 
                        </li> 
                    </ul>
                </div>
            </div>
            <div className="footer-down">
                <div className="footer-down--left" >
                    <a href={config.linkedin} target='_blank'><img className='pt-15' style={{width:'35px'}} src={linked} alt="linkedin" /></a>
                    <a href={config.instagram} target='_blank' ><img className='pt-15' style={{width:'35px'}} src={insta} alt="instagram" /></a>
                </div>
                <div className="footer-down-right" >
                     Copyright ©2023 . Todos los derechos reservados.
                </div>
            </div>
       </div>
    </footer>
 
  )
}
