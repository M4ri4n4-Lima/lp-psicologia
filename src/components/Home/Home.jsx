/* eslint-disable react/prop-types */
import { H1, H2, H3, HomeContainer, Image, TextInfo, TextSection, BottomBG } from "./styles";
import ButtonWhatsApp from "../ButtonWhatsApp/ButtonWhatsApp";

const Home = ({ active }) => {
  return (
    <HomeContainer id="home" $open={active}>
      <BottomBG />
      <Image />
      <TextSection>
        <TextInfo>
          <H3>PSICÓLOGA CLÍNICA |CRP: 02/23385</H3>
          <H1>Mariana Sá de Lima</H1>
          <H2>Minha missão é te ajudar a alcançar uma vida mais plena, fortalecendo sua saúde mental. Invista em si mesmo e descubra todo o seu potencial.</H2>
        </TextInfo>
        <ButtonWhatsApp light={false} />
      </TextSection>
    </HomeContainer>
  )
}

export default Home