import { Form, FormCheck } from "react-bootstrap"
import { useSearch } from '../../../hooks/useSearch';
import style from '../css/check.module.css'

interface Category {
  _id:string,
  nombre:string,
  status:string,
  descripcion:string
}
interface Technology {
  _id:string,
  nombre:string,
  status:string,
  descripcion:string
}
interface Company {
  _id:string,
  nombre:string,
  ubicacion:string,
  descripcion:string,
  status:string,
  logo:string,
}


export const Check = ({name , entidad}:{name:string , entidad: Technology[] | Category[] | Company[]  }) => {

  const { onCheck , buscador2 } = useSearch();
  

  return (
    <div>
        <h1 className={style.h1} >{name}</h1>
        <Form className={style.form}>
      {[name].map((type, indx) => (
        <div key={indx} className="mb-3">

          {
            entidad.map((item , indx)=>{
              if(item.nombre !=='Sin Definir'){
                return <Form.Check
                name={name}
                key={indx}  
                type='checkbox'
                id={item.nombre}
                label={item.nombre}
                onChange={onCheck}
                checked={buscador2[name][item.nombre]}
                />
              }
            })
          }

        </div>
      ))}
    </Form>
    </div>
  )
}

