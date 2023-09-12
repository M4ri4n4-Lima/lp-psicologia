import { Agenda, BottomContainer, BottomTitle, Clock, ItemWrapper, Online, ServicesContainer, TextWrapper, Title, Text, TopContainer, ButtonWrapper } from './styles'
import ButtonWhatsApp from '../ButtonWhatsApp/ButtonWhatsApp'
import { DoctoraliaAnchor } from '../Doctoralia/Doctoralia'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <TopContainer>
        <ItemWrapper>
          <Agenda />
          <Title>Agendamento virtual</Title>
        </ItemWrapper>
        <ItemWrapper>
          <Online />
          <Title>Serviço online ou presencial</Title>
        </ItemWrapper>
        <ItemWrapper>
          <Clock />
          <Title>flexibilidade de horários</Title>
        </ItemWrapper>
      </TopContainer>
      <BottomContainer>
        <TextWrapper>
          <BottomTitle>
            Fazer terapia nunca foi tão fácil!
          </BottomTitle>
          <Text>
            Atendimento individualizado e tratamento focado, permitindo que você construa a melhor versão de si mesmo!
          </Text>
        </TextWrapper>
        <ButtonWrapper>
          <DoctoraliaAnchor>
            Mariama Sá de Lima - Doctoralia.com.br
          </DoctoraliaAnchor>
          <ButtonWhatsApp light={true} />
        </ButtonWrapper>
      </BottomContainer>
    </ServicesContainer>
  )
}

export default Services