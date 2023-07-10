import { PsychoTherapyContainer, Title, TextWrapper, Text, Glow, Logo } from './styles'

const PsychoTherapy = () => {
  return (
    <PsychoTherapyContainer>
      <Title>Uma relação que transforma</Title>
      <TextWrapper>
        <Text>
          A psicoterapia é um cuidado essencial em saúde mental, com foco nas necessidades individuais de cada um. Meu objetivo é criar um espaço seguro e acolhedor, onde você possa se sentir confortável para explorar suas emoções e vivências.

          <br /><br />Aqui, valorizamos a sua singularidade e buscamos compreender profundamente o que está acontecendo em sua vida. Juntos, iremos abordar as questões que surgem durante o processo terapêutico, trabalhando de forma colaborativa para promover o seu bem-estar.

          <br /><br />É importante destacar que a terapia não é um trabalho isolado. Ela é uma jornada que trilharemos juntos, em parceria!
        </Text>
        <Logo />
        <Glow />
      </TextWrapper>
    </PsychoTherapyContainer>
  )
}

export default PsychoTherapy