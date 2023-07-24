import { Form } from 'react-bootstrap';
import style from '../css/filtro.module.css';
import { useSearch } from '../../../hooks/useSearch';

export const Filtro = ({name, img , data}:{name:string, img?:string , data: String[]}) => {

  const {onchange , orderBy , buscador} = useSearch();

  return (
    <div className={style.contenedor} >   
      {img &&  <img alt='search' src={img} style={{width:'20px'}} />}
      <Form.Select
        value={buscador[name]}
        name={name}
        onChange={name === 'Ordenar por' ? orderBy : onchange }
      >
        <option value=''>{name}</option>
        {
           data.map( (item , indx) => (
            <option
             key={indx}
             value={`${item}`}
            >{item}</option>
           ))
        }
      </Form.Select>
    </div>
  )
}
