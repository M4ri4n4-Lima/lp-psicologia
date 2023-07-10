import { TherapyContainer, TextWrapper, Title, Text, Glow, Leaf } from './styles'

const Terapy = () => {
  return (
    <TherapyContainer id="therapy">
      <Title>Como a terapia pode mudar a sua vida</Title>
      <TextWrapper>
        <Text>
          A terapia é uma jornada de descoberta e transformação, capaz de gerar mudanças significativas em sua vida. Por meio do desenvolvimento de uma visão ampliada e consciente de si mesmo(a), você será capaz de explorar seu potencial e ganhar discernimento das suas necessidades emocionais.

          <br /><br />Ao entrar em contato com suas emoções e experiências, você poderá compreender melhor as situações do passado e do presente que influenciam sua vida. Isso permitirá que você estabeleça limites saudáveis, tome decisões assertivas e alcance seus objetivos pessoais de forma mais efetiva.

          <br /><br />Independentemente dos desafios emocionais que você esteja enfrentando, como dificuldades nos relacionamentos, ansiedade, depressão ou questões psicológicas mais profundas, estou aqui para ajudar. Através da terapia, você terá a oportunidade de explorar e superar esses desafios, capacitando-se para uma vida mais plena e satisfatória.
        </Text>
        <Glow />
        <Leaf />
      </TextWrapper>
    </TherapyContainer>
  )
}

export default Terapy