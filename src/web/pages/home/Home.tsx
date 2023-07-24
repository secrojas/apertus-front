import '../../css/home.css'
import 'animate.css';


import { useNavbar } from '../../hooks/useNavbar';
import { SliderJs, WhatsAppBtn } from '../../components';

import { SectionBanner, SectionNosotros, SectionServicios,
         SectionPostulaciones, SectionEquipo, SectionContacto } from './components';


export const Home = () => {
    
    const {servicio, postulaciones , equipo ,clientes} = useNavbar();
  
  return (
    
    <main className='main'> 
  
  
        <SectionBanner/>
    
        <SectionNosotros/>

  
        <div ref={clientes}>
            <SliderJs name={'Clientes'}/>
        </div>
    
        <section ref={servicio} >
            <SectionServicios/>
        </section> 

        <section ref={postulaciones}>
            <SectionPostulaciones/>
        </section>

        <section  ref={equipo}>
            <SectionEquipo/>
        </section>

        {/* <SliderJs name={'Partners'}/> */}
                  
        <SectionContacto/>          

        <WhatsAppBtn />        

    </main>

  )
}
