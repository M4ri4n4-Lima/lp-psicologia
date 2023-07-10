import { Box, BoxText, BoxTitle, BoxWrapper, Splash, Splash2 } from './styles'

const BoxTherapy = () => {
  return (
    <BoxWrapper>
      <Splash />
      <Splash2 />
      <Box>
        <BoxTitle>Visão integral</BoxTitle>
        <BoxText>
          Nem sempre as coisas são o que parecem! Quando estamos imersos em um problema, não o vemos como ele realmente é! A psicoterapia entra em cena, oferecendo uma visão ampla e abrangente da sua situação.
        </BoxText>
      </Box>
      <Box>
        <BoxTitle>Estratégias</BoxTitle>
        <BoxText>
          Não basta compreender um problema, é preciso resolvê-lo. Por isso, a psicoterapia irá ajudá-lo(a) a desenvolver estratégias criativas e personalizadas para superar os desafios do seu dia a dia.
        </BoxText>
      </Box>
      <Box>
        <BoxTitle>Técnica</BoxTitle>
        <BoxText>
          O atendimento é embasado na psicanálise, que utiliza como técnica a fala e a associação livre, que consiste em falar livremente sobre o que desejar, sem se preocupar com julgamentos.
        </BoxText>
      </Box>
      <Box>
        <BoxTitle>Lugar seguro</BoxTitle>
        <BoxText>
          Aqui você tem a liberdade de ser exatamente quem você é. Explore suas emoções, crenças e pensamentos sem medo, onde você será ouvido(a) e compreendido(a) em toda a sua essência.
        </BoxText>
      </Box>

    </BoxWrapper>
  )
}

export default BoxTherapy