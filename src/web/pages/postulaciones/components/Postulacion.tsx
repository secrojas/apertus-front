

import style from '../css/postulacion.module.css'
import logo from '../../../../assets/imgs/jobs/avatar2.png'
import { images } from '../assets/images'
import { usePostulaciones } from '../../../hooks/usePostulaciones';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';

 

 

export const Postulacion = () => {

  const { enviarPostulacion , salirDePostulacion ,job, isPost } = usePostulaciones();

  const { dollar, iconJob, location, time } =images;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <div className={style.container}>
      <div className={style.content} > 
        <div className={style['content-left']}>
            <div className={style.detalle}>
              <div dangerouslySetInnerHTML={job && {__html: job.descLarge}}  ></div>
            </div>
        </div>
        <div className={style['content-right']} >
            <div className={style['card-job']}>
              <div className={style['card-job--section1']}>
                  <div className={style['card-job--section1--title']} >
                    <div className={style['card-job--section1--title-logo']}>
                      <img alt='logo' src={logo} style={{width:'60px'}} />
                    </div>
                    <div className={style['card-job--section1--title-inner']} >
                      <div className={style['card-job--section1--title-inner-h1']} >
                        <h1>{job?.titulo}</h1>
                      </div>
                      <div className={style['card-job--section1--title-inner-h2']} >
                        {job?.compania}
                      </div>
                    </div>
                  </div>
                  <div className={style['card-job--section1--desc']} >
                    {job?.descShort}
                  </div>
                  <div className={style['card-job--section1--foot']} >

                  {
                   isPost ?  
                    <button
                       onClick={e=>enviarPostulacion(job?._id!)}
                       type='button'
                       className= {`${style.btn} ${style['btn-default']}  animate__animated animate__fadeInUp`}
                    >Postularme</button> :
                    <button
                        onClick={e=>salirDePostulacion(job?._id!)}
                        type='button'
                        className= {`${style.btn} ${style['btn-default']}  animate__animated animate__fadeInUp`}
                        style={{backgroundColor:'black', color:'white'}}
                        >Postulado</button> 

                  }
                  </div>
                  <span className={style.line} ></span>
              </div>
              <div className={style['card-job--section2']}>
                <div className={style['card-job--section2-item']} >
                    <div className={style['card-job--section2-item--logo']} >
                      <img alt='job' src={iconJob}/>
                    </div>
                    <div className={style['card-job--section2-item--desc']} >
                      <h1>Disponibilidad</h1>
                      <p>{job?.disponibilidad}</p>
                    </div>
                </div>
                <div className={style['card-job--section2-item']} >
                    <div className={style['card-job--section2-item--logo']} >
                     <img alt='job' src={location}/>
                    </div>
                    <div className={style['card-job--section2-item--desc']} >
                      <h1>Ubicación</h1>
                      <p>{job?.locacion}</p>
                    </div>
                </div>
                <div className={style['card-job--section2-item']} >
                    <div className={style['card-job--section2-item--logo']} >
                      <img alt='job' src={dollar}/>
                    </div>
                    <div className={style['card-job--section2-item--desc']} >
                      <h1>Salario</h1>
                      <p>${job?.salario}</p>
                    </div>
                </div>
                <div className={style['card-job--section2-item']} >
                    <div className={style['card-job--section2-item--logo']} >
                     <img alt='job' src={time}/>
                    </div>
                    <div className={style['card-job--section2-item--desc']} >
                      <h1>Tiempo</h1>
                      <p></p>
                    </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <ToastContainer
            position="bottom-left"
         />
    </div>
  )
}
