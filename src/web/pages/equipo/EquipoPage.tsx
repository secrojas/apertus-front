import { SectionEquipo } from "../home/components"
import { WhatsAppBtn } from '../../components/WhatsAppBtn';
import { useEffect } from 'react';

export const EquipoPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div style={{paddingTop:'130px'}}>
      <SectionEquipo/>
      <WhatsAppBtn/>
    </div>
  )
}
