import styled from 'styled-components'
import Home from './components/Home/Home'
import Header from './components/Header/Header';
import CardsComponent from './components/Home/Cards';
import About from './components/About/About';
import Therapy from './components/Therapy/Therapy';
import BoxTherapy from './components/Therapy/BoxTherapy';
import PsychoTherapy from './components/PsychoTherapy/PsychoTherapy';
import BoxesInfo from './components/BoxesInfo/BoxesInfo';
import Services from './components/Services/Services';
import Faq from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.bg_gradient};
  overflow: hidden;
`;

const App = () => {
  const [active, setIsActive] = useState(false);

  return (
      <Container>
        <Header active={active} setActive={setIsActive} />
        <Home active={active} />
        <CardsComponent />
        <About />
        <Therapy />
        <BoxTherapy />
        <PsychoTherapy />
        <BoxesInfo />
        <Services />
        <Faq />
        <Footer />
      </Container>
  )
}

export default App;