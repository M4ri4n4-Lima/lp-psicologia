import styled from 'styled-components';
import { ReactComponent as LogoFull } from '../../assets/Logo_Full.svg';
import { ReactComponent as EmalIcon } from '../../assets/icons/email.svg';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  border-top: 3px solid ${({ theme }) => theme.rose_dark};
  width: 100%;
  padding: 22px;
  background-color: ${({ theme }) => theme.rose_2};
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 20px;
  } 
`;

export const Logo = styled(LogoFull)`
  max-width: 200px;
  min-width: 150px;
  height: 200px;
  fill: ${({ theme }) => theme.rose_dark};
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 50px;
  max-width: 550px;
  flex-wrap: wrap;

  @media (max-width: 534px) {
    justify-content: center;
  }
`;

export const QuickAccess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  & > a {
    color: ${({ theme }) => theme.grey};
    font-size: 18px;
    font-weight: 400;
    font-family: 'Calibri';
    text-decoration: none;
    transition: 0.2s;
    cursor: pointer;
    
    &:hover {
      color: ${({ theme }) => theme.rose_dark};
    }
  }
`;

export const QuickAccessTitle = styled.h3`
  color: ${({ theme }) => theme.grey};
  font-size: 24px;
  font-weight: 700;
  font-family: 'Calibri';
  margin-bottom: 6px;
`;

export const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;

  @media (max-width: 534px) {
    align-items: center;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const ContactTitle = styled.h3`
  color: ${({ theme }) => theme.grey};
  font-size: 24px;
  font-weight: 700;
  font-family: 'Calibri';
`;

export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const WhatsAppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const Email = styled(EmalIcon)`
  width: 30px;
  height: 30px;
  fill: ${({ theme }) => theme.rose_dark};
`;

export const WhatsApp = styled(FaWhatsapp)`
  font-size: 30px;
  color: ${({ theme }) => theme.rose_dark};
`;

export const ContactInfo = styled(Link)`
  color: ${({ theme }) => theme.grey};
  font-size: 18px;
  font-weight: 400;
  font-family: 'Calibri';
  text-decoration: underline;
`;

export const LocalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const LocalTitle = styled.h3`
  color: ${({ theme }) => theme.grey};
  font-size: 24px;
  font-weight: 700;
  font-family: 'Calibri';
`;

export const FooterBottomShape = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.rose_dark};
`;