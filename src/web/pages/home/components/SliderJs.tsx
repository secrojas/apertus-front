import '../../../css/home.css'

import Slider from "react-slick"
import '../../../../../node_modules/slick-carousel/slick/slick.css';
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";

import triangle from '../../../../assets/imgs/theme/service-arrow.png'
import logo from '../../../../assets/imgs/slider/logo/facebook.svg'
import { logosClientes } from '../../../../assets/imgs/slider/logo/logos';

 
export const SliderJs = ({name}:{name:string}) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay:true,
    autoplaySpeed:5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id='slider' className='slider slider-display'>

       {/* Slide Title */}
        <div className='slider--title' style={{marginBottom:'30px'}}>
             <img className='cliente-triangle' src={triangle} alt='triangulo'></img>
             <h2 className="section-title text-center  wow animate__animated animate__fadeInUp">{name}</h2>
        </div>

       {/* Slide */}
        <div className="container slide-desk">
          <Slider {...settings}>

            {
              Object.entries(logosClientes).map(([key,value])=>(
                <div className="slider-card" key={key}>
                  {
                    name ==='Clientes' ?
                    <img alt="asteroid" src={value} className='slider-img'/> :
                    <img alt="logo" src={logo} className='slider-img'/>
                  }
                </div>
              ))
            }
            
          </Slider>
        </div>
    </section>
  )
}


      