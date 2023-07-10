/* eslint-disable react/prop-types */
import { WhatsAppWrapper,
  WhatsAppIcon,
  WhatsAppText } from './styles'

const ButtonWhatsApp = ({ light }) => {
  return (
    <WhatsAppWrapper $light={light} to={'https://api.whatsapp.com/send?phone=5581987274688&text=Ol%C3%A1%20Mariana!%20Gostaria%20de%20agendar%20uma%20consulta!'} target='blank'>
      <WhatsAppIcon />
      <WhatsAppText>
        Marque uma consulta 
      </WhatsAppText>
    </WhatsAppWrapper>
  )
}

export default ButtonWhatsApp;