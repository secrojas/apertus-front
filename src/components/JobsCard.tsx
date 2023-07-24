import triangle from '../assets/imgs/theme/triangulo.svg'
import logo from '../assets/imgs/jobs/avatar2.png' 

 
interface Data {
    _id?:string
    logo?:string,
    titulo:string,
    compania:string, 
    disponibilidad:string,
    locacion:string,
    tiempo?:string,
    descShort:string,
    tipo:string,
    categoria?:string,
    tecnologia?:string
}


const dataDefault:Data = {
    _id:'',
    titulo:'Development Team Lead',
    compania:'Companía',
    locacion:'Locación',
    disponibilidad:'Full time',
    tiempo:'3 mins ago',
    descShort:'We want someone who has been doing this for a solid 2-3years. We want someone who can demostrate an extremely strong portfolio.',
    tipo:'Presencial',
    categoria:'Sin Definir',
    tecnologia:'No Corresponde'
}

export const JobsCard = ({data=dataDefault}) => { 

    const { titulo, compania, locacion, disponibilidad, descShort, tipo, tiempo, categoria, tecnologia } = data
  return (
    <div className="JobCard" >
        <div className="JobCard-content">
            <div className="JobCard-header">
                <img className='card-triangle' src={triangle} alt='triangulo'></img>
                {/* <img className="card-logo" alt='company' src={logo}/> */}
                <div className="card-title">
                    <h2 className=" animate__animated animate__fadeInUp">{titulo===''?dataDefault.titulo:titulo}</h2>
                    <div className='card-title-desc'>
                        <span className='card-title-desc--1'  style={{color:'black', fontWeight:700}}>{compania==='Sin Definir'?dataDefault.compania:compania}</span>
                        <div className='card-title-desc--2'>
                            <span>{locacion===''?dataDefault.locacion:locacion}</span>
                            <span>{disponibilidad===''?dataDefault.disponibilidad:disponibilidad}</span>
                            <span>{tiempo===''?dataDefault.tiempo:tiempo}</span>
                        </div>
                    </div>
                </div> 
            </div>
            <span className="JobCard-desc">
                {descShort===''?dataDefault.descShort:descShort}
            </span>
            <div className="JobCard-footer">
                <div className="card-footer-button" style={{backgroundColor: 'black'}} >{tipo===''?dataDefault.tipo:tipo}</div>
                <div className="card-footer-button" style={{backgroundColor:'black'}} >{disponibilidad===''?dataDefault.disponibilidad:disponibilidad}</div>
                {
                    categoria !== 'Sin Definir' && 
                    <div className="card-footer-button" style={{backgroundColor:'black'}} >{categoria}</div>
                }
                {
                    tecnologia !== 'No Corresponde'  &&
                    <div className="card-footer-button" style={{backgroundColor:'black'}} >{tecnologia}</div>
                }
            </div>
        </div>
    </div>
  )
}
