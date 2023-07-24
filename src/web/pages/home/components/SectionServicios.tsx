import {services} from '../../objectos'
import triangle from '../../../../assets/imgs/theme/service-arrow.png'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../../reducers/hooks/useRedux';
import { service } from '../../../../reducers/serviciosSlice';


export const SectionServicios = () => {
  
    const navigate = useNavigate(); 
    const dispatch = useAppDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []) 
    
    return ( 
    
    <div className='servicios-container'>
            <div className='servicios-titulo'>
                <img className='servicios-triangle' src={triangle} alt='triangulo'></img>
                <h2 className="section-title   wow animate__animated animate__fadeInUp">Nuestros Servicios</h2>
            </div>
            <div className='servicios-content' >
                {
                    Object.entries(services).map(([key,value])=>(
                        <div key={key} className='services-card'  onClick={e=>{
                            dispatch(service(value.name));
                            navigate(`/servicios${value.to}`);
                        }} >
                            
                            <img className='services-card--img' alt='servicios' src={value.img} />
                            <div className='services-card--title' >
                                <h1>{value.name}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
    </div>

  )
}
