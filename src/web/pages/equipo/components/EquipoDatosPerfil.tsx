

export const EquipoDatosPerfil = ({nombre, puesto, imagen}:{nombre:string, puesto:string, imagen:string}) => {
  return (
    <div className='equipo-perfil'>
      <img className='equipo-foto' src={imagen} alt='triangulo'></img>
      <p style={{fontSize: '14px',fontWeight:'bold'}} >{nombre}</p>
      <p style={{fontSize: '14px'}}>{puesto} </p>
 </div>
  )
}
