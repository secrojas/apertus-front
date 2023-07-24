import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import search from '../assets/imgs/theme/icons/search.svg'

export const Buscador = ({filter , paramBusqueda }:{filter:(e: React.ChangeEvent<HTMLInputElement>)=>void , paramBusqueda:string}) => {
  return (
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
                <img src={search} style={{width:'20px'}}/>
            </InputGroup.Text>
                <Form.Control
                placeholder={` Buscar por ${paramBusqueda} ...`}
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={filter}
                />
        </InputGroup>
  )
}
