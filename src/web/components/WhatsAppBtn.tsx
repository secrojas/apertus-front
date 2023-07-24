import whatsApp from '../../assets/imgs/theme/icons/WhatsApp.svg'
import { useAppSelector } from '../../reducers/hooks/useRedux';

export const WhatsAppBtn = () => {

  const {config} = useAppSelector(state => state.globalSlice)
  
  const link = `https://wa.me/${config.whatsapp}`

  return (

    <a
    target='_blank'
    className='btn-flotante'
    aria-label="Chat on WhatsApp"
    href={link}
   >
    <img
     alt="WhatsApp"
     src={whatsApp}
     className='btn-flotante'
     />
     </a>
  )
}
