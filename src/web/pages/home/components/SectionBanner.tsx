import { useNavigate } from "react-router-dom"


export const SectionBanner = () => {
 
    const navigate = useNavigate();

  return (
       <section id="section-box-desktop" className="section-box">
            <div className="banner-hero hero-1">

                <div className="banner-inner">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="block-banner">
                                <h1 className=" text-center wow animate__animated animate__fadeInUp" style={{marginBottom:'50px'}}>Soluciones innovadoras en<br/>Gestión del <span style={{color:"#f6a41e"}}>Capital Humano</span></h1>
                                <div className="banner-description text-center mt-30 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                    <div className="subTitle-text">
                                        Mejora de Procesos y Experiencia de Clientes.
                                    </div>
                                    <br/><br/>
                                    <button className="btn btn-default btn-find" onClick={e=>navigate(`/servicios`, {replace:true})} >Nuestros Servicios</button>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
         </section> 
  )
}
  