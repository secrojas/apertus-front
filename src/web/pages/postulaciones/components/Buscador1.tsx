import style from '../css/buscador1.module.css'
import search from '../../../../assets/imgs/theme/icons/search.svg'
import { InputGroup, Form } from 'react-bootstrap';
import { Filtro } from './Filtro';
import { images } from '../assets/images'
import { useSearch } from '../../../hooks/useSearch';

export const Buscador1 = () => {

  const{buscar , reset,  byPost}=useSearch();

  return (
    <div className={style.layout}>
      <div className={style['layout-left']} >
        <InputGroup >
          <InputGroup.Text id="basic-addon1" > 
            <img alt='search' src={search}/>
          </InputGroup.Text>
          <Form.Control
            placeholder="Postulación"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={byPost}
          />
        </InputGroup>       
      </div>
      <Form className={style['layout-right']}>
        <div className={style.filtros}>
          <Filtro name='Disponibilidad' img={images.iconJob} data={['Full-Time', 'Part-Time']} />
          <Filtro name='Tipo' img={images.iconJob} data={['Remoto' , 'Híbrido' , 'Presencial']} />
          <Filtro name='Ubicación' img={images.location} data={['Mar del Plata']}/>         
        </div>
        <div className={style.buttons}>
          <button className={style['form-button']} type='button' onClick={reset}>
            Limpiar
          </button>
          <button className={style['form-button']} type='button' onClick={buscar} >
            Buscar
          </button>
        </div>
      </Form>
    </div> 
  )
}
