import { useAppDispatch, useAppSelector } from '../../../../reducers/hooks/useRedux'
import style from '../css/buscador2.module.css'
import { Check } from './Check'
import { useEffect } from 'react';
import { startgetCategories, startgetCompanies, startgetTechnologies } from '../../../../reducers/jobSlice';
import { useSearch } from '../../../hooks/useSearch';


export const Buscador2 = () => {

  const { reset , buscar } = useSearch();
  const { categories , companies , technologies } = useAppSelector(state=>state.jobSlice)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(startgetTechnologies());
    dispatch(startgetCategories());
    dispatch(startgetCompanies());
  }, []) 
  
  
  return ( 
    <div className={style.layout}>
      <div className={style.up} >
        <Check name='Tecnologías' entidad={technologies} />
        <Check name='Categorías' entidad={categories } />
        <Check name='Empresas' entidad={companies} />
      </div>
      <div className={style.buttons}>
          <button className={style['form-button']} type='button' onClick={reset} >
            Limpiar
          </button>
          <button className={style['form-button']} type='button' onClick={buscar} >
            Buscar
          </button>
        </div>
    </div>
  )
}
