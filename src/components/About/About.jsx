import { AboutContainer, DotsSVG, FlowersImage, TextSection, Image, Title, Description, ImageWrapper, ImageBorder } from './styles'

const About = () => {
  return (
    <AboutContainer id="about">
      <DotsSVG />
      <TextSection>
        <Title>Sobre mim</Title>
        <Description>
          Olá! Sou Mariana, <span>psicóloga clínica</span> especializada na <span>abordagem psicanalítica</span>. Para além da minha formação, tenho uma paixão genuína por ajudar pessoas a conquistarem sua autonomia, desenvolverem domínio próprio e alcançarem uma sólida inteligência emocional.

          <br /><br />Acredito que cada indivíduo possui um potencial único e, por meio do meu trabalho, busco garantir que você descubra e explore esse potencial, superando os desafios que possam surgir em seu caminho. Meu foco está em auxiliar <span>adolescentes e adultos</span> em suas jornadas de autodescoberta e bem-estar emocional.

          <br /><br />Em minha clínica, ofereço um ambiente acolhedor e seguro, onde você pode expressar seus pensamentos, sentimentos e dificuldades de forma livre e sem julgamentos. Por meio de uma escuta atenta e sensível, juntos exploraremos as raízes de seus conflitos internos, buscando compreender os padrões de pensamento e comportamento que podem estar afetando sua qualidade de vida.
        </Description>
      </TextSection>
      <ImageWrapper>
        <FlowersImage />
        <Image />
        <ImageBorder />
      </ImageWrapper>
    </AboutContainer>
  )
}

export default About