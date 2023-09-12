/* eslint-disable react/prop-types */
import { useState, useContext } from 'react'
import { HeaderContainer, LocalIcon, LocalTelSection, LocalWrapper, LogoIcon, NavBar, RightSection, RightText, NavLink, } from './styles'
import { Divide as Hamburger } from 'hamburger-react'
import { Link } from 'react-scroll'
import { ActiveContext } from '../../context/ActiveProvider'

const Header = () => {
  const [widthViewPort, setWidthViewPort] = useState(window.innerWidth);
  const {active, setIsActive: setActive } = useContext(ActiveContext);
  
  // Desativar o overflow do body quando o menu mobile estiver aberto
  if (active) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  window.addEventListener('resize', () => {
    setWidthViewPort(window.innerWidth);
  });

  return (
    <HeaderContainer>
      <LogoIcon />
      <RightSection>
        <LocalTelSection>
          <LocalWrapper to="https://goo.gl/maps/ZnaTTe2UTDk5CYH2A" target="blank">
            <LocalIcon />
            <RightText>Av República do Líbano, 251, Recife PE</RightText>
          </LocalWrapper>
        </LocalTelSection>
        <NavBar $open={active}>
          <NavLink>
            <Link to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              onClick={() => setActive(false)}
            >Início</Link>
          </NavLink>
          <NavLink>
            <Link to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              onClick={() => setActive(false)}
            >Sobre mim</Link>
          </NavLink>
          <NavLink>
            <Link to="therapy"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              onClick={() => setActive(false)}
            >Terapia</Link>
          </NavLink>
          <NavLink>
            <Link to="services"
              smooth={true}
              duration={900}
              spy={true}
              exact='true'
              offset={-200}
              onClick={() => setActive(false)}
            >Serviços</Link>
          </NavLink>
          <NavLink>
            <Link to="opinions"
              smooth={true}
              duration={1200}
              spy={true}
              exact='true'
              offset={-80}
              onClick={() => setActive(false)}
            >Opiniões</Link>
          </NavLink>
          <NavLink>
            <Link to="query"
              smooth={true}
              duration={1200}
              spy={true}
              exact='true'
              offset={0}
              onClick={() => setActive(false)}
            >Dúvidas</Link>
          </NavLink>
        </NavBar>
      </RightSection>
      <Hamburger
        color="#fff"
        size={ widthViewPort * 0.07 }
        toggled={ active }
        toggle={ setActive }
        duration={ 0.5 }
      />
    </HeaderContainer>
  )
}

export default Header