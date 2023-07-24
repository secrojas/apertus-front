import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../reducers/hooks/useRedux';
import { filter, resetBuscador, setCurrentPage, setPage, startgetJobs, updateBuscador , updateBuscador2 } from '../../reducers/searchSlice';


interface User{
  _id:string,
  nombre:string,
  rol:string,
  foto:string,
  email:string,
  tel:string,
  cv:string
}


interface Job {
    _id:string,
    categoria:string,
    compania:string,
    tecnologia:string,
    descShort:string,
    descLarge:string,
    disponibilidad:string
    locacion:string,
    salario:string,
    status:string,
    tipo:string,
    titulo:string,
    postulantes: User[]  
}




export const useSearch = ()=>{

    const dispatch = useAppDispatch();

    const {  filtroJobs:jobs,  totalJobs , buscador , pagination , buscador2 } = useAppSelector(state => state.searchSlice)

    const { currentPage , page } = pagination;
    
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(startgetJobs());
    }, [])

  

    const onchange = (e: React.ChangeEvent<HTMLSelectElement> )=>{
      dispatch(updateBuscador({
          [e.target.name]:e.target.value
      }))
    } 

    const onCheck =(e:React.ChangeEvent<HTMLInputElement>)=>{
      let name = e.target.name
      dispatch(updateBuscador2({
        [name]:{
          ...buscador2[name],
          [e.target.id]:e.target.checked
        }
    }))
      
    }
    
    const reset =()=>{
       dispatch(resetBuscador());
       dispatch(filter([...totalJobs]))
    }


    const buscar = ()=>{
        
        let res = [...totalJobs];
        res = buscador.Disponibilidad.length !==0 ? res.filter(item=>item.disponibilidad === buscador.Disponibilidad): res;
        res = buscador.Tipo.length !==0 ? res.filter(item=>item.tipo === buscador.Tipo) : res;
        res = buscador.Ubicación.length !==0 ? res.filter(item=>item.locacion === buscador.Ubicación) : res;
        res = buscador.Salario.length !==0 ? res.filter(item=>item.salario === buscador.Salario) : res;

        let resCheck = [...res];

        resCheck = resCheck.filter(item=> buscador2['Categorías'][item.categoria] === true || buscador2['Tecnologías'][item.tecnologia] === true || buscador2['Empresas'][item.compania] === true ) ;

        console.log('res',res);
        console.log('resCheck', resCheck)

        resCheck.length !== 0 ? dispatch(filter(resCheck)) : dispatch(filter(res)) 

    }


    const orderBy = (e: React.ChangeEvent<HTMLSelectElement>)=>{

     let  res = e.target.value === 'Ultimos' ? [...totalJobs].reverse() : [...totalJobs]; 
    
     dispatch(filter(res));

    }

    const byPost = (e: React.ChangeEvent<HTMLInputElement>)=>{

      let value = e.target.value.trim().toLowerCase();

      let res = [...totalJobs];
    
       res = res.filter(item=> item.titulo.trim().toLowerCase().includes(value) );

      dispatch(filter(res));

    }

    const currentJobs = (): Job[] =>{

      return jobs.slice(currentPage,currentPage + 5)

    }

    const totalPage = () : number =>{
      const cant = jobs.length / 5;
      return cant > Math.trunc(cant) ? Math.trunc(cant) + 1 : Math.trunc(cant)
    }

    const next = ()=>{
     if (jobs.length>(currentPage +5)){
      dispatch(setCurrentPage(5));
      dispatch(setPage(1))
     }   
    }

    const prev = ()=>{
      if (currentPage> 0) {
        dispatch(setCurrentPage(-5));
        dispatch(setPage(-1))
      } 
    }

    return {
        jobs,
        currentJobs,
        onchange,
        buscar,
        orderBy,
        byPost,
        next,
        prev,
        totalPage,
        page,
        currentPage,
        reset,
        onCheck,
        buscador,
        buscador2
      }
}