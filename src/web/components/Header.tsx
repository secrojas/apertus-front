
import insta from '../../assets/imgs/theme/icons/insta.svg'
import linked from '../../assets/imgs/theme/icons/linked.svg'


import { useAppSelector, useAppDispatch } from '../../reducers/hooks/useRedux';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { startLogout } from '../../reducers/authSlice';
import { getConfig } from '../../reducers/general';


export const Header = () => { 

  const dispath = useAppDispatch();

  const [clicked, setClicked] = useState(false)
  const { isInView } = useAppSelector(state=>state.globalSlice)
  const { user, status } = useAppSelector(state=>state.authSlice)
  const { config } = useAppSelector(state=>state.globalSlice)

  useEffect(() => {
    
   dispath(getConfig());
   
  }, [])
  


   const burgerClick = ()=>{
    clicked ? setClicked(false) : setClicked(true)
   }
   const burgerLiClick =()=>{
    setClicked(false);
   }
    
  return ( 
     
    <>

        <header className={`header sticky-bar ${ isInView || clicked ? 'stick' : ''  }`} >
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                             <NavLink 
                                to={'/'}
                                style={{cursor:'pointer'}}
                            >
                                <img className='footer-logo' alt="apertus" src={config.logo} style={{width:'150px',height:'30px',  objectFit:'contain'}} />
                            </NavLink>    
                            </div>
                        </div>
                        <div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li> 
                                          <NavLink 
                                                to={'/nosotros'}
                                                style={{cursor:'pointer'}} 
                                          >
                                            Nosotros     
                                          </NavLink>    
                                        </li>
                                        <li>
                                          <NavLink 
                                                to={'/servicios'}
                                                style={{cursor:'pointer'}}
                                          >
                                            Servicios    
                                          </NavLink>    
                                        </li>
                                        <li>
                                           <NavLink 
                                                    to={'/servicios/academia'}
                                                    style={{cursor:'pointer'}}
                                           >
                                            Academia
                                           </NavLink>    
                                        </li>
                                        <li>
                                           <NavLink 
                                                    to={'/cargaCv'}
                                                    style={{cursor:'pointer'}}
                                           >
                                            Cargá tu Cv
                                           </NavLink>    
                                        </li>
                                        <li>
                                           <NavLink 
                                                    to={'/postulaciones'}
                                                    style={{cursor:'pointer'}}
                                           >
                                            Búsquedas Activas
                                           </NavLink>    
                                        </li>
                                        <li>
                                          <NavLink 
                                                    to={'/equipo'}
                                                    style={{cursor:'pointer'}}
                                           >
                                            Equipo    
                                          </NavLink>    
                                        </li>
                                        <li>
                                          <NavLink  
                                                    className='contactClass'
                                                    to={'/contacto'}
                                                    style={{cursor:'pointer',color:'white',padding:8,marginTop:5}}
                                          >
                                               Contactate  
                                          </NavLink>   
                                        </li>
                                        { status === 'not-auth' &&
                                          <li>
                                            <NavLink 
                                                      to={'/login'}
                                                      style={{cursor:'pointer'}}
                                            >
                                                Ingresar    
                                            </NavLink>    
                                          </li>
                                        }
                                        <li>
                                          <a href={config.linkedin} target='_blank' style={{padding:'0px'}} >
                                            <img className="iconos" src={linked} alt="linkedin" />
                                          </a>         
                                        </li> 
                                        <li>
                                          <a href={config.instagram} target='_blank' style={{padding:'0px'}} >
                                            <img className="iconos" src={insta} alt="instagram" />
                                          </a> 
                                        </li>  
                                          {
                                            user.rol === 'candidato' && 
                                            <>
                                              <li style={{marginLeft:'0px'}} >
                                                <NavLink 
                                                        to={'/perfil'}
                                                        style={{cursor:'pointer', padding:'14px 5px 10px'}}
                                                  >
                                                  Perfil
                                                </NavLink>
                                              </li>
                                              
                                              <li style={{marginLeft:'0px'}} onClick={e=>dispath(startLogout())}>
                                                <NavLink 
                                                        to={'/'}
                                                        style={{cursor:'pointer', padding:'14px 5px 10px'}}
                                                 >
                                                  Logout  
                                                </NavLink>
                                              </li>          
                                            </>
                                          }
                                    </ul>
                                </nav>
                            </div>
                            {/* menu responsive */}
                            <div className={`icon nav-icon-5 ${clicked ? 'open' : ''}`} onClick={burgerClick}>
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                            {/* end menu responsive */}
                        </div>
                    </div>
                </div>
        </header>
        <div className={clicked ? 'menu-burger-on' : 'menu-burger-off'}>
   
          <ul>
                  
                <li onClick={burgerLiClick}> 
                  <NavLink 
                        to={'/nosotros'}
                        style={{cursor:'pointer'}} 
                  >
                    Nosotros     
                  </NavLink>    
                </li>
                <li onClick={burgerLiClick} >
                  <NavLink 
                        to={'/servicios'}
                        style={{cursor:'pointer'}}
                  >
                    Servicios    
                  </NavLink>    
                </li>
                <li onClick={burgerLiClick}>
                    <NavLink 
                            to={'/servicios/academia'}
                            style={{cursor:'pointer'}}
                    >
                      Academia
                    </NavLink>    
                </li>
                <li onClick={burgerLiClick}>
                    <NavLink 
                            to={'/cargaCv'}
                            style={{cursor:'pointer'}}
                    >
                    Cargá tu Cv
                    </NavLink>    
                </li>               
                
                <li onClick={burgerLiClick} >
                  <NavLink 
                            to={'/postulaciones'}
                            style={{cursor:'pointer'}}
                  >
                      Búsquedas Activas   
                  </NavLink>    
                </li>
                <li onClick={burgerLiClick} >
                  <NavLink 
                            to={'/equipo'}
                            style={{cursor:'pointer'}}
                  >
                      Equipo    
                  </NavLink>   
                </li>
                <li onClick={burgerLiClick} >
                  <NavLink  
                            className='contactClass'
                            to={'/contacto'}
                            style={{cursor:'pointer',color:'white'}}
                  >
                      Contactate  
                  </NavLink>                    
                </li>
                { status === 'not-auth' &&
                      <li onClick={burgerLiClick} >
                        <NavLink 
                                  to={'/login'}
                                  style={{color:'black', fontWeight:'bold',paddingTop:'10px'}}
                        >
                            Ingresar    
                        </NavLink>    
                      </li>
                   }
                  
                  {
                      user.rol === 'candidato' && 
                      <>
                        <li style={{marginLeft:'0px'}} onClick={burgerLiClick} >
                          <NavLink 
                                  to={'/perfil'}
                                  style={{ color:'black', fontWeight:'bold'}}
                            >
                            Perfil
                          </NavLink>
                        </li>
                        
                        <li style={{marginLeft:'0px'}} onClick={e=>{ burgerClick(); dispath(startLogout())}}>
                          <NavLink 
                                  to={'/'}
                                  style={{ color:'black', fontWeight:'bold'}}
                            >
                            Logout  
                          </NavLink>
                        </li>          
                      </>
                  }
                <li onClick={burgerLiClick} >
                 <a href={config.linkedin} target='_blank' ><img className="iconos" src={linked} alt="linkedin" /></a> 
                 <a href={config.instagram} target='_blank' ><img className="iconos" src={insta} alt="instagram" /></a> 
                </li> 
            </ul>
        </div>

    </>
  )
}
