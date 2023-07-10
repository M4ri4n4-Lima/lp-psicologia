import styled, { keyframes } from 'styled-components';
import { ReactComponent as ShapeWaveIcon } from '../../assets/shape_wave.svg';
import { ReactComponent as SigiloIcon } from '../../assets/icons/sigilo.svg';
import { ReactComponent as ResultadosIcon } from '../../assets/icons/resultados.svg';
import { ReactComponent as AutonomiaIcon } from '../../assets/icons/autonomia.svg';
import { ReactComponent as ConfiançaIcon } from '../../assets/icons/confiança.svg';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(calc(360deg * 3));
  }
`;

export const BoxesInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 700px;
  width: 100%;
  position: relative;
  z-index: 2;
  gap: 40px;
  align-content: center;

  @media (max-width: 768px) {
    min-height: 100vh;
    padding: 120px 0;
  }
`;

export const ShapeWave = styled(ShapeWaveIcon)`
  position: absolute;
  z-index: 0;
  width: 200px;
  height: auto;

  &:nth-child(5) {
    top: 20px;
    left: -100px;
    animation: ${rotate} 40s linear infinite;
  }

  &:nth-child(6) {
    bottom: 20px;
    right: -100px;
    animation: ${rotate} 80s -10s linear infinite;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BoxInfo = styled.div`
  width: 320px;
  height: 240px;
  display: flex;
  padding: 31px 21px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 23px;
  background-color: ${({ theme }) => theme.blank};
  position: relative;
  z-index: 1;
  border-radius: 25.652px;
  border: 0.8px solid ${({ theme }) => theme.rose};
  box-shadow: 4.275305271148682px 8.550610542297363px 17.101221084594727px 0px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 20px;
    border: none;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme }) => theme.grey};
  font-family: "Gupter";

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.grey};
  font-family: "Calibri";
  text-align: center;
`;

export const Sigilo = styled(SigiloIcon)`
  width: 200px;
  min-height: 50%;

  @media screen and (max-width: 768px) {
    width: 100px;
    min-height: 25%;
  }
`;

export const Resultados = styled(ResultadosIcon)`
  width: 200px;
  min-height: 50%;

  @media screen and (max-width: 768px) {
    width: 100px;
    min-height: 25%;
  }
`;

export const Autonomia = styled(AutonomiaIcon)`
  width: 200px;
  min-height: 50%;

  @media screen and (max-width: 768px) {
    width: 100px;
    min-height: 25%;
  }
`;

export const Confiança = styled(ConfiançaIcon)`
  width: 200px;
  min-height: 50%;

  @media screen and (max-width: 768px) {
    width: 100px;
    min-height: 25%;
  }
`;