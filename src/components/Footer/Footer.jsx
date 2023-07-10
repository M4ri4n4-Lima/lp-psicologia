import { FooterContainer,
  FooterBottomShape,
  QuickAccess,
  Logo,
  FooterSection,
  QuickAccessTitle,
  PersonalInfo,
  Contact,
  ContactTitle,
  EmailWrapper,
  Email,
  ContactInfo,
  WhatsAppWrapper,
  WhatsApp,
  LocalWrapper,
  LocalTitle } from './styles'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div style={{
      width: '100%'
    }}>
      <FooterContainer>
        <Logo />
        <FooterSection>
          <QuickAccess>
            <QuickAccessTitle>Acesso Rápido</QuickAccessTitle>
            <Link to="home" smooth={true} duration={1200}>
              Home
            </Link>
            <Link to="about" smooth={true} duration={1200}>
              Sobre mim
            </Link>
            <Link to="therapy" smooth={true} duration={1200}>
              Terapia
            </Link>
            <Link to="services" smooth={true} duration={1000} offset={-200}>
              Serviços
            </Link>
            <Link to="query" smooth={true} duration={1000}>
              Dúvidas
            </Link>
            <Link to="opinions" smooth={true} duration={1000}>
              Opiniões
            </Link>
          </QuickAccess>
          <PersonalInfo>
            <Contact>
              <ContactTitle>Contato</ContactTitle>
              <EmailWrapper>
                <Email />
                <ContactInfo to={"mailto:marianasadelima@gmail.com?&body=Olá, Mariana! Quero agendar uma consulta."} target={"blank"}>
                  marianalimapsicologia@gmail.com
                </ContactInfo>
              </EmailWrapper>
              <WhatsAppWrapper>
                <WhatsApp />
                <ContactInfo to={"https://api.whatsapp.com/send?phone=5581987274688&text=Ol%C3%A1%20Mariana!%20Gostaria%20de%20agendar%20uma%20consulta!"} target={'blank'}>
                  (81) 98727-4688
                </ContactInfo>
              </WhatsAppWrapper>
            </Contact>
            <LocalWrapper>
              <LocalTitle>Endereço:</LocalTitle>
              <ContactInfo to={'https://goo.gl/maps/ZnaTTe2UTDk5CYH2A'} target={'blank'}>
                Av República do Líbano, 251, Recife PE
              </ContactInfo>
            </LocalWrapper>
          </PersonalInfo>
        </FooterSection>
      </FooterContainer>
      <FooterBottomShape></FooterBottomShape>
    </div>
  )
}

export default Footer