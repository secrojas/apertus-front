import { useNavigate } from 'react-router-dom';


export const SectionContacto = () => {

    const navigate = useNavigate();

    const handleOnClick =()=>{
        navigate('/contacto')
    }

  return (

    <section>
        <div className='contacto-container' >
            <div className='contacto-content' >
                
                <div className='contacto-content-title'>
                    <h2 className="text-center  wow animate__animated animate__fadeInUp">Contactate.</h2>
                </div>

                <span className='contacto-content-desc' >
                <b style={{fontWeight:'bold'}} >Recursos Humanos</b> especializada<br/>
                en atracción de <b style={{fontWeight:'bold'}} >talentos.</b>
                </span>

                <div className='contacto-content-input'>
                    <input className='contacto-input--text' placeholder='rrhh@apertus.com.ar' disabled />
                    <button className="btn btn-default btn-find contacto-boton" 
                            style={{background:'#000' ,fontSize:'16px' ,color:'#fff',fontWeight:'300',paddingLeft:'40px',paddingRight:'40px'}}
                            onClick={handleOnClick}
                            >Enviar</button>
                </div> 
            </div>
        </div>
    </section>

  )
}
