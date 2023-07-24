import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAppDispatch } from '../../reducers/hooks/useRedux';
import { isInView } from '../../reducers/general';



export const useNavbar = ()=>{

    const { ref:servicio, inView:inServicios  } = useInView();
    const { ref:postulaciones, inView:inPostulaciones  } = useInView();
    const { ref:equipo, inView:inEquipo  } = useInView();
    const {ref:clientes, inView:inClientes} = useInView();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(isInView(true))
    }, [inClientes])
   
    useEffect(() => {
        dispatch(isInView(true))
    }, [inServicios])

    useEffect(() => {
        dispatch(isInView(true))
    }, [inPostulaciones])

    useEffect(() => {
        dispatch(isInView(true))
    }, [inEquipo])

    

    useEffect(() => {
         (!inServicios && !inPostulaciones && !inEquipo && !inClientes ) && dispatch(isInView(false))  
    }, [inEquipo,inPostulaciones,inServicios,inClientes])


    

    return { servicio , postulaciones , equipo ,clientes }


}