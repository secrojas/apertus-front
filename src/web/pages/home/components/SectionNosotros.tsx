import teamWork from '../../../../assets/imgs/banner/team-work.png'
import { useNavigate } from 'react-router-dom';

export const SectionNosotros = () => {

    const navigate = useNavigate();

    const handleOnClick =()=>{
        navigate('/contacto')
    }

  return (
    <section id='nosotros'>
        <div className='solutions-banner'>
            <div className='solutions-container'>
                <div className='solutions-container--left'>
                    <div className='solutions-img'><img alt='team-work' src={teamWork} /></div>
                </div>

                <div className='solutions-container--right'>
                    <div className='solutions-desc' >
                            <h1 className="heading-banner wow animate__animated animate__fadeInUp description"><span style={{fontSize: '1rem' , fontWeight:500 ,  color:"#fff"}}>Apertus</span><br/>Soluciones en<br/>Recursos Humanos</h1>
                            <div className="banner-descripcion wow animate__animated animate__fadeInUp description2" data-wow-delay=".1s">
                                Apertus, nace con la concepción de que las <br/> 
                                relaciones estratégicas con los clientes, internos y<br/>
                                externos, están en constante evolución. En este <br/>
                                contexto definimos un modelo de consultoría<br/>
                                innovador donde la gestión de los recursos<br/>
                                humanos, los procesos y la experiencia de cliente<br/>
                                están integrados a la implementación de nuevas<br/>
                                tecnologías que permiten a las organizaciones<br/>
                                atravesar las transformaciones requeridas por<br/>
                                entornos cada vez más desafiantes.<br/><br/>
                                <button 
                                     className="btn btn-default btn-find"
                                     style={{background:'#000' ,fontSize:'1em' ,color:'#fff',fontWeight:'500'}}
                                     onClick={handleOnClick}
                                >Contactate</button>
                            </div> 
                            <div className="banner-description--resp wow animate__animated animate__fadeInUp description2" data-wow-delay=".1s">
                                Apertus, nace con la concepción de que las relaciones estratégicas con los clientes,
                                internos y externos, están en constante evolución. En este contexto definimos un
                                modelo de consultoría innovador donde la gestión de los recursos humanos, los
                                procesos y la experiencia de cliente están integrados a la implementación de
                                nuevas tecnologías que permiten a las organizaciones atravesar las transformaciones
                                requeridas por entornos cada vez más desafiantes.<br/><br/>
                                <button  
                                    className="btn btn-default btn-find"
                                    style={{background:'#000' ,fontSize:'1em' ,color:'#fff',fontWeight:'600'}}
                                    onClick={handleOnClick}
                                >Contactate</button>
                            </div> 
                    </div> 
                </div>

            </div>
        </div>
</section>
  )
}
