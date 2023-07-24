
import { useNavigate } from 'react-router-dom'
import style from '../styles/admin.module.css'

export const DashboardCard = ({data}:{data:{titulo?:string,cantidad?:number,backColor?:string, color?:string , url?:string}}) => {

    const { titulo , cantidad, backColor , color , url } = data

    const navigate = useNavigate();

  return (
    <div className={style.dashboardCard}
         style={{backgroundColor:`${backColor}`, cursor:'pointer'}}
         onClick={e=>navigate(`/admin/${url}`)}
         >
        <div className={style['dashCard-up']} >
            <div className={style['dashCard-up-left']} style={{color:`${color}`}} >
                <div className={style['dashCard-up-left-cantidad']} >
                    <h1>{cantidad}</h1>
                </div>
                <div className={style['dashCard-up-left-titulo']} >
                    {titulo}
                </div>
            </div>
        </div>
    </div> 
  )
}
